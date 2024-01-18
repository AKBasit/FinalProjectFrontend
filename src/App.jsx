import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Outlet from "./components/Outlet";
import IsPrivate from "./components/IsPrivate";
import CreateWebDesigns from "./components/CreateWebDesigns";
import CreateFonts from "./components/CreateFonts";
import CreateGeneral from "./components/CreateGeneral";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createWebdesigns" element={<CreateWebDesigns />} />
        <Route path="/createFonts" element={<CreateFonts />} />
        <Route path="/createGeneral" element={<CreateGeneral />} />
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
