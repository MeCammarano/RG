const express = require('express');
const path = require('path');

const app = express();

// FRONT END
    app.use(express.static(path.join(__dirname + '/dist-browser')));
    app.get('*', function (request, response) {
        response.sendFile(path.join(__dirname + '/dist-browser/index.html'));
    });

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Server listening on port '+port);
});