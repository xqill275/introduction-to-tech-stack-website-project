const express = require('express'); // Import the Express.js framework
const path = require('path'); // Module for handling file paths
const fs = require('fs'); // File system module for interacting with the file system

// Create an Express app
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests on port 3000
app.listen(3000);

// Log a message to the console when the server is listening
console.log('Listening for requests on port 3000');

// Function to log IP address, timestamp, and requested URL
function log(req, res) {
    console.log(req.ip + ' ' + new Date().toLocaleString() + ' ' + req.url);
}

// Handle GET requests for the root URL
app.get('/', (req, res) => {
    // Send the 'index.html' file as the response
    res.sendFile('./views/index.html', { root: __dirname });
    // Log the request details
    log(req, res);
});

// Handle GET requests for the '/loginRegister' URL
app.get('/loginRegister', (req, res) => {
    // Send the 'loginRegister.html' file as the response
    res.sendFile('./views/loginRegister.html', { root: __dirname });
    // Log the request details
    log(req, res);
});

// Handle POST requests for the '/writeToFile' URL
app.post('/writeToFile', express.json(), (req, res) => {
    // Extract 'text' and 'file' properties from the request body
    const { text, file } = req.body;

    // Iterate through the 'text' array
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);

        // Check if the current element is at index 1 and has value 'student' or 'lecturer' to fix an error where the user title and user password were being swapped
        if (i === 1 && (text[i] === 'student' || text[i] === 'lecturer')) {
            // Store values and append them to corresponding files
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

// Handle 404 errors by sending the '404.html' file as the response
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
    // Log the request details
    log(req, res);
});
