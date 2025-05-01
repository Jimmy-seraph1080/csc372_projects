<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ABDULLAH LOGISTIC</title>
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link rel="preconnect" href="https://fonts.gstatic.com">

        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style">
        <link rel="preload" href="CSS/style.css" as="style">
        <link rel="preload" href="CSS/test.css" as="test">

        
        <link rel="stylesheet" href="CSS/style.css">
        <link rel="stylesheet" href="CSS/test.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
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
                            <!-- ran out time for creating a redirect to manager :) but hope to pass go and collect 200? -->
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/manager_view.php">manager</a>
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
                <img src = "Images/logo3-5.webp" alt="Abdullah logistic logo" class = "img-fluid" >
            </div>
            
            <section class="hero">
                <div class="hero-inner">
                    <h1>Welcome to Abdullah Logistic</h1>
                    <p>Your one stop PC parts shop built for pros & enthusiasts alike.</p>
                </div>
            </section>
        
            <section class="features-section py-5">
                <div class="container">
                <div class="row align-items-center gy-4">
                    <div class="col-lg-6">
                    <h2 class="display-5 fw-bold text-white">Your Trusted Partner in PC Building &amp; Parts</h2>
                    <p class="lead text-secondary">
                        <strong>Abdullah Logistic</strong> is your go to for custom PC builds, premium components, and hands-on guidance. Whether you’re gaming, streaming, or crunching code, we make every build seamless, affordable, and uniquely yours.
                    </p>
                    <a href="https://jimmyzhang.rhody.dev/csc372_projects/shop.php" class="btn btn-outline-light btn-lg">Shop Now</a>
                    </div>
                    <div class="col-lg-6 text-center">
                    <img src="Images/pc1.webp" alt="PC part" class="img-fluid rounded shadow-lg">
                    </div>
                </div>
                </div>
            </section>
            
            <section class="carousel-section py-5 bg-white">
                <div class="container">
                <div id="pcCarousel" class="carousel slide shadow-sm rounded" data-bs-ride="carousel">
                    <div class="carousel-inner rounded">
                    <div class="carousel-item active">
                        <img src="Images/pc2.webp" class="d-block w-100" alt="PC Build 1">
                    </div>
                    <div class="carousel-item">
                        <img src="Images/pc3.webp" class="d-block w-100" alt="PC Build 2">
                    </div>
                    <div class="carousel-item">
                        <img src="Images/pc4-1.webp" class="d-block w-100" alt="PC Build 3">
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#pcCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#pcCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
                </div>
            </section>
            
            <section class="contact-section py-5 text-center">
                <div class="container">
                <h2 class="fw-bold text-white mb-3">Get in Touch</h2>
                <p class="text-secondary mb-4">
                    Jimmy Zhang &amp; Abdullah Aye  
                </p>
                <a href="mailto:jimmy_zhang@uri.edu" class="btn btn-primary btn-lg">
                    Email Us
                </a>
                </div>
            </section>

        <footer class="bg-dark text-white text-center py-3">
            <p>&copy; ABDULLAH's LOGISTIC. All rights reserved.</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="JavaScript/jquery-3.7.1.min.js"></script>
        <script src = "JavaScript/navbar.js"></script>
    </body>
</html>
