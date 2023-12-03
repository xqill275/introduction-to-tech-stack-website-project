# Project Overview

## Project Goals and Objectives
My main goals for this project were to create the Minimal Viable Product (MVP). Anything extra could be added onto the project once this crucial step was reached, and I was happy with it. The Most important pages to create first was the main home page, the job board and the user pages once these where done I then created a working login page and an more minor features to the other pages such as the testimonial loading with the home page

## Installation instructions
The only dependancy for this project is Node.js this is used for my backend, to install node.js please visit this page:
```
https://nodejs.org/en/download
```
Select the version for your operating system and follow the instructionts the installer show you, I do use the exspress package but as you will pull this repo down it is already installed and configured.
now that node.js is installed you now need to download this repo onto your system, you can do this by either 1. clicking the code button on the top right hand side then 2. clicking one of the download buttonts or you can git this down by:

```
git clone https://github.com/xqill275/introduction-to-tech-stack-website-project
```
now once you have a copy of my project onto your computer, to start the website:

1. enter the website folder:

for windows:
```
cd .\website\
```
for mac and linux:
```
cd /website
```
2. now you need to launch the app.js file with node.js to do this simply enter:
```
node .\app.js
```
3. now that you have launched this you should see the text:
```
Listening for requests on port 3000
```
if you see this that means that the website is now being hosted on your localhost on port 3000
now goto your browser of choice and search for the website:
```
http://localhost:3000/
```

## Project Plan
I talked a little bit about this in 'Project Goals and Objectives' section of this readme file while developing this project I wanted to do the most important and time consuming features first, I also implemented the pages based on I as a user would interact with a webpage.

1. the home page and 404 page (started: 14/11 finsihed: 15/11) :

  this is the first part of the project that I worked on as I belive that it is the most important part of any webpage espacially if it's for a busissness for instance if a user likes how the webpage looks they are more     likely to put trust into the website so if they are willing to purchase any products, they will feel more confident entering there card details

2. Login page (started 15/11 finsihed: 18/11):

  now that the homepage is done I started to work on the login and registration page. For this project we didn't need to do the backend only the front end but I wanted to teach my self node.js so I spent longer on this page then I intened to but it does work you can register and login into that account as both an student and a lecture.

3. student user page (started: 20/11 finsihed 20/11):

   now that the login and registeration page was done, the user need someone where to go once they had logged in so the next part of the website I worked on was the student user page. This wasnt as hard as I was thinking it was going to be as all I had was give the user a form for the new infomation such as: profile pic, work history, education history etc then use some javascript to replace the old text with the new text

4. job board (started 25/11 finsihed: 1/12):
This part of the website took the longest complete as I also wanted to learn about cookies and how they worked as I only wanted lectures to be able to post new jobs. so as the user logins into an account as a lecuter it will store the type of user they are. so when they goto the jobboard page the webpage will check the cookie for the type and if the type is lecutre it will display a button for the user to create a new job. the jobboard also took a while as I wanted to add a working search bar so the user could search thrpugh all the avalive jobs.

5. Lecture user page (started: 1/12 finsihed 1/12):

   the lecture user page was very simple as I had already done the hard work with the student user page so I could re-use most of it. all i had to do was changed the fields to fit for the lecture page

## Choice of Tech Stack and Architecture

### Technologies Used

This project was built using a very simple tech stack, HTML, CSS, JavaScript, and Node.js:

- **HTML and CSS:**
  - HTML and CSS was used to structure and style the webpage 

- **JavaScript:**
  - javascript was mostly used for the functionalty ofd the site such as the testimonials and the creating of job postings 

- **Node.js:**
  - I used node.js for my backend, it allowed me to run server side code that was used for managering requests and the editing and reading of files on the host computer

## In-code documentation for key functions and components

**Testimonials**
 ```js
// Function to asynchronously get testimonials from a JSON file
async function getTestimonials() {
    const response = await fetch('./json/testimonials.json'); // get the data
    const testimonials = await response.json(); // Convert the data to JSON
    return testimonials; // Return the data
}

// Function to load a random testimonial onto the page
async function loadRandomTestimonial() {
    const testimonials = await getTestimonials(); // Get the testimonials
    const randomIndex = Math.floor(Math.random() * testimonials.length); // Get a random index
    
    const testimonialText = document.getElementById('testimonialText'); // Get the testimonial text element
    const testimonial = testimonials[randomIndex]; // Get the testimonial at the random index

    // Set the testimonial text using HTML with the name and quote from the testimonial
    testimonialText.innerHTML = `<strong>${testimonial.name}</strong>: "${testimonial.quote}"`;
}

```
these functiontions get a random testimonial from a json file and then find the part of the website with the id of testimonialText and replace it with the new quote 

**REGISTER**
 ```js
// Function to handle the registration process
function register() {
    // Get the register form and important values
    var registerForm = document.getElementById("registerForm");
    var student = registerForm.elements[0].checked;
    var username = registerForm.elements[3].value;
    var password = registerForm.elements[4].value;

    // Check if the user is a student or lecturer
    var userType = student ? "student" : "lecturer";

    // Check if the username is already taken, and if not, add the user to the file
    fetch("./files/myText.txt").then((res) => res.text()).then((text) => {
        if (text.includes(username)) {
            alert("Username already taken");
        } else {
            alert("Registered as " + username + " and they are a " + userType)
            var fileText = [username, password, userType];
            writeToFile(fileText, "./public/files/myText.txt");
        }
    }).catch((e) => console.error(e));
}
```
When the user registers it first gets all the inputted text and stores them to variables, it then checks if the user wants to be a student or lecture it finally checks if the username is already taken if it is not it stores all the important info into an array and calls the writeToFile function

 ```js
function writeToFile(text, file) {
    fetch('http://localhost:3000/writeToFile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, file }), // Send the text and file to the server
    })
        .then((res) => res.text()) // Get the response
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error('Error:', error)); // Log any errors
}
```

this simply takes the array given and then makes a request to the webserver to edit the file with the new user

 ```js
// Handle POST requests for the '/writeToFile' URL
app.post('/writeToFile', express.json(), (req, res) => {
    // Extract 'text' and 'file' properties from the request body
    const { text, file } = req.body;

    // Iterate through the 'text' array
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);

        // Check if the current element is at index 1 and has value 'student' or 'lecturer' (this is to fix an error fix an where the user title and user password were being swapped
        if (i === 1 && (text[i] === 'student' || text[i] === 'lecturer')) {
            // Store values and append them to the file
            const storeTitle = text[i];
            const storePassword = text[i + 1];
            fs.appendFile(file, storePassword + '\r\n', (err) => {
                if (err) throw err;
            });
            fs.appendFile(file, storeTitle + '\r\n', (err) => {
                if (err) throw err;
            });
            // Break out of the loop
            break;
        }
        // Append the current element to the specified file
        fs.appendFile(file, text[i] + '\r\n', (err) => {
            if (err) throw err;
        });
    }

    // Send 'ok' as the response
    res.send('ok');
    // Log the request details
    log(req, res);
});

```
this is inside my app.js file when the user makes a request to /writeToFile it will exstract the text array from the request then loop through it and add the data to the myText.txt file

once these are done the user now has an account of their own

**LOG IN**

 ```js
function login() {
    // Fetch the content of the 'myText.txt' file
    fetch("./files/myText.txt").then((res) => res.text()).then((text) => {
        // Split the file content into an array
        var fileText = text.split("");
        // Fix the array format
        var validLogin = fixArray(fileText);

        // Get the username and password from the login form
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        console.log(username);

        // Check if the username is in the file
        if (validLogin.includes(username)) {
            // If it is, get the index of the username and check if the password is correct
            var userIndex = validLogin.indexOf(username);
            console.log(userIndex);
            
            if (password == validLogin[userIndex + 1]) {
                // Check if the user is a student or lecturer and log them in
                var studentOrLecturer = validLogin[userIndex + 2];
                alert("Logged in as " + username + " and they are a " + studentOrLecturer);
                if (studentOrLecturer == "lecturer") {
                    document.cookie = "type=lecturer";
                } else {
                    document.cookie = "type=student";
                }
                if (studentOrLecturer == "lecturer") {
                    window.location.href = "./lecturerUserPage";
                } else {
                    window.location.href = "./studentUserPage";
                }                
            } else {
                alert("Incorrect Username or Password");
            }
        } else {
            alert("Incorrect Username or Password");
        }
    }).catch((e) => console.error(e));
}
```
once the user enters there username and password on the website it calls this function, it gets the data on the myText.txt file and puts it into an array it then fixes the array format by calling the fixArray function, it then gets the data inputed and store them into variables. it then checks if the username is in the file and if it is it stores the index of that username, it then checks if the password is the same as the next index. if that is also true it stores the type of user to the cookies. it then checks these cookies and then send you to the corrisponding userpage

 ```js

function editProfile() {
    var form = document.querySelector("form");
    var editProfileBtn = document.getElementById("editProfile");

    if (form.style.display === "block") {
        form.style.display = "none";
        editProfileBtn.innerHTML = "Edit Profile";
    } else {
        form.style.display = "block";
        editProfileBtn.innerHTML = "Stop Editing";
    }
}

function updateProfile(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    var newWorkHistory = document.getElementById("workHistory").value;
    var newEducationHistory = document.getElementById("educationHistory").value;
    var newSkills = document.getElementById("skills").value;
    var workHistoryText = document.getElementById("workHistoryText");
    var educationHistoryText = document.getElementById("educationHistoryText");
    var skillsText = document.getElementById("skillsText");

    workHistoryText.innerHTML = newWorkHistory;
    educationHistoryText.innerHTML = newEducationHistory;
    skillsText.innerHTML = newSkills;
}

```

to edit the users profiles it is very simple, it just takes the entered infomation from the form and then replaces the placeholder text with the new text 

**POST A JOB**

 ```js

function submitJob(event) {
    var jobTitle = document.getElementById("jobTitle").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var jobLocation = document.getElementById("jobLocation").value;
    var jobPay = document.getElementById("jobPay").value;

    // Check if any of the required fields is empty
    if (jobTitle == "" || jobDescription == "" || jobLocation == "" || jobPay == "") {
        alert("Please fill in all the required fields");
        return;
    }

    // You should also check if the required fields are not empty before proceeding
    var jobContainer = document.getElementById("jobList");
    var row = document.getElementById("row");
    var jobCard = document.createElement("div");
    jobCard.classList.add("col-md-4");
    jobCard.innerHTML = `
        <div class="col=md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${jobTitle}</h5>
                    <p class="card-text">${jobDescription}</p>
                    <p class="card-text">Location: ${jobLocation}</p>
                    <p class="card-text">Salary: ${jobPay}</p>
                    <a href="#" class="btn btn-primary">Apply</a>
                </div>
            </div>
        </div>
    `;
    row.appendChild(jobCard);
    jobContainer.appendChild(row);

    document.querySelector("form").reset();

    createJob(); // Optional: Close the form after submission

    

}

```
This function is used when a user wants to create a new job posting like the profile edit function it just takes the form data and then creates a new div to create the new job. it also checks if all the fields are felid in and if it is not it asks them to fill them in

**JOB BOARD SEARCH**
 ```js
function searchJobs() {
    var input = document.getElementById("jobSearch").value;
    var filter = input.toUpperCase();
    var cardContainer = document.getElementById("jobList");
    var cards = cardContainer.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector(".card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].closest('.col-md-4').style.display = "block";
        }else if (filter == "") {
            cards[i].closest('.col-md-4').style.display = "block";
        } else {
            cards[i].closest('.col-md-4').style.display = "none";
        }
    }
}
```

This is function is how the search bar works it gets the input and makes it upper case so we dont have worry about capital letters, it then loops through all of the cards if the search matches it sets the card style to be block and if it dosent match it makes the card style none which hides it 
