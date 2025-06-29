import React from 'react';
import AddEventForm from '../components';
import { Helmet } from 'react-helmet';


const AddMarathons = () => {
  return (
    <div>
      <Helmet>
        <title> Add marathons </title>
      </Helmet>
      <AddEventForm></AddEventForm>
    </div>
  );
};

export default AddMarathons;