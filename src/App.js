import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Planner} from "./components/Planner";
import {UserList} from "./components/UserList";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/planner/:username" element={<Planner/>}></Route>
                <Route path="/users" element={<UserList/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
