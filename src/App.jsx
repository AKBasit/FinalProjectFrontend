import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Signup from "./components/User/Signup";
import Login from "./components/User/Login";
import Profile from "./components/User/Profile";
import Outlet from "./components/Outlet";
import IsPrivate from "./components/User/IsPrivate";
import CreateWebDesigns from "./components/Create/CreateWebDesigns";
import CreateFonts from "./components/Create/CreateFonts";
import CreateImages from "./components/Create/CreateImages";
import CollectiveImageLibrary from "./components/CollectiveLibrary/CollectiveImageLibrary";
import CollectiveFontLibrary from "./components/CollectiveLibrary/CollectiveFontLibrary";
import CollectiveWebDesignLibrary from "./components/CollectiveLibrary/CollectiveWebDesignLibrary";
import NotFound from "./components/NotFound";
import WebDesignCardDetails from "./components/ReadForUser/WebDesignCardDetails";
import ImageCardDetails from "./components/ReadForUser/ImageCardDetails";
import FontCardDetails from "./components/ReadForUser/FontCardDetails";

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
        <Route
          path="/collectiveImageLibrary"
          element={<CollectiveImageLibrary />}
        />
        <Route
          path="/collectiveFontLibrary"
          element={<CollectiveFontLibrary />}
        />
        <Route
          path="/collectiveWebDesignLibrary"
          element={<CollectiveWebDesignLibrary />}
        />

        <Route
          path="/web-design/:webDesignId"
          element={<WebDesignCardDetails />}
        />
        <Route path="/web-design/:imageId" element={<ImageCardDetails />} />
        <Route path="/web-design/:fontId" element={<FontCardDetails />} />

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
