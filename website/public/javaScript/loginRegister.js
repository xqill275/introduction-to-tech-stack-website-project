
function showReg(){
    var register = document.getElementById("register-container");
    var login = document.getElementById("login-container");
    register.style.display = "block";
    login.style.display = "none";
}

function login(){
    fetch("./files/myText.txt").then((res) => res.text()).then((text) => { 
        var fileText = text.split("");
        var ValidLogin = fixArray(fileText);  
        var username = document.getElementById("username").value; 
        var password = document.getElementById("password").value; 
        console.log(username); 
        if (ValidLogin.includes(username)){ 
            var userIndex = ValidLogin.indexOf(username);  
            console.log(userIndex); 
            if (password == ValidLogin[userIndex+1]){ 
                alert("logged in as " + username);  
            }
            else{
                alert("Incorrect Username or Password");  
            }
        }
        else{
            alert("Incorrect Username or Password");
        }
    }).catch((e) => console.error(e)); 
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

