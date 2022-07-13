const PyamentModel = require('../models/payment')

/*Post Pyament */
const postPayment = async (req, res) => {
    let paymentObject = new PyamentModel(req.body);

    paymentObject.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Room reserved successfully!"
        });
    });

}

/*Get Payment */
const getPayment = async (req, res) => {
    try {
        const data = await PyamentModel.find()
        return res.status(200).send({ data: data })
    } catch (err) {
        return res.status(500).send({ err: err })
    }

}

// /*Update reservations */

// const updateRoomReservations = async (req, res) => {
//     roomReservations.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set: req.body
//         },
//         (err, Reservation) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: err
//                 });
//             }
//             return res.status(200).json({
//                 success: "Reservation details updated successfully!"
//             });
//         }
//     );
// };

/*Delete Pyament */
const deletePayment = async (req, res) => {
   PyamentModel.findByIdAndRemove(req.params.id).exec((err, deletedpayment) => {
        if (err) {
            return res.status(400).json({
                message: "Couldn't delete the the reservation something is wrong!", deletedpayment
            });
        }
        return res.status(200).json({
            success: "Reservation deleted successfully!", deletedpayment
        });
    });
};

const getPaymentById = async (req, res) => {
    try {
        const data = await PyamentModel.findById(req.params.id);
        return res.status(200).json({ data: data })
    } catch (err) {
        return res.status(500).send({ err: err })
    }

}


module.exports = {
    getPayment,
    postPayment,
    deletePayment,
    getPaymentById
}