import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div key={index}>
            <h2 className="font-medium text-lg">{item?.day}</h2>
            {item?.schedule?.map((item, index) => (
              <div key={index} className="my-2">
                <h2 className="font-medium text-sm text-orange-500">{item?.time}</h2>
                <div>
                    <PlaceCardItem item={item}/>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
