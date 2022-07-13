const clientRegistartion = require('../models/clientRegistration')




const getfillter = async (req, res) => {



    const { email, customerFirstName } = req.body;
    clientRegistartion.find({ email: email , customerFirstName:customerFirstName }, (err, user) => {
        if (user) {
            

                return res.status(200).json({ message: "Login successful!", data: user })
           
        } else {
            return res.status(400).json({ error: "Not registered!" })
        }
    })
    console.log(clientRegistartion)
}

/*Post client registration */

const postClientRegistration = async (req, res) => {
    let newClient = new clientRegistartion(req.body);

    newClient.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "client register successfully!",
            status: "200"
        });
    });
}

/*Get all register client */

const getAllClients = async (req, res) => {
    try {
        const clientData = await clientRegistartion.find()
        return res.status(200).send({
            status: "200",
            data: clientData
        })
    } catch (err) {
        return res.status(500).send({
            status: "500",
            err: err
        })
    }
}

/*Update Client */

const updateClient = async (req, res) => {
    clientRegistartion.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },

    ).then(() => {
        res.status(200).send({ status: "200", statusmsg: "user updated" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: "500", statusmsg: "error with updating data" });

    })
}

/*Delete Client */

const deleteClient = async (req, res) => {

    clientRegistartion.findByIdAndDelete(
        req.params.id
    ).then(() => {
        res.status(200).send({ status: "200", statusmsg: "user deleted" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: "500", statusmsg: "error with deleting data" });

    })

}

// Login & Twilio Message Service 
const clientLogin = async (req, res) => {
    let client1 = new clientRegistartion (req.body);

    var sid = 'ACb587b699915ef2007afe88b568aa5977';
    var auth_token = '5d8055f9fb2f90f41ae42196d4cbd724';

    var twilio = require("twilio")(sid, auth_token);

    twilio.messages
        .create({
            from: "+12055573949",
            to: "+1(561)537-9856",
            body: "Welcome to Shangi-La-Circle hotel. This is the testing message for our message API.(2022S1_REG_99: Dodanduwa D.L.H.S.D,Senarathna P.P, Amarakoon G.A.M.T.S.B, Pigera A.I.H)",
        })
        .then(function (res) { console.log("message has sent!") })
        .catch(function (err) {
            console.log(err);
        });




    const { email, password } = req.body;
    clientRegistartion.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password && email === user.email) {

                return res.status(200).json({ message: "Login successful!", data: user })
            } else {
                return res.status(400).json({ error: "Invalid email or password!" })
            }
        } else {
            return res.status(400).json({ error: "Not registered!" })
        }
    })
    console.log(clientRegistartion)
}

const messageService = async (req, res) => {
    // const {name, paymentId, cusName, noDays, noRes, roomType, payment } = req.body
    // console.log("addd" , req.body)

    // var stringMessage = "Name :" + name + "PaymentId :"+ paymentId + "Customer Name :"+ cusName + 
    // "NoOfDays :"+ noDays + "NoOfReservations :"+ noRes + "Room Type :" + roomType +"Payment :" + payment;
   
    
    var sid = 'ACb587b699915ef2007afe88b568aa5977';
    var auth_token = '5d8055f9fb2f90f41ae42196d4cbd724';

    var twilio = require("twilio")(sid, auth_token);

    twilio.messages
        .create({
            from: "+12055573949",
            to: "+1(561)537-9856",
            body: "Welcome to Shangi-La-Circle hotel. This is the testing message for our message API.(2022S1_REG_99: Dodanduwa D.L.H.S.D,Senarathna P.P, Amarakoon G.A.M.T.S.B, Pigera A.I.H)",
        })
        .then(function (res) { console.log("message has sent!") })
        .catch(function (err) {
            console.log(err);
        });

}



module.exports = {
    postClientRegistration,
    getAllClients,
    updateClient,
    deleteClient,
    clientLogin,
    getfillter,



    messageService

}