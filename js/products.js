var products = [
    {
        id: "star1",
        name: "Nebula #415",
        price: "$45,600",
        description: "<strong>THIS</strong> is your new home",
        image: "Images/nebula1.jpg",
    },
    {
        id: "star2",
        name: "Red Giant #7865",
        price: "$567,800",
        description: "Big ball of fire. Great spot for sunbathing!",
        image: "images/redgiant.jpg",
    },
    {
        id: "star3",
        name: "SuperNova #336",
        price: "$10,928,366",
        description: "A party waiting to happen. Grab it before it dissipates into stardust!",
        image: "images/supernova.jpg",
    },
    {
        id: "star4",
        name: "White Dwarf #24567",
        price: "$2",
        description: "A small place to store your trinkets",
        image: "images/whitedwarf.jpg",
    },
    {
        id: "star5",
        name: "Nebula #344323",
        price: "$789",
        description: "Destination: Vacation",
        image: "images/nebula2.jpg",
    },
    {
        id: "star6",
        name: "Blackhole 7664",
        price: "$0",
        description: "No need to clean<br>Housekeeping ONSITE!",
        image: "images/blackhole.jpg",
    },
    {
        id: "star7",
        name: "Milky Way Galaxy",
        price: "$767",
        description: "Look familiar? NEW LOW PRICE on your home galaxy!",
        image: "images/galaxy.jpg",
    },
    {
        id: "star8",
        name: "Pillars of Creation",
        price: "$3,000,000,000",
        description: "Highly sought after. Don't miss this once-in-an-eon opportunity!",
        image: "images/pillars.jpg",
    },
];

for (var i=0; i<products.length; i++) {
    document.getElementById(products[i].id).innerHTML+=
    "<h3 class='productHeader'>" + products[i].name + "</h3>" + 
    "<img src='" + products[i].image + "'>" +
    "<p class='money'>" + products[i].price + "</p>" +
    "<p class='description'>" + products[i].description + "</p>";
};