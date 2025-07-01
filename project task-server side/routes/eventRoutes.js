const express = require('express');
const router = express.Router();
const {  getEvents, getEventsWithLimit, getEventsUpcoming, getEventById, getEventsBySorted, getEventByEmail, createEvent, updateEvent, deleteEvent, updateAttendeeCount  } = require('../controllers/eventController');


// create a event -> post
router.post('/events', createEvent);
// show all events -> get
router.get('/events', getEvents);
router.get('/events/:id', getEventById);
// get events by email
router.get('/myEvents', getEventByEmail);
// update a event -> put
router.put('/events/:id', updateEvent);
// update total count of event
router.patch('/events/:id', updateAttendeeCount)
// delete a event
router.delete('/events/:id', deleteEvent);


module.exports = router;