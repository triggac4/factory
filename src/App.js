import "./style/App.scss";
import Error from "./components/error/error_component";
import TextField from "./components/textfield/location_textfield";
import MainButton from "./components/button/main_buttons";
import LocationInfo from "./components/locations-info/location-info_component";

function App() {
    return (
        <div className="App">
            <TextField
                name={"checking"}
                label="texting"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                placeholder="placeholder"
                showReset
            />
            <MainButton label={"just check"} onClick={() => {}} />
            <LocationInfo title="total distance" value="3000" />
            <Error value="just some random stuff" />
        </div>
    );
}

export default App;
