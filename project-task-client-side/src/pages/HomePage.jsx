import React from 'react';
import HomeBanner from '../components/Header/HomeBanner';
import { Helmet } from 'react-helmet';


const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title> Home </title>
      </Helmet>
      <HomeBanner></HomeBanner>
    </div>
  );
};

export default HomePage;