<?php
// start session
session_start();
// include the validate.php
include 'validate.php';

// initial form state
$form_values = [
    'user_name' => '',
    'email' => '',
    'password' => '',
    'birth_year' => '',
    'gender' => '',
];
// Initialize error messages 
$form_errors = [
    'user_name' => '',
    'email' => '',
    'password' => '',
    'birth_year' => '',
    'gender' => '',
];
// initialize a message that will show form status
$form_message = '';
// define valid options for gender selection
$valid_gender = ['Male', 'Female'];

// check if the form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // collect and sanitize values
    $form_values['user_name'] = trim($_POST['user_name'] ?? '');
    $form_values['email'] = trim($_POST['email'] ?? '');
    $form_values['password'] = trim($_POST['password'] ?? '');
    $form_values['birth_year'] = $_POST['birth_year'] ?? '';
    $form_values['gender'] = $_POST['gender'] ?? '';

    // validate username length
    if (!validate_text_length($form_values['user_name'], 3, 20)) {
        $form_errors['user_name'] = "Username must be 3-20 characters.<br>";
    }
    // validate email format
    if (!filter_var($form_values['email'], FILTER_VALIDATE_EMAIL)) {
        $form_errors['email'] = "Please enter a valid email address.<br>";
    }
    // validate password length
    if (!validate_text_length($form_values['password'], 6, 30)) {
        $form_errors['password'] = "Password must be 6-30 characters.<br>";
    }
    // validate that birth year is numeric and within allowed range
    if (!validate_number_range($form_values['birth_year'], 1900, 2024)) {
        $form_errors['birth_year'] = "Please enter a valid birth year (1900–2024).<br>";
    }
    // validate that selected gender is one of the allowed values
    if (!validate_option($form_values['gender'], $valid_gender)) {
        $form_errors['gender'] = "Please select a valid gender.<br>";
    }

    // final message
    // if there are no errors, store data and redirect to thank-you page
    if (implode('', $form_errors) === '') {
        // set cookie
        setcookie('user_name', $form_values['user_name'], time() + 3600);
        setcookie('user_password', $form_values['password'], time() + 3600);
        // store gender in session
        $_SESSION['gender'] = $form_values['gender'];
        // redirt with header to thank_you.php
        header("Location: https://jimmyzhang.rhody.dev/csc372_projects/thank_you.php");
        // exit 
        exit();
    } else {
        // show error message
        $form_message = "**Please correct the errors below.**";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Account</title>
    <link rel="stylesheet" href="CSS/form.css">
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="bg-black text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom-green w-100">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav menu">
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/index.html">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/guide.html">PC BUILD</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/shop.html">SHOP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/about_us.php">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/index.html">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/register.php">SIGN UP</a>
                    </li>       
                </ul>
            </div>

        </div>
    </nav>
    <div class="header_line"></div>
    <div class = "container logo_container mt-4">
        <img src = "Images/logo3.png" alt="Abdullah logistic logo" class = "img-fluid" >
    </div>


    <div class="form-container">
        <h4 class="text-center mb-4">CREATE ACCOUNT</h4>

        <?php if ($form_message): ?>
            <p class="text-center text-danger fw-bold"><?= htmlspecialchars($form_message) ?></p>
        <?php endif; ?>

        <form method="POST" action="register.php" id="registerForm">

            <label for="user_name">Username</label>
            <input type="text" name="user_name" id="user_name" class="form-control" value="<?= htmlspecialchars($form_values['user_name']) ?>">
            <small class="text-danger"><?= $form_errors['user_name'] ?></small>


            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control" value="<?= htmlspecialchars($form_values['email']) ?>">
            <small class="text-danger"><?= $form_errors['email'] ?></small>


            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control">
            <small class="text-danger"><?= $form_errors['password'] ?></small>

    
            <label for="birth_year">Birth Year</label>
            <input type="number" name="birth_year" id="birth_year" class="form-control" value="<?= htmlspecialchars($form_values['birth_year']) ?>">
            <small class="text-danger"><?= $form_errors['birth_year'] ?></small>


            <label for="gender">Gender</label>
            <select name="gender" id="gender" class="form-control">
                <option value="">-- Select gender --</option>
                <?php foreach ($valid_gender as $g): ?>
                    <option value="<?= $g ?>" <?= $form_values['gender'] == $g ? 'selected' : '' ?>><?= ucfirst($g) ?></option>
                <?php endforeach; ?>
            </select>
            <small class="text-danger"><?= $form_errors['gender'] ?></small>


            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" id="termsCheckbox" onchange="toggleSubmit()">
                <label class="form-check-label">
                    I accept the <a href="#" class="text-neon">Terms of Service</a> and <a href="#" class="text-neon">Privacy Policy</a>
                </label>
            </div>

            <button type="submit" class="btn w-100 mt-3" id="submitBtn" disabled>ACCEPT AND CREATE</button>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="JavaScript/jquery-3.7.1.min.js"></script>
    <script src="JavaScript/toggle.js"></script>
</body>
</html>
