import React from 'react';
import AddEventForm from '../components/EventComponents/AddEventForm';
import { Helmet } from 'react-helmet';


const AddEventsPage = () => {
  return (
    <div>
      <Helmet>
        <title> Add events </title>
      </Helmet>
      <AddEventForm></AddEventForm>
    </div>
  );
};

export default AddEventsPage;