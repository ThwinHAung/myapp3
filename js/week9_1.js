var items = [
    ['Book', 450, 200],
    ['Facical Foam', 6800, 12],
    ['Noodle', 2200, 180],
];
var content = document.getElementById('content');
content.innerHTML = calculateSubtotal(items) //function call


var rooms = [
    ['deluxe', 65000, 15],
    ['Single', 30000, 7],
    ['Luxury', 80000, 16],
]

var room = document.getElementById('rooms');
room.innerHTML = calculateSubtotal(rooms)
    //functional definations
function calculateSubtotal(item) {
    var result = '';
    var total = 0;
    for (var row = 0; row < item.length; row++) {
        result += "<tr>"

        result += "<td>" + (row + 1) + "</td>";
        for (var col = 0; col < item[row].length; col++) {
            result += "<td>" + item[row][col] + "</td>"
        }
        total += item[row][1] * item[row][2];
        result += "<td>" + item[row][1] * item[row][2] + "</td>"
        result + +"</tr>"

    }
    result += "<tr><td colspan='4'>Total</td><td>" + total + "</td></tr>";
    return result;
}

function celciusToFah(celcius) {
    var fah = (celcius * (9 / 5)) + 32
    document.getElementById('temperature').innerHTML = fah;
}
celciusToFah(100);

function checkAvailabilty(total_rooms, booked_rooms) {
    var avaliablerooms = (total_rooms - booked_rooms)
    document.getElementById("avarooms").innerHTML = avaliablerooms
    return avaliablerooms
}

checkAvailabilty(10, 8)

function USDtokyats(USD) {
    var kyats = (USD * 1850)
    document.getElementById("exc").innerHTML = kyats
}
USDtokyats(10)
var numbers = [100, 157, 89]

function maximum_Number(Num1, num2, num3) {
    var Number = ads;
    return maximum_Number;
}
document.getElementById("maxi").innerHTML = maximum_Number