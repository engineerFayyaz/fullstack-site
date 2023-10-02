import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopThirtySeven = React.lazy(() => import("pages/DesktopThirtySeven"));
const Desktop193 = React.lazy(() => import("pages/Desktop193"));
const DesktopThirtySix = React.lazy(() => import("pages/DesktopThirtySix"));
const Desktop192 = React.lazy(() => import("pages/Desktop192"));
const Desktop182 = React.lazy(() => import("pages/Desktop182"));
const Desktop181 = React.lazy(() => import("pages/Desktop181"));
const Desktop180 = React.lazy(() => import("pages/Desktop180"));
const Desktop179 = React.lazy(() => import("pages/Desktop179"));
const Desktop191 = React.lazy(() => import("pages/Desktop191"));
const Player = React.lazy(() => import("pages/Player"));
const DetailsOne = React.lazy(() => import("pages/DetailsOne"));
const Details = React.lazy(() => import("pages/Details"));
const Desktop190 = React.lazy(() => import("pages/Desktop190"));
const Desktop189 = React.lazy(() => import("pages/Desktop189"));
const Desktop188 = React.lazy(() => import("pages/Desktop188"));
const Desktop187 = React.lazy(() => import("pages/Desktop187"));
const Desktop186 = React.lazy(() => import("pages/Desktop186"));
const SignUpEmail = React.lazy(() => import("pages/SignUpEmail"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SignUpOne = React.lazy(() => import("pages/SignUpOne"));
const Login = React.lazy(() => import("pages/Login"));
const Desktop177 = React.lazy(() => import("pages/Desktop177"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktop177" element={<Desktop177 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupemail" element={<SignUpEmail />} />
          <Route path="/desktop186" element={<Desktop186 />} />
          <Route path="/desktop187" element={<Desktop187 />} />
          <Route path="/desktop188" element={<Desktop188 />} />
          <Route path="/desktop189" element={<Desktop189 />} />
          <Route path="/desktop190" element={<Desktop190 />} />
          <Route path="/details" element={<Details />} />
          <Route path="/detailsone" element={<DetailsOne />} />
          <Route path="/player" element={<Player />} />
          <Route path="/desktop191" element={<Desktop191 />} />
          <Route path="/desktop179" element={<Desktop179 />} />
          <Route path="/desktop180" element={<Desktop180 />} />
          <Route path="/desktop181" element={<Desktop181 />} />
          <Route path="/desktop182" element={<Desktop182 />} />
          <Route path="/desktop192" element={<Desktop192 />} />
          <Route path="/desktopthirtysix" element={<DesktopThirtySix />} />
          <Route path="/desktop193" element={<Desktop193 />} />
          <Route path="/desktopthirtyseven" element={<DesktopThirtySeven />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
