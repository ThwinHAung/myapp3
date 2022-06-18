var employee = {
    name: "David",
    age: 30,
    position: "manager",
    department: "physics",
    started_year: 2008,
    check: function() {
        return 2022 - this.started_year
    }
}
console.log(employee.age)

var box1 = document.getElementById('box1')
box1.innerHTML = "<h2>" + employee.name + "</h2>";
box1.innerHTML += "<h2>" + employee.age + "</h2>";
box1.innerHTML += "<h2>" + employee.position + "</h2>";
box1.innerHTML += "<h2>" + employee.department + "</h2>";
box1.innerHTML += "<h2>" + employee.check() + "</h2>";
//object
for (const key in employee) {
    console.log(employee[key])
}
//for each for array
var items = ['cocacola', 'orange', 'sprite']

items.forEach(function(item) {
    console.log(item)
});
//for of  (arry)
for (const x of items) {
    console.log(x)
}
// array student objects(5)
var students = [{
        name: "steve",
        major: "english",
        year: "3",
        email: "steve@gmail.com"
    },
    {
        name: "jack",
        major: "chemistry",
        year: "2",
        email: "jack@gmail.com"
    },
    {
        name: "david",
        major: "Physics",
        year: "5",
        email: "david@gmail.com"
    },
]
var row = document.getElementById('student')
var result = "";
var col = 0;
students.forEach((students) => {
    if (col % 2 == 0) {
        result += "<div class='col-md-4 bg-danger text-white'>";


    } else {
        result += "<div class='col-md-4 bg-primary text-bg-light'>";
    }
    for (const key in students) {
        result += "<p>" + key + ":" + students[key] + "</p>";
    }
    result += "</div>";
    col++;
})
row.innerHTML += result;
//for loop
//1. initialization (starting point)
//2. condition (end point)
//3. increase step
//while loop
var index = 0;
while (index < items.length) {
    if (index % 2 == 0) {
        console.log(items[index])
    } else {
        console.log("Odd room")
    }
    index++;
}

var count = 0;
do {
    console.log(students[count])
}
while (count > students.length)

//if else if else