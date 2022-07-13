const express= require('express')
const router = express.Router()
const {getReservations,postReservations,updateReservations, deleteReservations, getASpecificReservation, getPayments} =  require('../controllers/controller')
const { postHotels, getHotels, updateHotels, deleteHotels, getASpecificHotel } = require('../controllers/hotelController')
const Reservations = require('../models/Reservations')
const{AdminLogin , postUser } = require('../controllers/adminUser')
const { postRooms, getRooms, getASpecificRoom, updateRooms, deleteRooms } = require('../controllers/roomControllers')


/* Reservations */

router.get("/reservations",getReservations)
router.post("/reservations/post",postReservations)
router.put("/reservations/update/:id",updateReservations)
router.delete("/reservations/delete/:id",deleteReservations)
router.get("/get/reservations/:id",getASpecificReservation)

// User
router.post("/user/post",postUser)

/**Login */
router.post("/login", AdminLogin)

/* Hotel routes */
router.post("/add/hotels",postHotels)
router.get("/get/hotels",getHotels)
router.put("/update/hotels/:id",updateHotels)
router.delete("/delete/hotels/:id",deleteHotels)
router.get("/get/hotels/:id",getASpecificHotel)

/*Room routes */

router.post("/add/rooms",postRooms)
router.get("/get/rooms",getRooms)
router.get("/get/rooms/:id",getASpecificRoom)
router.put("/update/room/:id",updateRooms)
router.delete("/delete/room/:id",deleteRooms)

/*Payments */
router.get("/get/payments",getPayments)

module.exports=router

