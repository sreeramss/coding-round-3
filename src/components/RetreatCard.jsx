import React from "react";

const RetreatCard = ({ image, title, description, date, location, price }) => {
  // Assuming date is a Unix timestamp
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date * 1000));

  return (
    <div className="border p-4 bg-[#e0d9cf] rounded-md shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-36 rounded-md md:w-[50%] md:object-cover"
      />
      <h2 className="text-lg sm:opacity-75 font-semibold mt-2">{title}</h2>
      <div className="text-[12px]">
        <p>{description}</p>
        <p>Date: {formattedDate}</p>
        <p>Location: {location}</p>
        <p className="font-bold sm:font-normal">Price: ${price}</p>
      </div>
    </div>
  );
};

export default RetreatCard;
