console.log("This is external js");
console.log('javascript in head');
alert("hello welcome")
var message = confirm("are you sure to exit?")
console.log("message is " + message)
console.log(document.getElementById('box1'));
document.getElementById('box1').innerHTML = '<h2>Box1</h2>'
document.getElementById('box1').innerHTML += '<h1>Lorem</h1>'
    // document.getElementById('box1').innerText += 'Lorem'
var name = 'tuntun';
let email = 'tuntun@gmail.com';
var number = '0152354242'
console.log(name)


{
    console.log("Email is " + email)
    console.log("Name is " + name)
}
const pi = 3.1422;
console.log("pi value is " + pi)
var box3 = document.getElementById('box3')
box3.innerHTML = "<h2>" + name + "</h2>" + "<h3>" + email + "</h3>" + "<h3>" + number + "</h3>"

var age = 20;
console.log(age + "," + typeof(age));
var message = true;
console.log(message + "," + typeof(message))
var name1 = "tuntun";
console.log(name1 + "," + typeof(name1))
    // var decemil = 3.123;
    // console.log(decemil + "," + typeof(decemil))
var students = ["kyawkyaw", "tuntun", "mgmg"]
    // console.log(students[0]);
    // console.log(students[1]);
    // console.log(students[2]);
var list = document.getElementById('list')
var row1 = document.getElementById('row1');
// document.getElementById('row1').classList.add("bg-primary")

// for (var count = 0; count < students.length; count++) {
//     console.log(students[count])
//     list.innerHTML += "<li>" + students[count] + "</li>"
//     row1.innerHTML += "<div class='col'>" + students[count] + "</div>"
// }


var images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg']
for (var count = 0; count < images.length; count++) {
    row1.innerHTML += "<div class='col'>";
    row1.innerHTML += "<img src='image/" + images[count] + " 'class='img-fluid'></div>";
}