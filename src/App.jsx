import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {

    return (

        <div className="app">

            <ProfileCard
                name="Umair Arshad"
                role="Frontend Developer"
                bio="Passionate about React, JavaScript and MERN Stack."
                followers={120}
                image="https://picsum.photos/200"
            />

        </div>

    );

}

export default App;