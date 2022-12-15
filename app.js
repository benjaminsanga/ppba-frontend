const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

//load up the db file
const db = require("./models")

// Load the routes from the api
const report = require('./routes/api/report.route');

const app = express()

// db connection
db.sequelizeConfig.sync({ force: process.env.NODE_ENV === 'development' ? true : false  })
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


app.use(cors())

// Body parser middleware for parsing requests to json formats
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Load the routes into the application
app.use('/api/report',report);

app.get('/', (req, res) => {
    res.send({message: 'index hit'})
})

app.listen(8000, () => {
    console.log('listening...')
})

console.log('node env: ',process.env.NODE_ENV)