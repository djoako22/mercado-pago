const router = require('express').Router();
const axios = require('axios');

// "/payment": "generates a payment link"
router.post("/payment", async (req, res, next) => {
    const payment = await axios.post("https://api.mercadopago.com/checkout/preferences",
        req.body,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

    return res.json(payment.data);
});


//  "/subscription": "generates a subscription link"
router.get("/subscription", async (req, res, next) => {
    /* Example body */
    const body = {
        reason: "Suscripción de ejemplo",
        auto_recurring: {
            frequency: 1,
            frequency_type: "months",
            transaction_amount: 10,
            currency_id: "ARS"
        },
        back_url: "https://google.com.ar",
        payer_email: "test_user_46945293@testuser.com"
    };

    const subscription = await axios.post("https://api.mercadopago.com/preapproval",
        body,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

    return res.json(subscription.data);
});

module.exports = router;