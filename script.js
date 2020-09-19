// console.log(moment().format())
// console.log(moment().format("h A"))
var myContainer = $(".container")
var myArr = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]
var timeIndex = 0
for (timeIndex=0; timeIndex < myArr.length; timeIndex++) {
    
    var row = $("<div>");
    row.addClass("row time-block")
    

        

    var timeCol = $("<div>");
        timeCol.addClass("col-md-2 hour");
        timeCol.text(myArr[timeIndex]);
        row.append(timeCol);
    var textCol = $("<textarea>");
        
        textCol.addClass("col-md-8 ${timeIndex");

    
        row.append(textCol);
    var saveBtn = $("<button>");
        saveBtn.addClass("col-md-2 saveBtn");
        saveBtn.text("Save");
        row.append(saveBtn)   

var currentHour = moment().format("h A")
        if(myArr[timeIndex]=== moment().format("h A")) {
            row.addClass("present")
        } else {
            row.addClass("past")
        }

        $(".container").append(row);
        // myContainer.append(row)
               
}


 




