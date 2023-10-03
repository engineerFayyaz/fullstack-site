import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useGoogleLogin } from '@react-oauth/google';
import { Button, CheckBox, Img, Input, Line, Text } from "components";
// import { TwitterAuthProvider } from 'firebase/auth';
import TwitterLogin from "react-twitter-login";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log('res', res);
      alert('Login successful. 😍');
      navigate('/HomePage');
    },
  });

  const firebaseConfig = {
    apiKey: "AIzaSyBDmP8ZRFu1G1IpiD_aYeFq-8EoaeeGwbg",
    authDomain: "web-video-straming.firebaseapp.com",
    projectId: "web-video-straming",
    storageBucket: "web-video-straming.appspot.com",
    messagingSenderId: "200003565474",
    appId: "1:200003565474:web:759f6c524639c6e0f7e4fb",
    measurementId: "G-97QRRJ639P"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Login successful');
      navigate('/HomePage');

      // Store user data in Firestore
      const user = auth.currentUser;
      if (user) {
        addUserToFirestore(user.uid, {
          // Add user data here
        });
      }
    } catch (error) {
      alert('Login failed. Please check your email and password.');
      console.error(error);
    }
  };

  const addUserToFirestore = (uid, userData) => {
    const userRef = firestore.collection('users').doc(uid);
    userRef.set(userData);
  };
  const handleFacebookLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      alert('Facebook login successful');
      navigate('/HomePage');
    } catch (error) {
      alert('Facebook login failed.');
      console.error(error);
    }
  };
  const twitterResponse = async (response) => {
    const { oauth_token, oauth_token_secret } = response;

    try {
      const credential = firebase.auth.TwitterAuthProvider.credential(oauth_token, oauth_token_secret);
      await auth.signInWithCredential(credential);

      alert('Twitter login successful');
      navigate('/HomePage');
    } catch (error) {
      alert('Twitter login failed.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto p-[18px] w-full">
      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[62px] mx-auto md:px-5 w-full">
      <Img
        className="h-[403px] md:h-auto md:mt-0 mt-[217px] object-cover"
        src="images/img_whatsappimage_403x476.png"
        alt="whatsappimage"
      />
      <div className="flex flex-col items-end justify-start">
        <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
          <a
            href="javascript:"
            className="text-2xl md:text-[22px] text-pink-500 sm:text-xl"
          >
            <Text size="txtPoppinsBold24">Login</Text>
          </a>
          <a className="text-2xl md:text-[22px] text-white-A700 sm:text-xl">
            <Text
              className="common-pointer"
              
              size="txtPoppinsRegular24"
              onClick={() => navigate("/signupone")}
            >
              Sign Up
            </Text>
          </a>
        </div>
        <Line className="bg-pink-500 h-0.5 mr-[253px] mt-[7px] w-[55%]" />
        <div className="flex flex-col items-start justify-start mr-0.5 mt-[90px] w-[87%] md:w-full">
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg"
            onClick={() => googleSignIn()}
            shape="round"
            color="pink_500"
            size="sm"
            variant="fill"
          >
            Login with Google
          </Button>
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
            shape="round"
            color="pink_500"
            size="sm"
            variant="fill"
            onClick={handleFacebookLogin}
          >
            Login with Facebook
          </Button>
          <TwitterLogin
        authCallback={twitterResponse}
        consumerKey="YOUR_TWITTER_CONSUMER_KEY"
        consumerSecret="YOUR_TWITTER_CONSUMER_SECRET"
        callbackUrl="YOUR_CALLBACK_URL"
      >
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
            shape="round"
            color="pink_500"
            size="sm"
            variant="fill"
          >
            Login with Twitter
          </Button>
          </TwitterLogin>
          <Text
            className="md:ml-[0] ml-[213px] mt-[49px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtPoppinsBold24WhiteA700"
          >
            OR
          </Text>
          <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-16 w-[99%] md:w-full">
            <Text
              className="text-lg text-white-A700"
              size="txtPoppinsRegular18"
            >
              Email
            </Text>
            <Input
              name="email_One"
              placeholder="Email"
              className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
              wrapClassName="rounded-[20px] w-full"
              type="email"
              color="gray_900_01"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[19px] w-[99%] md:w-full">
            <Text
              className="text-lg text-white-A700"
              size="txtPoppinsRegular18"
            >
              Password
            </Text>
            <Input
              name="password_One"
              placeholder="Password"
              className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
              wrapClassName="rounded-[20px] w-full"
              type="password"
              color="gray_900_01"
              variant="fill"
            ></Input>
          </div>
          <CheckBox
            className="leading-[normal] md:ml-[0] ml-[5px] mt-[19px] text-left text-lg"
            inputClassName="border-2 border-pink-500 border-solid h-[25px] mr-[5px] w-[25px]"
            name="rememberme"
            id="rememberme"
            label="Remember me"
          ></CheckBox>
          <Button
            className="common-pointer border border-pink-500 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-[50px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
            onClick={() => navigate("/HomePage")}
            shape="round"
            color="pink_500"
            size="xs"
            variant="fill"
          >
            Login
          </Button>
          <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[78px] w-full">
            <a
              href="javascript:"
              className="sm:mt-0 mt-0.5 text-lg text-white-A700_90"
            >
              <Text size="txtPoppinsRegular18WhiteA70090"
              onClick={() => navigate("/PrivacyPolicy")}
              >
                Privacy Policy
              </Text>
            </a>
            <a
              href="javascript:"
              className="mb-0.5 text-lg text-white-A700_90"
            >
              <Text size="txtPoppinsRegular18WhiteA70090"
            
              onClick={() => navigate("/TermsConditions")}>
                Terms and Conditions
              </Text>
            </a>
            <Text
              className="mb-0.5 text-lg text-white-A700_90"
              size="txtPoppinsRegular18WhiteA70090"
              onClick={() => navigate("/Disclaimer")}
            >
              Disclaimer
            </Text>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default LoginPage;
