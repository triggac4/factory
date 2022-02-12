import React from "react";

const LocationInfo = ({ title, value }) => {
    return (
        <div className="location-info">
            <h5 className="location-info__title">{title}</h5>
            <p className="location-info__value">{`: ${value}`}</p>
        </div>
    );
};

export default LocationInfo;
