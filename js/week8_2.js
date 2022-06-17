var students = [
    ["David", "david@gmail.com", "Sg", "banner1.jpg"],
    ["Hnin hnin", "hnin@gmail.com", "Ygn", "banner2.jpg"],
    ["Tun Tun", 'tun@gmail.com', 'Mdy', "banner3.jpg"]
];
var row1 = document.getElementById('row1');


for (var row = 0; row < students.length; row++) {
    var colbox = "<div class='col-md-3'>"
    for (var col = 0; col < students[row].length; col++) {
        console.log(students[row][col])
        colbox = colbox + "<p>" + students[row][col] + "</p>"
    }
    colbox += "</div>"
    row1.innerHTML += colbox;

}
var button = "Click"
var row2 = document.getElementById('row2');
for (var row = 0; row < students.length; row++) {
    var colbox = "<div class='col-md-4 card'>"
    colbox += "<img src='./image/" + students[row][3] + "'class='card-img-top'>";
    colbox += "<h2 class ='card-header'>" + students[row][0] + "</h2>";
    colbox += "<p class = 'card-text'>" + students[row][1] + "</p>";
    colbox += "<p class = 'card-text'>" + students[row][2] + "</p>";
    colbox += "<a href='#' class ='btn btn-primary'>" + button + "</a>";
    colbox += "</div>";
    row2.innerHTML += colbox;

}

var unit_price = 380;
var qty = 36;
// var totalcost = unit_price * qty;
var tax = 0.02;
var discount = 500;
// var taxamount = totalcost * tax;
var actualcoast = (unit_price * qty) + (unit_price * qty * tax) - discount
    // var actualcoast = actualcoast - discount
console.log(actualcoast)

var num1 = 1000;
var count = 5;
// console.log(num1 * ++count);
// console.log("count is" + count)
console.log(num1 * count--)

var remainder = 14 % 3
console.log("remander is " + remainder)

var total = 1400
total /= 700
console.log(total)
console.log(5 + "item")

var fahrenheit = 100
var celsius = (fahrenheit - 32) * 5 / 9
console.log("temperature in celsius is " + celsius)

var celsius = 100
var fahrenheit = (celsius * 9 / 5) + 32
console.log("temperature in fahrenheit is " + fahrenheit)