const exspress = require('express');
var path = require('path');

// express app
const app = exspress();

// add static files
app.use(exspress.static(path.join(__dirname, 'public')));

// listen for requests
app.listen(3000);

console.log('listening for requests on port 3000')

function log(req, res) {
    console.log(req.ip + ' ' + new Date().toLocaleString() + ' ' + req.url);
}

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
    // out put to the console "ip address" "time" "request"
    log(req, res);
}
);

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
    log(req, res);
}
);


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
    console.log(req.ip + ' ' + new Date().toLocaleString() + ' ' + req.url);
    log(req, res);
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
    log(req, res);
}   
);
