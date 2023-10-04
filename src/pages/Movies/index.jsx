import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";
import Header1 from "components/Header1";
import FreeToWatch from "components/FreeToWatch";
import TopTen from "components/TopTen";
import Action from "components/Action";
import Adventure from "components/Adventure";
import Animation from "components/Animation";
import Drama from "components/Drama";
import Fantasy from "components/Fantasy";

const Movies = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
          <Img
            className="h-[514px] m-auto object-cover w-full"
            src="images/img_lucifers1.png"
            alt="lucifersOne"
          />
          <PagerIndicator
            className="absolute bottom-[2%] flex h-6 inset-x-[0] justify-center mx-auto w-[194px]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid bg-gray-100 w-6 relative"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid w-6 relative"
            selectedWrapperCss="inline-block mx-[5.00px]"
            unselectedWrapperCss="inline-block mx-[5.00px]"
          />
          <FreeToWatch/>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
         
            <div className="flex flex-1 flex-col gap-4 justify-start my-0 w-full">
              
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_faj2uifuuaul6u_300x210.png"
                        alt="faj2uifuuaul6u"
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_mv5bntfinzblyme_300x210.png"
                        alt="mv5bntfinzblyme"
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_yae6uvqijdn411_300x210.png"
                        alt="yae6uvqijdn411"
                      />
                    </div>
                    <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_faj2uifuuaul6u_1.png"
                        alt="faj2uifuuaul6u_One"
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_mv5bntfinzblyme_300x210.png"
                        alt="mv5bntfinzblyme_One"
                      />
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_yae6uvqijdn411_1.png"
                        alt="yae6uvqijdn411_One"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_faj2uifuuaul6u_300x52.png"
                        alt="faj2uifuuaul6u_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <TopTen/>
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
           <Action/>
            <Adventure/>
           <Animation/>
            <Drama/>
           <Fantasy/>
          </List>
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] ml-[54px] w-[38%] md:w-full">
            <a href="javascript:" className="text-base text-white-A700">
              <Text size="txtOpenSansRomanRegular16"
               onClick={() => navigate("/PrivacyPolicy")}
              >Privacy Policy</Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/Disclaimer")}
            >
              Disclaimer
            </Text>
            <a href="javascript:" className="text-base text-white-A700">
              <Text size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/TermsConditions")}
              >Terms and Conditions</Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              
            >
              Terms of Use
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
