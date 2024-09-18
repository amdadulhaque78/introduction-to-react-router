import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <h2>This is the home component</h2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;