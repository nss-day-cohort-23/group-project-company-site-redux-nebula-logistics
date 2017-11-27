var products = [
    {
        id: "star1",
        name: "Nebula #415",
        price: "$45,600",
        description: "this is your new home",
        image: "Images/nebula415.jpg",
    },
    {
        id: "star2",
        name: "Red Giant #7865",
        price: "$567,800",
        description: "big ball of fire",
        image: "images/redgiant.jpg",
    },
    {
        id: "star3",
        name: "SuperNova #336",
        price: "$10,928,366",
        description: "a party waiting to happen",
        image: "images/supernova.jpg",
    },
    {
        id: "star4",
        name: "White Dwarf #24567",
        price: "$2",
        description: "a small place to store your trinkets",
        image: "images/whitedwarf.jpg",
    },
    {
        id: "star5",
        name: "Nebula #344323",
        price: "$789",
        description: "destination: vacation",
        image: "images/nebula344323.jpg",
    },
    {
        id: "star6",
        name: "Blackhole 7664",
        price: "$0",
        description: "no need to clean. let this guy do it for you!",
        image: "images/blackhole.jpg",
    },
    {
        id: "star7",
        name: "Galaxy #45e89",
        price: "$767",
        description: "look familiar? NEW LOW PRICE on your home galaxy!",
        image: "images/galaxy.jpg",
    },
    {
        id: "star8",
        name: "Pillars of Creation",
        price: "$3,000,000,000",
        description: "highly sought after, dont miss this once-in-an-eon opportunity!",
        image: "images/pillars.jpg",
    },
];

for (var i=0; i<products.length; i++) {
    document.getElementById(products[i].id).innerHTML+=
    "<h3>" + products[i].name + "</h3>" + 
    "<img src='" + products[i].image + "'>" +
    "<p class='money'>" + products[i].price + "</p>" +
    "<p class='description'>" + products[i].description + "</p>";
};