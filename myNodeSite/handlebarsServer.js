// allows us to express modules
var express = require('express');
// this is how we'll access all of the functionality of the module
var app = express();
// port number
var port = 1339;
// set up handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// serve static files from public directories
// look for static file to be served inside public, public/css, public/images, public/js, public/data directories
app.use(express.static(__dirname + '/public/'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));
app.use(express.static('public/data'));


// get the route to the index and render the template for it
app.get('/', function(req, res) {
    res.render('index', {
        title: 'ABDULLAH LOGISTIC',
        header: {
            title: 'Welcome to The PC Parts Store',
            subtitle: 'Building a PC is an adventure, and we\'re here to help!',
            cta: 'Click on a product to learn more!'
        },
        content: {
            tagline: 'Your trusted partner in PC building and parts',
            companyName: 'Abdullah Logistic',
            description: 'is your go to destination for building custom PCs, purchasing high quality PC parts, and learning how to assemble your very own computer from scratch. Our mission is to provide professional guidances, premium components, and excellent services to help you create the perfect PC tailored to your needs. Whether you\'re a gamer, a tech enthusiast, or someone looking to upgrade their computer, we make the process simple, affordable, and accessible.'
        },
        carousel: {
            indicators: 3, // Number of indicators
            slides: [
                { image: 'pc2.png', alt: 'PC Build 1' },
                { image: 'pc3.png', alt: 'PC Build 2' },
                { image: 'pc4-1.png', alt: 'PC Build 3' }
            ]
        },
        contact: {
            title: 'Contact Us',
            authorsLabel: 'Author',
            authors: ['Jimmy Zhang', 'Abdullah Aye'],
            emailText: 'If you have any questions, feel free to email us at',
            email: 'jimmy_zhang@uri.edu'
        }
    });
});

// get the route to the index and render the template for it
app.get('/index', function(req, res) {
    res.render('index', {
        title: 'ABDULLAH LOGISTIC',
        header: {
            title: 'Welcome to The PC Parts Store',
            subtitle: 'Building a PC is an adventure, and we\'re here to help!',
            cta: 'Click on a product to learn more!'
        },
        content: {
            tagline: 'Your trusted partner in PC building and parts',
            companyName: 'Abdullah Logistic',
            description: 'is your go to destination for building custom PCs, purchasing high quality PC parts, and learning how to assemble your very own computer from scratch. Our mission is to provide professional guidances, premium components, and excellent services to help you create the perfect PC tailored to your needs. Whether you\'re a gamer, a tech enthusiast, or someone looking to upgrade their computer, we make the process simple, affordable, and accessible.'
        },
        carousel: {
            indicators: 3, // Number of indicators
            slides: [
                { image: 'pc2.png', alt: 'PC Build 1' },
                { image: 'pc3.png', alt: 'PC Build 2' },
                { image: 'pc4-1.png', alt: 'PC Build 3' }
            ]
        },
        contact: {
            title: 'Contact Us',
            authorsLabel: 'Author',
            authors: ['Jimmy Zhang', 'Abdullah Aye'],
            emailText: 'If you have any questions, feel free to email us at',
            email: 'jimmy_zhang@uri.edu'
        }
    });
});
// get the route to the guide and render the template for it
app.get('/guide', function(req, res) {
    res.render('guide', {
        title: 'PC Assembly Guide',
        header: {
            title: 'How to Assemble a PC',
            showChatbot: true,
            subtitle: 'Follow this step-by-step guide to build your own PC with confidence.',
        },
        steps: [
            { title: "Step 1: Gather Components", content: "Collect all necessary components and ensure compatibility." },
            { title: "Step 2: Side Panel", content: "Take the side panel off of the case to access the interior. This should be held down by several large screws, which you can typically remove by hand." },
            { title: "Step 3: Find screws", content: "Find the standoff screws. Usually these are found in a plastic bag inside of the case." },
            { title: "Step 4: Insert Screws", content: "There are many small holes in the case, usually labeled with a letter next to them (usually “A” for ATX, “M” for Micro-ATX, or “I” for Micro-ITX). Screw the standoffs into the holes that match your motherboard type." },
            { title: "Step 5: Find screws", content: "Find the IO plate, the shiny metal plate that comes in the package with the motherboard. Place it so that the text is readable and right-side-up when looking from outside of the case. Snap all four corners into place, making sure it is firmly secured." },
            { title: "Step 6: Unboxed Motherboard", content: "CAREFULLY remove the motherboard from its packaging. Set it on top of the box it came in." },
            { title: "Step 7: Connect Case to Motherboard", content: "Connect the case connectors to the Motherboard. These are usually coming out of the right side of the case, and include cables associated with audio, power, the reset switch, and LED’s. You should always consult your motherboard’s instructions at this point, since most motherboards are a little bit different from one another. Find the section in the motherboard’s installation guide that looks like the one shown below. It will tell you which module to connect these cables to (JFP1 in the example below). From there, you need to find the module (it’ll be labeled on the motherboard as well) and connect the pins in the exact layout shown on the manual. While it’s entirely possible to do this with just your fingers, it’s a lot easier to use tweezers, as these cables are truly miniscule." },
            { title: "Step 8: Inserting CPU", content: "For Intel CPUs: Remove the plastic cover from the CPU slot on the motherboard. There is a small spring-loaded metal arm to the right of the CPU cover, which you’ll need to pull to the right and then lift up. Once the CPU cover is up, you’ll see the CPU socket. Remove the CPU from its package and line up the notches on the side with the notches in the motherboard. Wiggle it a little bit if necessary, but don’t push it in. It will settle into place without too much force. Once it is sitting down in the CPU socket, close the cover over the processor, and lock the metal arm into place the way it was to start with. If you have a Ryzen CPU, the process is slightly different, since the pins are in the CPU, not the motherboard." },
            { title: "Step 9: Cooler", content: "Take the CPU cooler from the packaging. Check on the underside to see if it has thermal paste on it. If there’s a gray-silver liquid on the bottom-side of the cooler, you’re good to go. If not, put a small dot of paste on the top of the CPU." },
            { title: "Step 10: Alining Cooler", content: "If the fan has a standard four-pin design (if it came with the processor, it should fall in this category) line up all four of the pins with the holes in the motherboard surrounding the CPU, so that the center of the cooler is directly on top of the CPU. Make sure the pins drop into the holes in the motherboard, then press the pins in from the top. Press the top right and bottom left down first until they click into place, then press the top left and bottom right. Verify that the cooler is secure by pressing on it gently." },
            { title: "Step 11: cables", content: "Take the 4-pin cable that’s attached to the CPU cooler, and plug it into the nearby fan slot, usually labeled “CPU FAN.”" },
            { title: "Step 12: RAMS", content: "Find the RAM slots and push down the tabs at the top and bottom (if applicable) of the slots you’re going to use. If your motherboard has four RAM slots but you’re only using two sticks, install them in the 2nd and 4th slot. Now take the RAM sticks and line them up with the slot, making sure that the notch in the middle of the slot lines up with the notch in the middle of the RAM module. If not, it’s probably backwards. Press one end of the RAM stick down until it snaps into place, then press the other end down until it does the same. Do this for all RAM sticks." },
            { title: "Step 13: Connect Power Cables to PSU and Motherboard", content: "If your power supply is fully modular, you will need to find the 12-pin ATX power cable and plug it into the power supply. Do the same with the CPU cable. Now plug the other end of the cables into their respective slots. The ATX power cable usually plugs into a large slot on the right side of the motherboard, while the CPU cable’s plugin is usually found towards the top-left of the motherboard near the processor. The usual plugin locations are shown below." },
            { title: "Step 14: Conect PSU SATA Power Cable", content: "Find the SATA power cable that came with the power supply and plug it into one of the power supply’s 6-pin slots. Now connect the other end to your storage drive(s). If you have multiple storage drives, you can connect them to the same power cable, since it will have multiple plugins running along the cord." },
            { title: "Step 15: Install PSU to Casing", content: "Install the Power Supply. This step will vary based on your case, so you may need to consult the manual. Usually there is an opening at the bottom of the back of the case. Place the power supply inside the case, making sure that the fan faces downwards and the port for the power cord is on the exterior of the case. There will be screw holes in the power supply, and you can use the screws that came with the case to secure it." },
            { title: "Step 16: Conect Motherboard SATA Power Cable", content: "Now find the SATA cable that came with the motherboard and connect it to the storage drive. Plug the other end into the motherboard in the slot labeled SATA, usually found on the right edge of the motherboard. If you have multiple storage drives, you’ll need to run a SATA cable from each one to the motherboard." },
            { title: "Step 17: Secure Storage Drive in the Case", content: "Secure the storage drive(s) in the case. This will vary significantly from case to case. Drives are commonly stored in trays, screwed into the case, or attached to rubber gaskets that lock into the case. You will need to consult your case manual for this step. Make sure that your drive is secured in some manner to the case so that it’s unable to move around and possibly dislodge one of its cables." },
            { title: "Step 18: Install Motherboard in Case", content: "Now install the motherboard in the case. Slide it into place so that all of the ports on the left side of the motherboard stick through their respective slots in the IO plate, and all of the screw holes in the motherboard line up with the standoffs. It may take some force to position the motherboard correctly, since the IO plate has spring-like metal strips facing inwards." },
            { title: "Step 19: tightly screw the Motherboard in", content: "Once the motherboard is in place, secure it using the screws that came with the case (these are usually found in the same bag as the standoffs). Tighten them a little at a time and make sure that the screws are snug but not overtightened, since this could crack the motherboard. You can tell the screws are tight enough when you are able to press gently on the motherboard without it rocking or wiggling." },
            { title: "Step 20: Install GPU", content: "Install the Graphics card. First, make sure to remove the protection cover over the PCIe slot, if present. In most instances there is a panel on the back of the case, directly to the left of the PCIe slots. Unscrew this panel, then unscrew the metal strip that’s on the same vertical plane as the PCIe slot in which you intend to install your graphics card. The PCIe slot will have a tab on one or both sides, much like the RAM slots did. Push down these tabs and line up the slit in the graphics card with the notch in the PCIe slot. Press the graphics card into the slot, first on the left side until your feel it snap into place, then on the right. If the tabs that you pressed down in the beginning pop back into place, this means that the graphics card is seated correctly." },
            { title: "Step 21: Secure GPU", content: "Using screws that came with the case, secure the metal part of the graphics card outside of the case. If there was a metal plate that covered this, screw it back in as well." },
            { title: "Step 22: If GPU Requires An External Power Source", content: "If your graphics card requires an external power source, plug the 6-pin cable(s) into the power supply and connect them to the graphics card as needed." },
            { title: "Step 23: Almost There!", content: "Put the side panel back on and plug the cable that runs from the wall to the power supply in. Plug in your ethernet cable, HDMI or DisplayPort cables, and any peripherals that you want connected. You’re finished with the build process, and ready to boot." }
        ],
        faqs: [
            {
                question: 'What tools do I need?',
                answer: 'A basic Phillips screwdriver, anti-static wristband, and cable ties are recommended.',
                link: 'https://www.reddit.com/r/buildapc/comments/7fhilk/what_tools_are_needed_to_build_a_pc/'
            },
            {
                question: 'How do I prevent static damage?',
                answer: 'Work on a non-carpeted surface and consider wearing an anti-static wristband.',
                link: 'https://www.quora.com/Should-I-worry-about-static-when-building-a-PC'
            },
            {
                question: 'Where can I find compatibility information?',
                answer: 'Check manufacturers\' websites and online PC building communities for detailed compatibility info.',
                link: 'https://www.newegg.com/tools/custom-pc-builder'
            }
        ]
    });
});
// get the route to the shop and render the template for it
app.get('/shop', function(req, res) {
    res.render('shop', {
        title: 'PC Parts Store',
        header: {
            title: 'Welcome to The PC Parts Store',
            subtitle: 'Building a PC is an adventure, and we\'re here to help!',
            showChatbot: true,
            cta: 'Click on a product to learn more!'
        },
        products: [
            {
                id: "4090",
                name: "NVIDIA RTX 4090",
                image: "4090.png",
                dataSource: "4090.html",
                price: "$1,599",
                description: "The most powerful GPU for gaming and AI workloads."
            },
            {
                id: "i9",
                name: "Intel Core i9 13900K",
                image: "i9.jpg",
                dataSource: "i9.xml",
                price: "$589",
                description: "Extreme performance CPU with 24 cores and hyper-threading."
            },
            {
                id: "ram",
                name: "Corsair 32GB DDR5",
                image: "ram.jpg",
                dataSource: "ram.json",
                price: "$199",
                description: "Fast and reliable DDR5 RAM for gaming and workstation PCs."
            },
            {
                id: "ssd",
                name: "SAMSUNG 980 PRO SSD 2TB PCIe NVMe Gen 4",
                image: "ssd.jpg",
                dataSource: "ssd.html",
                price: "$198",
                description: "Sequential Read/Write: 7,000/5,100 MB/s - Optimized for gaming and heavy workloads"
            }
        ]
    });
});

// 404 catch all handler middleware
app.use(function(req, res) {
    res.status(404).render('404', {
        pageTitle: '404 - PAGE NOT FOUND'
    });
});

// custom 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('500', {
        pageTitle: '500 - Server Error'
    });
});

// Keep your existing listen command
app.listen(port, function() {
    console.log("Listening... Go to http://localhost:" + port);
});