# Oliver Long

# Project Overview


## Project Goals and Objectives
My main goals for this project were to create the Minimal Viable Product (MVP). Anything extra could be added onto the project once this crucial step was reached, and I was happy with it. The most important pages to create first were the main home page, the job board, and the user pages. Once these were done, I then created a working login page and some minor features for the other pages, such as the testimonial loading with the home page.

## Installation instructions
The only dependency for this project is Node.js. To install Node.js, please visit this page:
```
https://nodejs.org/en/download
```
Select the version for your operating system and follow the instructions the installer shows you. I use the Express package, but as you pull this repo down, it is already installed and configured.

Now that Node.js is installed, download this repo onto your system. You can do this by either:
Clicking the code button on the top right-hand side, then Clicking one of the download buttons, or you can git this down by:
```
git clone https://github.com/xqill275/introduction-to-tech-stack-website-project
```
Once you have a copy of my project on your computer, to start the website:

1. enter the website folder:

for windows:
```
cd .\website\
```
for mac and linux:
```
cd /website
```
Now, you need to launch the app.js file with Node.js. To do this, simply enter:
```
node .\app.js
```
Now that you have launched this, you should see the text:
```
Listening for requests on port 3000
```
If you see this, it means that the website is now being hosted on your localhost on port 3000. Now, go to your browser of choice and search for the website:
```
http://localhost:3000/
```

## Project Plan
I discussed this in the 'Project Goals and Objectives' section of this readme file. While developing this project, I focused on the most important and time-consuming features first. I implemented the pages based on how I, as a user, would interact with a webpage.

1. The home page and 404 page (started: 14/11, finished: 15/11):

This is the first part of the project that I worked on because I believe it is the most important part of any webpage. Especially for a business, if a user likes how the webpage looks, they are more likely to trust the website. This trust can lead to them making purchases, feeling confident in entering their card details.

2. Login page (started 15/11, finished: 18/11):

Now that the homepage is done, I started to work on the login and registration page. For this project, we didn't need to handle the backend, only the frontend. However, I wanted to teach myself Node.js, so I spent more time on this page than intended. It works; you can register and login into that account as both a student and a lecturer.

3. Student user page (started: 20/11, finished 20/11):

Now that the login and registration page were done, the user needed somewhere to go once they had logged in. The next part of the website I worked on was the student user page. This wasn't as challenging as I thought it would be. All I had to do was give the user a form for new information such as a profile picture, work history, education history, etc. Then use some JavaScript to replace the old text with the new text.

4.Job board (started 25/11, finished: 1/12):

This part of the website took the longest to complete. I also wanted to learn about cookies and how they worked because I only wanted lecturers to be able to post new jobs. As the user logs into an account as a lecturer, it will store the type of user they are. So, when they go to the job board page, the webpage will check the cookie for the type, and if the type is 'lecturer,' it will display a button for the user to create a new job. The job board also took a while because I wanted to add a working search bar so the user could search through all available jobs.

6. Lecture user page (started: 1/12, finished 1/12):

The lecture user page was straightforward as I had already done the hard work with the student user page. I could reuse most of it. All I had to do was change the fields to fit for the lecture page.

## Choice of Tech Stack and Architecture

### Technologies Used

This project was built using a simple tech stack: HTML, CSS, JavaScript, and Node.js:

- **HTML and CSS:**
  - HTML and CSS were used to structure and style the webpage.

- **JavaScript:**
  - JavaScript was mostly used for the functionality of the site, such as testimonials and creating job postings.

- **Node.js:**
  - I used Node.js for my backend. It allowed me to run server-side code used for managing requests and editing/reading files on the host computer.
 

  
 
## Future considerations for scaling
In the future, one of the main aspects that I would like to get working is persistence, especially with the job board. Currently, once you refresh the jobs you have created, they get wiped. Another instance is the user profiles; any data you enter will be wiped once you refresh the page. The way I would probably implement this is by using a database that stores all the job data. Then, whenever a new job gets added, we can just update that database.

I would also love to make the login and register more secure. Currently, you could change your cookie to be a different type, then you get all the benefits of being logged in. The way I'm currently storing passwords and usernames is also very insecure as they are all in plain text. I would like to implement a database and hashing of the passwords.

## Risk Assessment
As mentioned, the biggest risks of my website currently revolve around data loss and security. Data loss is a concern, especially with the current setup where jobs and user profiles are not persistently stored. Implementing a database will significantly mitigate this risk, ensuring that valuable information remains intact even after page refreshes.

Security is another crucial area of concern. The current practice of storing passwords and usernames in plain text poses a significant threat to user accounts. Hashing passwords and storing them securely in a database will be a critical step towards improving the overall security posture of the website. It's essential to address these risks proactively to ensure a robust and reliable user experience.

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
These functions get a random testimonial from a JSON file and then find the part of the website with the ID of testimonialText and replace it with the new quote.

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
When the user registers, it first gets all the inputted text and stores them to variables. It then checks if the user wants to be a student or lecturer. Finally, it checks if the username is already taken. If it is not, it stores all the important info into an array and calls the writeToFile function.

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

This simply takes the array given and then makes a request to the web server to edit the file with the new user.

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
        // Append the current element to the  file
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
This is inside my app.js file when the user makes a request to /writeToFile. It will extract the text array from the request, then loop through it and add the data to the myText.txt file. Once these are done, the user now has an account of their own.

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
Once the user enters their username and password on the website, it calls this function. It gets the data on the myText.txt file and puts it into an array. It then fixes the array format by calling the fixArray function. It then gets the data inputted and stores them into variables. It then checks if the username is in the file and if it is, it stores the index of that username. It then checks if the password is the same as the next index. If that is also true, it stores the type of user to the cookies. It then checks these cookies and then sends you to the corresponding user page.

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

To edit the users' profiles, it is straightforward. The editProfile function toggles the display of the form, and the updateProfile function prevents the default form submission behavior. It retrieves the entered information from the form and replaces the placeholder text with the new text.

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

    createJob(); 
    

}

```
This function is used when a user wants to create a new job posting. Similar to the profile edit function, it takes the form data and creates a new div to represent the new job. It also checks if all the fields are filled in, and if not, it prompts the user to fill them in.

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

This function is responsible for how the search bar works. It retrieves the input and converts it to uppercase to avoid case sensitivity. It then loops through all the cards. If the search matches, it sets the card style to "block," and if it doesn't match or the search is empty, it sets the card style to "none" to hide it. This modification simplifies the logic by combining the conditions for displaying the card
