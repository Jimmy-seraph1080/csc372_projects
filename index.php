<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ABDULLAH LOGISTIC</title>
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link rel="preconnect" href="https://fonts.gstatic.com">

        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style">
        <link rel="preload" href="CSS/style.css" as="style">

        <link rel = "stylesheet" href = "CSS/style.css">
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
        <div class="header_line"></div>
        <div class = "container logo_container mt-4">
            <img src = "Images/logo3.png" alt="Abdullah logistic logo" class = "img-fluid" >
        </div>

        <!-- Introduction -->
        <section id="intro" class="container mt-5 text-center">
            <h1 class="title">Welcome to The PC Parts Store</h1>
            <p class="phrase2">Building a PC is an adventure, and we're here to help!</p>
            <p class="phrase2">Click on a product to learn more!</p>
        </section>
        
        
        <div class ="content content-container text-center p-4 mt-4">
            <p class = "phrase ">Your trusted partner in PC building and parts</p> 
            <p>
                <strong>Abdullah Logistic</strong> is your go to destination for building custom PCs, purchasing high quality PC parts, 
                and learning how to assemble your very own computer from scratch. Our mission is to provide professional guidances, premium components, and
                excellent services to help you create the perfect PC tailored to your needs. Whether you're a gamer, a
                tech enthusiast, or someone looking to upgrade their computer, we make the process simple, affordable, and accessible.
            </p>
            <img src = "Images/pc1.png" alt = "PC part">
            
            <div id="imageSlider" class="carousel slide mt-4" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="0" class="active" aria-label="slide 1"></button>
                    <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="1"aria-label="slide 2"></button>
                    <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="2"aria-label="slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="Images/pc2.png" class="d-block w-100 slider_img slider" alt="PC Build 1">
                    </div>
                    <div class="carousel-item">
                        <img src="Images/pc3.png" class="d-block w-100 slider_img slider" alt="PC Build 2">
                    </div>
                    <div class="carousel-item">
                        <img src="Images/pc4-1.png" class="d-block w-100 slider_img slider" alt="PC Build 3">
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev" aria-label="previous slide">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next" aria-label="next slide">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <h2><strong>Contact Us</strong></h2>
            <p>Author: <strong>Jimmy Zhang </strong>and<strong> Abdullah Aye</strong> </p>
            <p>If you have any questions, feel free to <a href="mailto:jimmy_zhang@uri.edu">email us</a> at <strong>jimmy_zhang@uri.edu</strong>.</p>
        </div>
        
        
        <div id="dynamic-content" class="container mt-4"></div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="JavaScript/jquery-3.7.1.min.js"></script>
        <script src = "JavaScript/navbar.js"></script>
    </body>
</html>