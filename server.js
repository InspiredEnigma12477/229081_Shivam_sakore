const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(__dirname + "\index.html");
    res.sendFile(__dirname + "/index.html");
})

app.get('/schedule', (req,res) => {
    res.sendFile(__dirname + "/pages/schedule.html")
});

app.get('/dac', (req,res) => {
    res.sendFile(__dirname + "/pages/dac.html")
});
app.get('/ditiss', (req,res) => {
    res.sendFile(__dirname + "/pages/ditiss.html")
});
app.get('/dbda', (req,res) => {
    res.sendFile(__dirname + "/pages/dbda.html")
});


app.listen(6969, () => {
    console.log("Server is listening on 6969");
})

