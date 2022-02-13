import React from "react"; //{ useState }
import {
    GoogleMap,
    LoadScript,
    Marker,
    // DirectionsRenderer,
    // DirectionsService,
    // Polyline,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";

const MapSection = () => {
    // const [responses, setResponse] = useState(null);
    // function callback(response) {
    //     if (!responses) {
    //         if (response !== null) {
    //             if (response.status === "OK") {
    //                 console.log("response", response);
    //                 setResponse(response);
    //             } else {
    //                 console.log("response-error: ", response);
    //             }
    //         }
    //     }
    // }
    const state = useSelector((state) => state);

    const origin = state.origin.length
        ? { lat: state.origin[0] - 0, lng: state.origin[1] - 0 }
        : { lat: 22.372081, lng: 114.107877 };
    const destination = state.destination.length
        ? { lat: state.destination[0] - 0, lng: state.destination[1] - 0 }
        : { lat: 22.372081, lng: 114.107877 };
    const current = state.origin.length
        ? { lat: state.current[0] - 0, lng: state.current[1] - 0 }
        : { lat: 22.372081, lng: 114.107877 };
    return (
        <section className="map-section">
            <LoadScript googleMapsApiKey={process.env.API_KEY}>
                <GoogleMap
                    mapContainerStyle={{ height: "100%", width: "100%" }}
                    center={origin}
                    zoom={12}
                >
                    {/* <DirectionsService
                        options={{
                            destination: {
                                lat: 9.0765,
                                lng: 7.3986,
                            },
                            origin: { lat: 9.0679, lng: 7.4464 },
                            travelMode: "DRIVING",
                        }}
                        callback={(e) => callback(e)}
                    />
                    {responses ? (
                        <>
                            <DirectionsRenderer
                                options={responses}
                                onLoad={(directionsRenderer) => {
                                    console.log(
                                        "DirectionsRenderer onLoad directionsRenderer: ",
                                        directionsRenderer
                                    );
                                }}
                            />
                            <Polyline
                                options={{
                                    strokeColor: "#FF0000",
                                    strokeOpacity: 0.8,
                                    strokeWeight: 2,
                                    fillColor: "#FF0000",
                                    fillOpacity: 0.35,
                                    clickable: false,
                                    draggable: false,
                                    editable: false,
                                    visible: true,
                                    radius: 30000,
                                    paths: responses.routes[0].overview_path,
                                    zIndex: 1,
                                }}
                                path={responses.routes[0].overview_path}
                            />
                        </>
                    ) : null} */}
                    <Marker position={origin} id="1" label="A" />
                    <Marker position={destination} id="2" label="B" />
                    <Marker position={current} id="2" label="C" />
                </GoogleMap>
            </LoadScript>
        </section>
    );
};

export default MapSection;
