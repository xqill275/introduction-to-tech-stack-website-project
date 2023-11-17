
function showReg(){
    var register = document.getElementById("register-container");
    var login = document.getElementById("login-container");
    register.style.display = "block";
    login.style.display = "none";
}

function login(){
    fetch("./files/myText.txt").then((res) => res.text()).then((text) => { // Fetch the data
        var fileText = text.split(""); // split the data into an array of characters
        var ValidLogin = fixArray(fileText);  // fix the array
        var username = document.getElementById("username").value; // get the username
        var password = document.getElementById("password").value; // get the password
        if (ValidLogin[0] == username && ValidLogin[1] == password){ // check if the username and password are correct
            console.log("login successful"); // log to the console
        }
        else{
            console.log("login failed"); // log to the console
        }
    }).catch((e) => console.error(e)); // catch any errors
} 

function fixArray(array) { 
    var temp = "" // temp string to hold the current line
    var newArray = [] // array to hold the lines
    for (var i = 0; i < array.length; i++){ // loop through the array
        if (array[i] == "\r" && array[i+1] == "\n"){ // if the current character is a new line
            newArray.push(temp); // add the current line to the array
            temp = ""; // reset the temp string
            i+=2; // skip the new line characters
        }
        temp += array[i]; // add the current character to the current line
    } 
    newArray.push(temp); // add the last line to the array
    temp = ""; // reset the temp string
    console.log(newArray); // print the array to the console

    return newArray; // return the array
}

