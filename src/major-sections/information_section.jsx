import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import TextField from "../components/textfield/location_textfield";
import MainButton from "../components/button/main_buttons";
import LocationInfo from "../components/locations-info";
import DispatchHandler from "../utils/DispatchHandler";
const InformationSection = () => {
    const [location, setLocation] = useState({});
    const resubmit = useRef(true);
    const dispatch = useDispatch();
    async function onSubmit() {
        if (resubmit.current) {
            resubmit.current = false;
            await DispatchHandler.LoadingWrapper(
                dispatch,
                location,
                DispatchHandler.getRoute
            );
        }
        resubmit.current = true;
    }
    function onChange(e) {
        const value = { [e.target.name]: e.target.value };
        setLocation(value);
    }

    let startingProps = {
        name: "origin",
        label: "Starting Location",
        placeholder: "Enter Starting Location",
    };
    let dropOffProps = {
        name: "destination",
        label: "Drop-off Location",
        placeholder: "Enter Drop-off Location",
    };
    return (
        <section className="info-section">
            <div className="info-section__location-fields">
                <TextField {...startingProps} onChange={onChange} />
                <TextField {...dropOffProps} onChange={onChange} />
            </div>

            <div className="info-section__info-buttons">
                <div className="info-section__info">
                    <LocationInfo title="total distance" value={12000} />
                    <LocationInfo title="total time" value={3000} />
                </div>
                <div className="info-section__buttons">
                    <MainButton label="Submit" onClick={onSubmit} />
                    <MainButton label="reset" />
                </div>
            </div>
        </section>
    );
};

export default InformationSection;
