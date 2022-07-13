const hotels = require('../models/hotels')
// const hotels = require('../../../Admin/Admin_Backend/models/hotels')

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

const getHotelById = async(req,res) =>{
    try {
        const hotel = await hotels.findById(req.params.id);

        res.json(hotel);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    getHotels,
    getHotelById
};