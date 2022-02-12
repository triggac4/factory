import "./style/App.scss";

import InformationSection from "./major-sections/information_section";

function App() {
    return (
        <div className="main-section">
            <div className="input">
                <InformationSection />
            </div>
            <div className="map"></div>
        </div>
    );
}

export default App;
