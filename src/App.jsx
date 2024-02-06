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
import WebDesignUpdate from "./components/UpdateUserCards/WebDesignUpdate";
import FontUpdate from "./components/UpdateUserCards/FontUpdate";
import ImageUpdate from "./components/UpdateUserCards/ImageUpdate";
import CollectiveFontCardDetails from "./components/ReadForCollective/CollectiveFontCardDetail";
import CollectiveWebDesignCardDetails from "./components/ReadForCollective/CollectiveWebDesignCardDetail";
import CollectiveImageCardDetails from "./components/ReadForCollective/CollectiveImageCardDetail";

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
          path="/image/shared/:imageId"
          element={<CollectiveImageCardDetails />}
        />

        <Route
          path="/collectiveFontLibrary"
          element={<CollectiveFontLibrary />}
        />
        <Route
          path="/font/shared/:fontId"
          element={<CollectiveFontCardDetails />}
        />

        <Route
          path="/collectiveWebDesignLibrary"
          element={<CollectiveWebDesignLibrary />}
        />
        <Route
          path="/web-design/shared/:webDesignId"
          element={<CollectiveWebDesignCardDetails />}
        />

        <Route
          path="/web-design/:webDesignId"
          element={<WebDesignCardDetails />}
        />
        <Route path="/image/:imageId" element={<ImageCardDetails />} />
        <Route path="/font/:fontId" element={<FontCardDetails />} />

        <Route
          path="/web-design/update/:webDesignId"
          element={<WebDesignUpdate />}
        />

        <Route path="/image/update/:imageId" element={<ImageUpdate />} />

        <Route path="/font/update/:fontId" element={<FontUpdate />} />

        <Route
          path="/profile"
          element={
            <Outlet>
              <Profile />
            </Outlet>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
