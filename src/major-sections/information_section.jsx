import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "../components/textfield/location_textfield";
import MainButton from "../components/button/main_buttons";
import LocationInfo from "../components/locations-info";
import DispatchHandler from "../utils/DispatchHandler";
import Error from "../components/error/error_component";
const InformationSection = () => {
    const [location, setLocation] = useState({});
    const resubmit = useRef(true);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
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
    function onChange(e, name = null) {
        console.log(e.target.name);
        const key = name ?? e.target.name;
        console.log(location);
        const value = {
            ...location,
            [key]: name ? "" : e.target.value,
        };
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
    let infoComp = null;
    if (state.loading) {
        infoComp = <h1>Loading... </h1>;
    } else if (state.error) {
        infoComp = <Error value={state.error.message} />;
    } else if (state.total_distance) {
        infoComp = (
            <>
                <LocationInfo
                    title="total distance"
                    value={state.total_distance}
                />
                <LocationInfo title="total time" value={state.total_time} />
            </>
        );
    }
    return (
        <section className="info-section">
            <div className="info-section__location-fields">
                <TextField
                    {...startingProps}
                    onChange={onChange}
                    showReset={location.origin}
                />
                <TextField
                    {...dropOffProps}
                    onChange={onChange}
                    showReset={location.destination}
                />
            </div>

            <div className="info-section__info-buttons">
                <div className="info-section__info">{infoComp} </div>
                <div className="info-section__buttons">
                    <MainButton label="Submit" onClick={onSubmit} />
                    <MainButton
                        label="reset"
                        onClick={() => {
                            DispatchHandler.reset(dispatch);
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default InformationSection;
