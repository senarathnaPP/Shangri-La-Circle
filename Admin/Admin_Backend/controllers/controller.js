const Reservations = require('../models/Reservations');
const Payments = require("../models/payment")


/*Post reservations*/
const postReservations= async(req,res)=>{
    let newReservation = new Reservations(req.body);

        newReservation.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Reservation added successfully!"
            });
        });
    
}

/*Get reservations */
const getReservations= async(req,res)=>{
    Reservations.find().exec((err,rooms)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRooms:rooms
        });
    });
    
}

//get a specific reservation by id
const getASpecificReservation=async(req,res)=>{
    let resId = req.params.id;
    Reservations.findById(resId,(err,reservation)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            reservation
        });
    });

}


/*Update reservations */

const updateReservations = async(req,res)=>{
    Reservations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Reservation)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Reservation details updated successfully!"
            });
        }
    );
};

/*Delete Reservations */
const deleteReservations=async(req,res)=>{
    Reservations.findByIdAndRemove(req.params.id).exec((err,deletedReservation)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the the reservation something is wrong!",deletedReservation
            });
        }
        return res.status(200).json({
            success:"Reservation deleted successfully!",deletedReservation
        });
    });
};

/*Get payments */
const getPayments= async(req,res)=>{
    Payments.find().exec((err,payments)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPayments:payments
        });
    });
    
}

module.exports={
    getReservations,
    getASpecificReservation,
    postReservations,
    updateReservations,
    deleteReservations,
    getPayments
}

//module.exports=postReservations;