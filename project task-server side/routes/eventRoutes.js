const express = require('express');
const router = express.Router();
const {  getEvents, getEventsWithLimit, getEventsUpcoming, getEventById, getEventsBySorted, getEventByEmail, createEvent, updateEvent, deleteEvent, updateRegCount  } = require('../controllers/eventController');


// create a event -> post
router.post('/events', createEvent);
// show all events -> get
router.get('/events', getEvents);
// get event by limit -> not verified for home
router.get('/events/limited', getEventsWithLimit)
// get events latest -> not verified for home
router.get('/events/upcoming', getEventsUpcoming)
// get event by id
router.get('/events/:id', getEventById);
// get events sorted
router.get('/sortedEvents', getEventsBySorted)
// get events by email
router.get('/myEvents', getEventByEmail);
// update a event -> put
router.put('/events/:id', updateEvent);
// update total count of event
router.patch('/events/:id', updateRegCount)
// delete a event
router.delete('/events/:id', deleteEvent);


module.exports = router;