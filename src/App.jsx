import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Outlet from "./components/Outlet";
import IsPrivate from "./components/IsPrivate";
import CreateToDo from "./components/CreateToDo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createCreation" element={<CreateToDo />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Outlet>
                <Profile />
              </Outlet>
            </IsPrivate>
          }
        />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
