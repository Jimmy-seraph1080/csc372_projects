<?php
// enable error reporting to help debug issues
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);
// include respective file
require_once 'includes/session.php';
require_once 'includes/database-connection.php';
require_once 'validate.php';


// determine which tab to show login by default
$active_tab = $_GET['tab'] ?? 'login';
// initialize message and form data arrays
$message = '';
$form_data = [];

// if the form was submitted via POST, then process the submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // handle login Form Submission
  // if login email is set, then handle login logic
  if (isset($_POST['login_email'])) {
    // retrieve and trim email and password
    $email = trim($_POST['login_email'] ?? '');
    $password = trim($_POST['login_password'] ?? '');
    if (empty($email) || empty($password)) {
      // then set an error message for missing fields and stay on login
      $message = "Please fill in all fields.";
      $active_tab = 'login';
    }
    else {
      try {

        // Attempt to fetch user by email
        $user = pdo($pdo, "SELECT * FROM users WHERE email = :email", ['email' => $email])->fetch();
        // Verify password and user
        if ($user && password_verify($password, $user['password_hash'])) {
          // then log the user in and redirect to the main page
          login($email); // Set session
          header('Location: https://jimmyzhang.rhody.dev/csc372_projects/index.html');
          exit;
        }
        else {
          // then set an invalid credentials message and stay on login
          $message = "Invalid email or password.";
          $active_tab = 'login';
        }
      }
      catch (PDOException $e) {
        // then catch database errors, set the message, and stay on login
        $message = "Login error: " . $e->getMessage();
        $active_tab = 'login';
      }
    }
  }
  // handle signup form submission
  elseif (isset($_POST['signup_email'])) {
    // then collect and trim signup fields into $form_data
    $form_data = [
      'email' => trim($_POST['signup_email'] ?? ''),
      'password' => trim($_POST['signup_password'] ?? ''),
      'username' => trim($_POST['username'] ?? ''),
      'gender' => $_POST['gender'] ?? 'Other',
      'birth_year' => $_POST['birth_year'] ?? ''
    ];
    // Validation
    // set valid as true
    $valid = true;
    // check email 
    if (!validate_email($form_data['email'])) {
      $message = "Invalid email format.";
      $valid = false;
    }
    // check text length
    if (!validate_text_length($form_data['password'], 6, 20)) {
      $message = "Password must be 6-20 characters.";
      $valid = false;
    }
    // check text length
    if (!validate_text_length($form_data['username'], 3, 20)) {
      $message = "Username must be 3-20 characters.";
      $valid = false;
    }
    // check birth year 
    if (!validate_birth_year($form_data['birth_year'])) {
      $message = "Invalid birth year (1900-" . date('Y') . ").";
      $valid = false;
    }
    // if all inputs are valid, then attempt to insert the new user
    if ($valid) {
      try {
        // then hash the password and prepare SQL insert
        $password_hash = password_hash($form_data['password'], PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (email, password_hash, username, gender, birth_year)
                VALUES (:email, :password_hash, :username, :gender, :birth_year)";
        // then execute the insert statement
        pdo($pdo, $sql, [
          'email' => $form_data['email'],
          'password_hash' => $password_hash,
          'username' => $form_data['username'],
          'gender' => $form_data['gender'],
          'birth_year' => $form_data['birth_year']]);
          // then redirect to a thank-you page after successful registration
          header("Location: https://jimmyzhang.rhody.dev/csc372_projects/thank_you.php");
          exit;
      }
      catch (PDOException $e) {
        // if email is already taken (error code 1062), then set a specific message
        $message = ($e->errorInfo[1] == 1062) 
          ? "Email already registered." 
          : "Registration error: " . $e->getMessage();
        $active_tab = 'register';
      }
    } 
    else {
      // if validation failed, then keep the register tab active
      $active_tab = 'register';
    }
  }
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login / Sign Up</title>
      <link rel="preconnect" href="https://cdn.jsdelivr.net">
      <link rel="preconnect" href="https://fonts.gstatic.com">

      <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style">
      <link rel="preload" href="CSS/login_signin.css" as="login">
      <link rel="preload" href="CSS/style.css" as="style">

      <link rel="stylesheet" href="CSS/login_signin.css">
      <link rel="stylesheet" href="CSS/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="left-side"></div>

    <div class="right-side">
    <div class="container mt-4">
              <img src="Images/logo3-5.webp" alt="Abdullah logistic logo" class="img-fluid">
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

        <!-- login form -->
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

        <!-- register form -->
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