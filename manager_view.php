<?php
require 'includes/database-connection.php';
// message variable to store success feedback for the user
$message = '';
// check if the form was submitted using the POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // get the action type (insert, update, delete) from the form
    $action = $_POST['action'];
    // insert new part
    if ($action === 'insert') {
        // sql query to insert a new part into the database
        $sql = "INSERT INTO parts (name, category, brand, price, stock, description, image_url)
                VALUES (:name, :category, :brand, :price, :stock, :description, :image_url)";
        // prepare and execute the SQL statement with bound parameters
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'name' => $_POST['name'],
            'category' => $_POST['category'],
            'brand' => $_POST['brand'],
            'price' => $_POST['price'],
            'stock' => $_POST['stock'],
            'description' => $_POST['description'],
            'image_url' => $_POST['image_url']
        ]);
        // store the number of rows inserted into the $message
        $message = "Inserted " . $stmt->rowCount() . " row(s).";
    // update existing part's price
    } elseif ($action === 'update') {
        $sql = "UPDATE parts SET price = :price WHERE name = :name";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'price' => $_POST['price'],
            'name' => $_POST['name']
        ]);
        $message = "Updated " . $stmt->rowCount() . " row(s).";
    // delete parts from parts table
    } elseif ($action === 'delete') {
        $sql = "DELETE FROM parts WHERE name = :name";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'name' => $_POST['name']
        ]);
        $message = "Deleted " . $stmt->rowCount() . " row(s).";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage PC Parts</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS/manage_form.css">
    <link rel="stylesheet" href="CSS/style.css">
</head>
    <body class="bg-black text-white">
        <header class="position-relative">
            <nav class="navbar navbar-expand-lg navbar-dark position-absolute w-100 top-0 start-0">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav menu">
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/index.php">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/guide.html">PC BUILD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/shop.php">SHOP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/about_us.php">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/login.php">lOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/logout.php">LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    
    <div class="container my-5">
        <h1>MANAGE PC PARTS</h1>
    
        <?php if ($message): ?>
            <div class="alert alert-info border border-success shadow-sm"> <?= htmlspecialchars($message) ?> </div>
        <?php endif; ?>
    
        <div class="form-container">
            <h2>ADD NEW PART</h2>
            <form method="post">
                <input type="hidden" name="action" value="insert">
                <input type="text" name="name" class="form-control mb-2" placeholder="Part Name" required>
                <input type="text" name="category" class="form-control mb-2" placeholder="Category" required>
                <input type="text" name="brand" class="form-control mb-2" placeholder="Brand" required>
                <input type="number" step="0.01" name="price" class="form-control mb-2" placeholder="Price" required>
                <input type="number" name="stock" class="form-control mb-2" placeholder="Stock" required>
                <input type="text" name="image_url" class="form-control mb-2" placeholder="Image URL">
                <textarea name="description" class="form-control mb-3" placeholder="Description" required></textarea>
                <button class="btn btn-green w-100">Add Part</button>
            </form>
        </div>
    
        <div class="form-container">
            <h2>UPDATE PART PRICE</h2>
            <form method="post">
                <input type="hidden" name="action" value="update">
                <input type="text" name="name" class="form-control mb-2" placeholder="Part Name" required>
                <input type="number" step="0.01" name="price" class="form-control mb-3" placeholder="New Price" required>
                <button class="btn btn-warning w-100">Update Price</button>
            </form>
        </div>
    
        <div class="form-container">
            <h2>DELETE PART</h2>
            <form method="post">
                <input type="hidden" name="action" value="delete">
                <input type="text" name="name" class="form-control mb-3" placeholder="Part Name" required>
                <button class="btn btn-danger w-100">Delete Part</button>
            </form>
        </div>
    </div>
</body>
</html>
