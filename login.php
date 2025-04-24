<?php
require_once 'includes/session.php';
require_once 'includes/database-connection.php';
require_once 'validate.php';
// determine which tab should be active (login or sign up)
$active_tab = $_GET['tab'] ?? 'login';
// message to hold errors or status updates
$message = '';
// form data storage
$form_data = [];
// check if form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // handle Login Form Submission
    if (isset($_POST['login_email'])) {
        $email = trim($_POST['login_email'] ?? '');
        $password = trim($_POST['login_password'] ?? '');
        // validation
        if (empty($email) || empty($password)) {
            $message = "Please fill in all fields.";
            $active_tab = 'login';
        } else {
            $user = pdo($pdo, 
                "SELECT * FROM users WHERE email = :email", 
                ['email' => $email]
            )->fetch();

            if ($user && password_verify($password, $user['password_hash'])) {
                login($email);
                header('Location: index.html');
                exit;
            } else {
                $message = "Invalid email or password.";
                $active_tab = 'login';
            }
        }
    }
    // handle Signup Form Submission
    elseif (isset($_POST['signup_email'])) {
        $form_data = [
            'email' => trim($_POST['signup_email'] ?? ''),
            'password' => trim($_POST['signup_password'] ?? ''),
            'username' => trim($_POST['username'] ?? ''),
            'gender' => $_POST['gender'] ?? 'Other',
            'birth_year' => $_POST['birth_year'] ?? ''
        ];

        // validation
        $valid = true;
        if (!validate_email($form_data['email'])) {
            $message = "Invalid email format.";
            $valid = false;
        }
        if (!validate_text_length($form_data['password'], 6, 20)) {
            $message = "Password must be 6-20 characters.";
            $valid = false;
        }
        if (!validate_text_length($form_data['username'], 3, 20)) {
            $message = "Username must be 3-20 characters.";
            $valid = false;
        }
        if (!validate_birth_year($form_data['birth_year'])) {
            $message = "Invalid birth year (1900-" . date('Y') . ").";
            $valid = false;
        }
        // if validation passed, proceed to register user
        if ($valid) {
            try {
                $password_hash = password_hash($form_data['password'], PASSWORD_DEFAULT);
                $sql = "INSERT INTO users (email, password_hash, username, gender, birth_year)
                        VALUES (:email, :password_hash, :username, :gender, :birth_year)";
                
                pdo($pdo, $sql, [
                    'email' => $form_data['email'],
                    'password_hash' => $password_hash,
                    'username' => $form_data['username'],
                    'gender' => $form_data['gender'],
                    'birth_year' => $form_data['birth_year']
                ]);
                // redirect to thank-you page after successful signup
                header("Location: thank_you.php");
                exit;
            } catch (PDOException $e) {
               // handle duplicate email
                $message = ($e->errorInfo[1] == 1062) 
                    ? "Email already registered." 
                    : "Registration error: " . $e->getMessage();
                $active_tab = 'register';
            }
        } else {
            // Validation failed, stay on registration tab
            $active_tab = 'register';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login / Sign Up</title>
    <link rel="stylesheet" href="CSS/login_signin.css">
    <link rel="stylesheet" href="CSS/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<body>
  <div class="left-side"></div>

  <div class="right-side">
  <div class="container mt-4">
            <img src="Images/logo3-5.png" alt="Abdullah logistic logo" class="img-fluid">
  </div>
  <section>
    <div class="form-wrapper">
      <div class="tabs">
        <a class="tab <?= $active_tab === 'login' ? 'active' : '' ?>" href="?tab=login">Log In</a>
        <a class="tab <?= $active_tab === 'register' ? 'active' : '' ?>" href="?tab=register">Sign Up</a>
      </div>

      <?php if ($message): ?>
        <div class="alert alert-danger"><?= htmlspecialchars($message) ?></div>
      <?php endif; ?>

      <form class="form <?= $active_tab === 'login' ? 'active' : '' ?>" method="POST">
        <div class="mb-3">
          <label for="login_email" class="form-label">Email</label>
          <input type="email" name="login_email" class="form-control" value="<?= htmlspecialchars($_POST['login_email'] ?? '') ?>" required>
        </div>
        <div class="mb-3">
          <label for="login_password" class="form-label">Password</label>
          <input type="password" name="login_password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-success w-100 fw-semibold shadow-sm">Login</button>
      </form>

      <form class="form <?= $active_tab === 'register' ? 'active' : '' ?>" method="POST">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" name="username" class="form-control" value="<?= htmlspecialchars($form_data['username'] ?? '') ?>" required>
          </div>
          <div class="mb-3">
            <label for="signup_email" class="form-label">Email</label>
            <input type="email" name="signup_email" class="form-control" value="<?= htmlspecialchars($form_data['email'] ?? '') ?>" required>
          </div>
          <div class="mb-3">
            <label for="signup_password" class="form-label">Password</label>
            <input type="password" name="signup_password" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="birth_year" class="form-label">Birth Year</label>
            <input type="number" name="birth_year" class="form-control" value="<?= htmlspecialchars($form_data['birth_year'] ?? '') ?>"  min="1900" max="<?= date('Y') ?>" required>
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select name="gender" class="form-select" required>
              <option value="">-- Select gender --</option>
              <option value="Male" <?= ($form_data['gender'] ?? '') === 'Male' ? 'selected' : '' ?>>Male</option>
              <option value="Female" <?= ($form_data['gender'] ?? '') === 'Female' ? 'selected' : '' ?>>Female</option>
              <option value="Other" <?= ($form_data['gender'] ?? '') === 'Other' ? 'selected' : '' ?>>Other</option>
            </select>
          </div>
          <button type="submit" class="btn btn-success w-100 fw-semibold shadow-sm">Sign Up</button>
      </form>
    </div>
  </section>
  </div>
  <br>
  <br>
</body>
</html>