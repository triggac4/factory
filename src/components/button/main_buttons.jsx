import React from "react";

const MainButton = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className="main-button btn">
            {label}
        </button>
    );
};

export default MainButton;
