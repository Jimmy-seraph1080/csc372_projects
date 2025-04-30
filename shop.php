<?php
// include DB connection
require 'includes/database-connection.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PC Parts Store</title>
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link rel="preconnect" href="https://fonts.gstatic.com">

        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style">
        <link rel="preload" href="CSS/style.css" as="style">
        <link rel="preload" href="CSS/test.css" as="test">
        <link rel="preload" href="CSS/chatbot.css" as="chat">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="CSS/style.css">
        <link rel="stylesheet" href="CSS/test.css">
        <link rel="stylesheet" href="CSS/chatbot.css">
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
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/index.html">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/guide.html">PC BUILD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/shop.php">SHOP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/index.html">ABOUT</a>
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
        <div class="header_line"></div>
        <div class = "container logo_container mt-4">
            <img src = "Images/logo3.webp" alt="Abdullah logistic logo" class = "img-fluid" >
        </div>

        <!-- introduction -->
        <section id="intro" class="mt-5 text-center hero">
            <div class="hero-inner">
                <h1 class="title">Welcome to The PC Parts Store</h1>
                <p class="phrase">Building a PC is an adventure, and we're here to help!</p>
                <p class="phrase">Click on a product to learn more!</p>
            </div>
        </section>

        <section class="container text-center mt-4">
            <div class="row justify-content-center">
                <?php
                $sql = "SELECT * FROM parts";
                $stmt = $pdo->query($sql);
                while ($part = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo '
                    <div class="col-md-4 mb-4">
                        <div class="card bg-dark text-white border-success h-100">
                            <div class="card-body">
                                <img src="' . htmlspecialchars($part['image_url']) . '" class="img-fluid mb-2" alt="' . htmlspecialchars($part['name']) . '">
                                <h5 class="card-title">' . htmlspecialchars($part['name']) . '</h5>
                                <p class="card-text"><strong>Category:</strong> ' . htmlspecialchars($part['category']) . '</p>
                                <p class="card-text"><strong>Brand:</strong> ' . htmlspecialchars($part['brand']) . '</p>
                                <p class="card-text"><strong>Price:</strong> $' . number_format($part['price'], 2) . '</p>
                                <p class="card-text">' . htmlspecialchars($part['description']) . '</p>
                            </div>
                        </div>
                    </div>';
                }
                ?>
            </div>
        </section>

        <section id="content" class="container text-center mt-4">
            <!-- product display -->
            <div id="product" class="row mt-4 justify-content-center">
                <div class="col-md-4">
                    <div class="bg-dark card bg-dark text-white border-success fixed-height">
                        <div class="card-body">
                            <img id="4090" src="Images/4090.webp" class="img-fluid product" alt="NVIDIA RTX 4090">
                            <h5 class="card-title">NVIDIA RTX 4090</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-dark card bg-dark text-white border-success fixed-height">
                        <div class="card-body">
                            <img id="i9" src="Images/i9.webp" class="img-fluid product" alt="Intel Core i9 13900K" >
                            <h5 class="card-title">Intel Core i9 13900K</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-dark card bg-dark text-white border-success fixed-height">
                        <div class="card-body">
                            <img id="ram" src="Images/ram.webp" class="img-fluid product" alt="Corsair 32GB DDR5">
                            <h5 class="card-title">Corsair 32GB DDR5</h5>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-4">
                <div class="col-md-4 mt-4">
                    <div class="bg-dark card bg-dark text-white border-success fixed-height">
                        <div class="card-body">
                            <img id="ssd" src="Images/ssd.webp" class="img-fluid product" alt="Corsair 32GB DDR5">
                            <h5 class="card-title">SAMSUNG 980 PRO SSD 2TB PCIe NVMe Gen 4</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- chatbot Button -->
        <button id="chatbot-icon" class="btn btn-dark text-white position-fixed">
            💬 Chat with us
        </button>
    
        <!-- chatbot Container -->
        <div id="chatbot-container" class="position-fixed hidden">
            <div id="chatbot-header" class="d-flex justify-content-between align-items-center">
                <span>Abdullah.AI</span>
                <button id="close-btn" class="btn-close btn-close-white" aria-label="Close"></button>
            </div>
            <div id="chatbot-body">
                <div id="chatbot-messages"></div>
            </div>
            <div id="chatbot-input-container" class="d-flex">
                <label for="chatbot-input" class="visually-hidden">Chatbot Message</label>
                <input type="text" id="chatbot-input" class="form-control" placeholder="Type a message..." />
                <button id="send-btn" class="btn btn-neon">Send</button>
            </div>
        </div>
        <br>

        <footer class="bg-dark text-white text-center py-3">
            <p>&copy; ABDULLAH's LOGISTIC. All rights reserved.</p>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="JavaScript/jquery-3.7.1.min.js"></script>
        <script src="JavaScript/loadHTML.js"></script>
        <script src="JavaScript/loadXML.js"></script>
        <script src="JavaScript/loadJSON.js"></script>
        <script src="JavaScript/loadjQuery.js"></script>
        <script src="JavaScript/api.js"></script> <!-- openai api js -->
    </body>
</html>