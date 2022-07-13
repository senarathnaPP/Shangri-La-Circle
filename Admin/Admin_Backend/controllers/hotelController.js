const hotels = require('../models/hotels')

//create hotels
const postHotels = async(req,res)=>{
    let newHotel = new hotels(req.body);

    newHotel.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"A new Hotel successfully added to the system!"
        });
    });

}

//get hotels
const getHotels =  async(req,res)=>{
    hotels.find().exec((err,hotels)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingHotels:hotels
        });
    });
}

//get a specific hotel by id
const getASpecificHotel=async(req,res)=>{
    let hotelId = req.params.id;
    hotels.findById(hotelId,(err,hotel)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            hotel
        });
    });

}

//update hotel details
const updateHotels = async(req,res)=>{
    hotels.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Hotel details updated successfully!"
            });
        }
    )
}

//delete hotels from the system
const deleteHotels = async(req,res)=>{
    hotels.findByIdAndRemove(req.params.id).exec((err,deletedHotel)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the the hotel something is wrong!",deletedHotel
            });
        }
        return res.status(200).json({
            success:"Hotel removed successfully!",deletedHotel
        });
    });
};

module.exports = {
    postHotels,
    getHotels,
    getASpecificHotel,
    updateHotels,
    deleteHotels
}