// console.log(moment().format())

// console.log(moment().format("h A"))

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var myContainer = $(".container")
var myArr = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]


for (var i = 0; i < myArr.length; i++) {

    var row = $("<div>");
    row.addClass("row time-block")

    var timeCol = $("<div>");
    timeCol.addClass("col-md-2 hour");
    timeCol.text(myArr[i]);
    row.append(timeCol);
    var textCol = $("<textarea>");

    textCol.addClass("col-md-8 ${i}");

    row.append(textCol);
    var saveBtn = $("<button>");
    saveBtn.addClass("col-md-2 saveBtn");
    saveBtn.text("Save");
    row.append(saveBtn)

    var currentHour = moment().format("MMMM Do YYYY, h:mm:ss a")
    if (myArr[i] === moment().format("MMMM Do YYYY, h:mm:ss a")) {
        row.addClass("present")
    } else {
        row.addClass("past")
    }

    myContainer.append(row)

}

/* var sum = Add(50, 100)
console.log(sum)

console.log(Add(42, 8))

function Add(x, y){
    return x + y
}

function Hello(){
    return "Hello!"
}

console.log(Hello()) */


// API(4)
//     .then(function (response) {
//         return API(response)

//     }).then(processResult)
//     .catch(function (err) {
//         console.warn(err)
//     })


// function processResult(response) {
//     $("#currentDay").text(response)
// }

// function API(val) {
//     return new Promise(function (resolve, reject) {
//         const time = (Math.random() * 3) * 1000
//         setTimeout(function () {
//             if (time > 2800) {
//                 return reject("API Timed Out: " + time + "ms")
//             }
//             resolve(val * val)
//         }, time)
//     })
// }