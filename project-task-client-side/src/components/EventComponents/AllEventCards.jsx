import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import EventCard from './EventCard';
import { getEvents } from '../../apis/eventApi';


const AllEventCards = () => {
  const [ events, setEvents ] = useState([]);
  const [sortOrder, setSortOrder] = useState('');


  const handleSortChange = (order) => {
    setSortOrder(order);
  }

  useEffect(() => {
    const fetchMarathons = async () => {
      console.log(sortOrder);
      if(sortOrder===''){
        console.log('all events');
        const events = await getEvents() ;

        setEvents(events);
      }
      else{
        console.log('its sorted')
        const res = await axios.get(`https://marathon-management-server-side.vercel.app/api/sortedMarathons?sort=${sortOrder}`, {withCredentials: true});
        setEvents(res.data);
        console.log(res.data);
      }
    }
    fetchMarathons();
  }, [sortOrder])
  

  return (
    <div className='w-[90%] mx-auto '>
      <div className='flex justify-between items-center'>
        <h3 className='py-6 font-semibold text-gray-900  text-2xl md:text-3xl   dark:text-white '> See all events here </h3>
        <div className="dropdown dropdown-bottom dropdown-end dropdown-hover  ">
          <div tabIndex={0} role="button" className=" bg-crimsonRed text-white px-4 py-[6px] font-semibold rounded-lg">  Sort By </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100  rounded-box z-[1] w-32 p-2 shadow">
            <li><a onClick={()=> handleSortChange('desc')} className='hover:bg-crimsonRed hover:text-white hover:font-bold '>  Latest </a></li>
            <li><a onClick={()=> handleSortChange('asc')} className='hover:bg-crimsonRed hover:text-white hover:font-bold '>  Oldest </a></li>
          </ul>
        </div>
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '> 
        {events.map((it) => {
          return <EventCard event={it} ></EventCard>
      })}
      </div>
    </div>
  );
};

export default AllEventCards;