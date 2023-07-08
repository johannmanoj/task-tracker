const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
const index = require('./routes/index')

const app = express()

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet()); // need to add more configurations
app.use(cors());

app.use("/api", index)

app.get('/', (req, res) => {
    res.status(200).send(`Server is running`);
});

app.listen(1000, () =>{
    console.log("Server is runnign on PORT 1000")
})