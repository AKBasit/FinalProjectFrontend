import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Outlet from "./components/Outlet";
import IsPrivate from "./components/IsPrivate";
import CreateWebDesigns from "./components/CreateWebDesigns";
import CreateFonts from "./components/CreateFonts";
import CreateImages from "./components/CreateImages";
import CollectiveImageLibrary from "./components/CollectiveImageLibrary";
import CollectiveFontLibrary from "./components/CollectiveFontLibrary";
import CollectiveWebDesignLibrary from "./components/CollectiveWebDesignLibrary";
import NotFound from "./components/NotFound";
// import WebDesignCardDetails from "./components/WebDesignCardDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createWebdesigns" element={<CreateWebDesigns />} />
        <Route path="/createFonts" element={<CreateFonts />} />
        <Route path="/createImages" element={<CreateImages />} />
        <Route path="/collectiveImageLibrary" element={<CollectiveImageLibrary />} />
        <Route path="/collectiveFontLibrary" element={<CollectiveFontLibrary />} />
        <Route path="/collectiveWebDesignLibrary" element={<CollectiveWebDesignLibrary />} />
        {/* <Route path="/web-design/:id" element={<WebDesignCardDetails webD />} /> */}

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
