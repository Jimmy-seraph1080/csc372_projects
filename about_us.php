<?php
// employee class
class Employee {
    // properties
    private string $name;
    private string $position;
    private string $bio;
    // make email protected because of secruity
    protected string $email;
    private string $image;

    // constructor to initialize employee attributes
    public function __construct(string $name, string $position, string $bio, string $email, string $image) {
        $this->name = $name;
        $this->position = $position;
        $this->bio = $bio;
        $this->email = $email;
        $this->image = $image;
    }

    // method to return employee profile as styled HTML block
    public function display_profile(): string {
        return "
        <div class='col-md-4 mt-4'>
            <div class='bg-dark card bg-dark text-white border-success fixed-height h-100'>
                <div class='card-body'>
                    <h2 class='card-title'>{$this->name}</h2>
                     <img src='{$this->image}' alt='Employee photo of {$this->name}' class='img-fluid mb-3'>
                    <p class='phrase'>Position: {$this->position}</p>
                    <p class='phrase2'>Bio: {$this->bio}</p>
                    <p class='phrase2'>Email: {$this->email}</p>
                </div>
            </div>
        </div>";
    }

    // getter for email to get the email value
    public function get_email(): string {
        return $this->email;
    }

    // setter for email to update email value
    public function set_email(string $email): void {
        $this->email = $email;
    }
}
// instances of employee object
$employee1 = new Employee("Abdullah Arwaly", "PC Build Specialist", "4+ years building", "abdallh99771@gmail.com", "Images/abdullah.png");
$employee2 = new Employee("Jimmy Zhang", "Web Developer", "College student", "jimmy_zhang@uri.edu", "Images/jimmy.png");
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Us</title>
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link rel="preconnect" href="https://fonts.gstatic.com">

        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style">
        <link rel="preload" href="CSS/style.css" as="style">
        <link rel="preload" href="CSS/chatbot.css" as="style">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="CSS/style.css">
        <link rel="stylesheet" href="CSS/chatbot.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom-green w-100">
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
                            <a class="nav-link text-white fw-bold px-lg-5" href="https://jimmyzhang.rhody.dev/csc372_projects/about_us.php">ABOUT US</a>
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

        <section class="container mt-5 text-center">
            <h1 class="title">Meet Our Team</h1>
            <p class="phrase">Get to know the faces behind the screen</p>
        </section>

        <section id="about-team" class="container mt-4 text-center">
            <div class="row mt-4 justify-content-center">
                <?php
                    echo $employee1->display_profile();
                    echo $employee2->display_profile();
                ?>
            </div>
        </section>

        <!-- Chatbot Button -->
        <button id="chatbot-icon" class="btn btn-dark text-white position-fixed">
            💬 Chat with us
        </button>
    
        <!-- Chatbot Container -->
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


        <footer class="bg-dark text-white text-center py-3 mt-5">
            <p>&copy; ABDULLAH's LOGISTIC. All rights reserved.</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
