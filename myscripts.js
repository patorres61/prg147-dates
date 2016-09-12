/* JavaScript Functions */

var $ = function (id) {
    'use strict';
    return document.getElementById(id);
}

/* variables for different dates */

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1 /* 0 is january; */
var year = date.getFullYear();
var agemonth = 0;
var ageyear = 0;


/* Setting the current date function */

function setTheDate() {
    'use strict';
    $("today").value = month + "/" + day + "/" + year;
}


/* Calculating a person's age compared to current date */

function calculate() {
    'use strict';
    var today = new Date(("today").value);
    var birthday = $("birthday").value;
    var bmonth = (parseInt(birthday.substring(0, 2)));
    var byear = (parseInt(birthday.substring(4, 8)));

    if (bmonth > month) {
        ageyear = year - byear - 1;
        agemonth = 12 - bmonth + month;
    } else {
        ageyear = year - byear;
        agemonth = month - bmonth;
    }

    $("reply").value = "You are " + ageyear + " years and " + agemonth + " months old! You look marvelous!";
}


/* Function to determine the current day of the week and to load the appropriate greeting */

function dayGreet() {
    'use strict';
    var dateStatement = "";
    var d = new Date();
    var todayIs = d.getDay();

    switch (todayIs) {
    case 0:
    case 6:
        dateStatement = "It's the weekend! Just try to get me out of bed before nine!";
        break;
    case 1:
        dateStatement = "Yup, It is Monday...there is not enough coffee to get through today!";
        break;
    case 2:
        dateStatement = "Today is Tuesday...better than Monday - but not by much!";
        break;
    case 3:
        dateStatement = "Wednesday...why is it spelled this way? Ok, about half way done for this week...";
        break;
    case 4:
        dateStatement = "Thursday...this word comes from Thor. I wish I had his hammer to smash into Friday!";
        break;
    case 5:
        dateStatement = "Finally, it is Friday! TGIF!!!";
        break;
    default:
        dateStatement = "no one should ever see this one";
    }
    document.getElementById("myday").innerHTML = dateStatement;
}


/* Function to calculate how many days until graduation*/

function daysToGraduation() {
    'use strict';
    var today = new Date();
    $("todaysdate").innerHTML = today.toDateString();

    var gradDate = new Date("05/12/2018");
    $("gradDate").innerHTML = gradDate.toDateString();

    if (today < gradDate) {
        var timeDiff = Math.abs(gradDate.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysleft").innerHTML = diffDays;

    } else {
        $("daysleft").innerHTML = "Hmmm....I think your graduation will be late!";
    }

}


/* On page load, this code runs the following functions */

window.onload = function () {
    'use strict';
    setTheDate();
    dayGreet();
    daysToGraduation();
    $("birthday").value = "mmddyyyy";
    $("age").onclick = calculate;
}