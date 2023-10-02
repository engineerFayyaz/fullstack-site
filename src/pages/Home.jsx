import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="CodeMagz-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signupone">SignUpOne</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/signupemail">SignUpEmail</Link>
        </li>
        <li>
          <Link to="/HomePage">HomePage</Link>
        </li>
        {/* <li>
          <Link to="/desktop187">Desktop187 Screen</Link>
        </li> */}
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          <Link to="/Channels">Channels</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/detailsone">DetailsOne</Link>
        </li>
        <li>
          <Link to="/player">Player</Link>
        </li>
        <li>
        </li>
        <li>
          <Link to="/TermsConditions">TermsConditions</Link>
        </li>
        <li>
          <Link to="/PrivacyPolicy">PrivacyPolicy</Link>
        </li>
        <li>
          <Link to="/Disclaimer">Disclaimer</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/desktop192">Desktop192</Link>
        </li>
        <li>
          <Link to="/CreateNewChannel">CreateNewChannel</Link>
        </li>
        <li>
          <Link to="/UploadContent">UploadContent</Link>
        </li>
        <li>
          <Link to="/MyChannels">MyChannels</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
