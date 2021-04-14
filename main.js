var manu_list_array = ["Chicken Tandori Pizza", "Veg Suprime Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza"
, "Veg Extravaganza Pizza"]

function getmanu() {
    var htmldata;
    htmldata = "<ol class = 'manulist >'"
    manu_list_array.sort();
    i = 0;
    for (var i = 0; i <manu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + manu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_manu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    manu_list_array.push(item);
    manu_list_array.sort();
    htmldata = "<secton class = 'cards'>"
    for(var i = 0; i<manu_list_array.length; i++) {
        htmldata = htmldata + '<div class = "card">' + '<img src = "pizzaImg.png"/>' + manu_list_array[i] + '</div>'
    }
    htmldata = htmldata + "</section"
    document.getElementById("display_addedmanu").innerHTML = htmldata;
}