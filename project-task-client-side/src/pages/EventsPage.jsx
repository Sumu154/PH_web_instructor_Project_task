import React from 'react';
import { Helmet } from 'react-helmet';
import AllEventCards from '../components/EventComponents/AllEventCards';

const EventsPage = () => {
  return (
    <div>
      <Helmet>
        <title> All events </title>
      </Helmet>
      <AllEventCards></AllEventCards>
    </div>
  );
};

export default EventsPage;