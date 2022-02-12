import React from "react";
import { GrFormClose } from "react-icons/gr";

const TextResetButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-reset btn">
            <GrFormClose size={30} />
        </button>
    );
};

export default TextResetButton;
