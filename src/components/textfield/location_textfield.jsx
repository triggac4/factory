import React, { useState } from "react";

import TextResetButton from "../button/text_reset_button";

const TextField = ({ name, label, placeholder, showReset, onChange }) => {
    const [value, setValue] = useState("");

    const change = (e, reset = false) => {
        if (reset) {
            setValue("");
            onChange(e, name);
        } else {
            setValue(e.target.value);
            onChange(e);
        }
    };
    return (
        <div className="textfield">
            <label htmlFor={name} className="textfield__label">
                {label}
            </label>
            <div className="textfield__input">
                <input
                    type="text"
                    id={name}
                    onChange={change}
                    placeholder={placeholder}
                    name={name}
                    className="textfield__input-field"
                    value={value}
                />
                {showReset && (
                    <TextResetButton onClick={(e) => change(e, true)} />
                )}
            </div>
        </div>
    );
};

export default TextField;
