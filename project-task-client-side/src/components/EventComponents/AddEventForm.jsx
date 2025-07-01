import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../../assets/stylesheets/modal.css'
import { createEvent } from '../../apis/eventApi';



const AddEventForm = () => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [dates, setDates] = useState({});


  const handleAddEvent = async (e) => {
    e.preventDefault();

    // get the form data
    const form = new FormData(e.target);   
   
  const eventTitle = form.get('eventTitle');
  const eventPostedBy = form.get('eventPostedBy');
  const eventDateTime = dates.eventDateTime;
  const eventLocation = form.get('eventLocation');
  const eventDescription = form.get('eventDescription');

  const createdAt = new Date().toISOString();
  const attendeeCount = 0;

  const newEvent = {
    eventTitle,
    eventPostedBy,
    eventDateTime,
    eventLocation,
    eventDescription,
    attendeeCount,
    createdAt,
  };

  console.log(newEvent);
    
    // database e store korte hbe
    const res = await createEvent(newEvent)
    console.log(res);

    Swal.fire({
      title: "Event added successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });

    e.target.reset();
    setDates({})
  }

  const handleDateChange = (date, fieldName) => {
    console.log(`${fieldName}:`, date);
    setDates({...dates, [fieldName]: date});
  };


  return (
    <div className='max-w-[550px] mx-auto bg-white mt-14 p-8   dark:bg-cardbackground shadow-2xl'>
      <h3 className='py-6 font-medium text-center text-black opacity-80 text-2xl md:text-3xl   dark:text-white '> Add new event </h3>
      <form onSubmit={handleAddEvent} className="mt-4  pb-8 ">
        {/* User Info */}
        <div className="flex justify-between flex-wrap gap-2 mb-3">
          <fieldset className="form-control w-full md:w-[49%]">
            <label className="label mb-1">
              <span className="label-text">Your Name</span>
            </label>
            <input name="eventPostedBy" type="text" placeholder='Enter full name' className="input input-bordered w-full"  />
          </fieldset>
          <fieldset className="form-control w-full md:w-[49%]">
            <label className="label mb-1">
              <span className="label-text"> Your Email </span>
            </label>
            <input name="email" type="email" placeholder={user_email} className="input input-bordered w-full" readOnly />
          </fieldset>
        </div>

        {/* Event Title + DateTime */}
        <div className="flex justify-between flex-wrap gap-2 mb-3">
          <fieldset className="form-control w-full md:w-[49%]">
            <label className="label mb-1">
              <span className="label-text"> Event Title </span>
            </label>
            <input name="eventTitle" type="text" placeholder="Enter event title" className="input input-bordered w-full" required />
          </fieldset>
          <fieldset className="form-control w-full md:w-[49%]">
            <label className="label mb-1">
              <span className="label-text"> Event Date & Time </span>
            </label>
            <DatePicker
              selected={dates.eventDateTime || null}
              name="eventDateTime"
              onChange={(date) => handleDateChange(date, 'eventDateTime')}
              showTimeSelect
              dateFormat="Pp"
              className='input input-bordered w-full '
              placeholderText="Select date & time"
              required
          />
          </fieldset>
        </div>

        {/* Location */}
        <div className="flex justify-between flex-wrap gap-2 mb-3">
          <fieldset className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text">Location</span>
            </label>
            <input name="eventLocation" type="text" placeholder="Enter location" className="input input-bordered w-full" required />
          </fieldset>
        </div>

        {/* Description */}
        <div className="form-control w-full mb-4">
          <label className="label mb-1">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="eventDescription"
            className="textarea textarea-bordered h-24 w-full text-sm"
            placeholder="Enter event description"
            required
          ></textarea>
        </div>


        <div className="form-control mt-8"> 
          <button className="btn bg-crimsonRed hover:bg-crimsonRed/95 text-white w-full"> Submit event  </button>
        </div>
      </form>

    </div>
  );
};

export default AddEventForm;