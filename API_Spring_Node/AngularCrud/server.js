const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requisição application/json
app.use(express.json());

// parse form - pela url
app.use(express.urlencoded({ extended: true }));

// rota simples
app.get("/", (req, res) => {
    res.json({ message: "Welcome to aplication" });
});

// set da porta para listen
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => { 
    console.log(`Server is running on the port ${PORT}.`);
});