const eventModel = require('../models/eventModel');


const createEvent = async (req, res) => {
  try{
    console.log('post api hitting');
    const event = req.body;

    const createdEvent = await eventModel.create(event);
    res.status(200).json(createdEvent);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the events
const getEvents = async (req, res) => {
  // console.log('get all events');
  try{
    const events = await eventModel.find().sort({ eventDateTime: 1 });
    res.status(200).json(events);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get events with limit
const getEventsWithLimit = async (req, res) => {
  try{
    const events = await eventModel.find().limit(6);
    res.status(200).json(events);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

// upcoming 6 events
const getEventsUpcoming = async (req, res) => {
  try{
    const events = await eventModel.find().sort({eventDateTime: -1}).limit(6);
    res.status(200).json(events);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get event by id 
const getEventById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const event = await eventModel.findOne( {_id: id} );
    res.status(200).json(event);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get sorted events
const getEventsBySorted = async (req, res) => {
  // console.log('get sorted events');
  // console.log(req.query);
  const order = req.query.sort;
  // console.log(order);
  const sortBy = order==='asc' ? 1 : -1;
  // console.log(sortBy);

  try{
    const events = await eventModel.find().sort({createdAt: sortBy});
    res.status(200).json(events);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get campaign by one user -> by email
const getEventByEmail = async (req, res) => {
  try{
    const email = req.query.email;
    // console.log(email);

    let myEvents = await eventModel.find( {email} );
    res.status(200).json(myEvents)
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}



// update a event by id
const updateEvent = async (req, res) => {
  try{
    const id = req.params.id;
    const updatedEvent = await eventModel.findOneAndUpdate(
      { _id:id },
      req.body,
      { new: true },
    )
    res.status(200).json(updatedEvent);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// update event -> only regCount change korbo
const updateAttendeeCount = async (req, res) => {
  try{
    const id = req.params.id;

    const updatedEvent = await eventModel.findByIdAndUpdate(
      id,
      { $inc: { attendeeCount: 1 } },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// delete a event by id
const deleteEvent = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);

    const deletedEvent = await eventModel.findByIdAndDelete(id);
    res.status(200).json(deletedEvent);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { getEvents, getEventsWithLimit, getEventsUpcoming, getEventById, getEventsBySorted, getEventByEmail, createEvent, updateEvent, deleteEvent, updateAttendeeCount };