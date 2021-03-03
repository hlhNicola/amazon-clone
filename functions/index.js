const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const stripe = require("stripe")(
    'sk_test_51IQoQVEQJlG7DRevZIFu28YKtMlg9p5LWfqr66Fplzyu7rs9JFqI3x7VJb0xpaBD7rkiSRwHtoGQPrxDElHC9wdC00eBfzGV9m')

const app = express()

app.use(cors({origin: true}))
app.use(express.json())


app.get('/', (request, response) => response.status(200).send('hello world'))

exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-eebc3/us-central1/api
