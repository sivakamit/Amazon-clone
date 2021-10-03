const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HiL5KBla7JpGdgaed6HWEjRWEQU6jbzwrNBxJkKAC3PvoUuQSrwrjDD5TjpH7fKbFh4Jj0s8h7Z8Xe3a8AQq46G00JcxSAMZS')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    //OK-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listern command
exports.api = functions.https.onRequest(app)