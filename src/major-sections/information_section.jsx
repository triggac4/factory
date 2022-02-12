import React from "react";
import TextField from "../components/textfield/location_textfield";
import MainButton from "../components/button/main_buttons";
import LocationInfo from "../components/locations-info";
const InformationSection = () => {
    let val = {};
    function onChange(e) {
        val = { ...val, [e.target.name]: e.target.value };
        console.log(val);
    }

    let startingProps = {
        name: "starting",
        label: "Starting Location",
        placeholder: "Enter Starting Location",
    };
    let dropOffProps = {
        name: "drop-off",
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
                    <MainButton label="Submit" />
                    <MainButton label="reset" />
                </div>
            </div>
        </section>
    );
};

export default InformationSection;
