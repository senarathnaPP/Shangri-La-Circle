const rooms = require('../models/room')

//create Rooms
const postRooms = async(req,res)=>{
    let newRoom = new rooms(req.body);

    newRoom.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"A new Room successfully added to the given hotel!"
        });
    });

}

//get rooms
const getRooms =  async(req,res)=>{
    rooms.find().exec((err,rooms)=>{
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

//get a specific room by id
const getASpecificRoom=async(req,res)=>{
    let roomId = req.params.id;
    rooms.findById(roomId,(err,room)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            room
        });
    });

}

//update room details
const updateRooms = async(req,res)=>{
    rooms.findByIdAndUpdate(
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
                success:"Room details updated successfully!"
            });
        }
    )
}

//delete room from the system
const deleteRooms = async(req,res)=>{
    rooms.findByIdAndRemove(req.params.id).exec((err,deletedRoom)=>{
        if(err){
            return res.status(400).json({
                message:"Couldn't delete the room something is wrong!",deletedRoom
            });
        }
        return res.status(200).json({
            success:"Room removed successfully!",deletedRoom
        });
    });
};

module.exports = {
    postRooms,
    getRooms,
    getASpecificRoom,
    updateRooms,
    deleteRooms
}