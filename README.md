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
