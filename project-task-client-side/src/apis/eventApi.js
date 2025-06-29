import axiosInstance from "../config/axiosInstance";


// create user in database
export const createEvent = async (event) => {
  console.log(event)
  const res = await axiosInstance.post("/events", event);
  return res.data;
}

// get all the users
export const getEvents = async () => {
  const res = await axiosInstance.get('/events');
  return res.data;
}

// get all the users
export const getEventsWithLimit = async () => {
  const res = await axiosInstance.get('/events/limited');
  return res.data;
}

// get event by id
export const getEventById = async (event_id) => {
  const res = await axiosInstance.get(`/events/${event_id}`);
  return res.data;
}


// get user object of specific email
export const getEventByEmail = async (user_email) => {
  const res = await axiosInstance.get(`/events/user_email/${user_email}`);
  return res.data;
}

export const updateEvent = async (event_id) => {
  const res = await axiosInstance.put(`/events/${event_id}`);
  return res.data;
}

export const deleteEvent = async (event_id) => {
  const res = await axiosInstance.delete(`/events/${event_id}`);
  return res.data;
}