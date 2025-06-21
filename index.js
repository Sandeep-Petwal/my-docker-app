const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.json({
        routes: [
            {
                route: "/test",
                type: "get",
                desc: "Get the status"
            },
            {
                route: "/docker",
                type: "get",
                desc: "Docker test port"
            }
        ]
    })
})

app.get("/test", (req, res) => {
    res.json({
        status: "working",
        route: "test"
    })
})
app.get("/docker", (req, res) => {
    res.sendFile(`${__dirname}/docker.html`, (err) => {
        if (err) {
            console.log('err', err)
        }
    })
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log('err', err)
    }
    console.log("Server running on port :: " , PORT)
})