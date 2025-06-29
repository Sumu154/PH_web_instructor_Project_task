import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";


const EventCard = ({ event }) => {
  const {
    _id: id,
    eventTitle,
    eventPostedBy,
    eventDateTime,
    eventLocation,
    eventDescription,
    attendeeCount,
  } = event;

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getCountdown = (targetDate) => {
    const now = new Date();
    const diff = new Date(targetDate) - now;
    if (diff <= 0) return "Expired";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${days}d ${hours}h ${minutes}m left`;
  };

  return (
    <div className="bg-white shadow-md border-l-4 border-crimsonRed rounded-xl p-4 w-full max-w-md mx-auto text-gray-700 dark:bg-cardbackground dark:text-white">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{eventTitle}</h2>
          <p className=" text-gray-600 dark:text-gray-300">By: {eventPostedBy}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-700">
            {new Date(eventDateTime).toLocaleDateString('en-US', { day: '2-digit' })}
          </p>
          <p className=" text-gray-600 dark:text-gray-300">
            {new Date(eventDateTime).toLocaleDateString('en-US', { month: 'short' })}
          </p>
        </div>
      </div>

      {/* Middle Info */}
      <div className="mb-2">
        <p className="flex items-center gap-1  font-medium mb-1">
          <FaLocationDot className="text-gray-700" /> {eventLocation}
        </p>
        <p className="flex items-center gap-1  text-gray-700 dark:text-gray-300">
          <FaCalendarAlt className="text-gray-700" /> {formatDateTime(eventDateTime)}
        </p>
        <p className="text-sm mt-2">{eventDescription}</p>
      </div>

      {/* Bottom Area */}
      <div className="mt-3 flex justify-between items-center">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          <span className="font-medium text-red-500">{getCountdown(eventDateTime)}</span>
        </div>
        <Link to={`/events/${id}`}>
          <button className="px-4 py-1 border border-crimsonRed text-crimsonRed rounded-md hover:bg-crimsonRed hover:text-white transition-all  font-medium">
            Join event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
