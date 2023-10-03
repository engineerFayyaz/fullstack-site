import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  List,
  PagerIndicator,
  RatingBar,
  Switch,
  Text,
} from "components";

const Desktop192Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans gap-8 items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        <div className="h-[606px] md:h-[810px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col gap-3 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[95%] md:w-full">
                <Img
                  className="h-20 md:h-auto object-cover"
                  src="images/img_whatsappimage.png"
                  alt="whatsappimage"
                />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[56%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[64%] md:w-full">
                    <Button
                      className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[78px]"
                      onClick={() => navigate("/HomePage")}
                      leftIcon={
                        <Img
                          className="h-[22px] mb-px mr-2"
                          src="images/img_frame_pink_500.svg"
                          alt="Frame"
                        />
                      }
                    >
                      <div className="font-bold text-base text-left text-pink-500">
                        Home
                      </div>
                    </Button>
                    <Button
                      className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[83px]"
                      onClick={() => navigate("/Movies")}
                      leftIcon={
                        <Img
                          className="h-[22px] mb-px mr-2"
                          src="images/img_svgexport6_white_a700.svg"
                          alt="svgexport-6"
                        />
                      }
                    >
                      <div className="text-base text-left text-white-A700">
                        Movies
                      </div>
                    </Button>
                    <Button
                      className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[100px]"
                      onClick={() => navigate("/Channels")}
                      leftIcon={
                        <Img
                          className="h-[22px] mt-px mr-2"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      }
                    >
                      <div className="text-base text-left text-white-A700">
                        Channels
                      </div>
                    </Button>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <Text
                        className="common-pointer text-base text-white-A700 w-auto"
                        size="txtOpenSansRomanRegular16"
                        onClick={() => navigate("/MyChannels")}
                      >
                        My Channel
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search_white_a700.svg"
                    alt="search_One"
                  />
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[172px]"
                    leftIcon={
                      <Img
                        className="h-[22px] mb-px mr-[9px]"
                        src="images/img_bipersonfill.svg"
                        alt="bi:person-fill"
                      />
                    }
                    shape="round"
                    color="pink_500"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-bold text-base text-center">
                      Jane J. Jester
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[514px] relative w-full">
                <Img
                  className="h-[514px] m-auto object-cover w-full"
                  src="images/img_lucifers1.png"
                  alt="lucifersOne"
                />
                <div className="absolute bottom-[2%] flex flex-col gap-[31px] justify-start left-[2%] w-[55%]">
                  <div className="flex flex-col items-start justify-start mr-[321px] w-3/5 md:w-full">
                    <Text
                      className="text-base text-gray-100 text-right"
                      size="txtOpenSansRomanBold16Gray100"
                    >
                      HBO
                    </Text>
                    <div className="flex flex-col font-poppins mt-3.5 relative w-full">
                      <Text
                        className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
                        size="txtPoppinsBlack50"
                      >
                        Meg 2: The Trench
                      </Text>
                      <div className="flex flex-row font-opensans gap-[53px] items-start justify-start mt-[-6.72px] w-[72%] z-[1]">
                        <Text
                          className="text-base text-gray-100 text-right"
                          size="txtOpenSansRomanBold16Gray100"
                        >
                          Resolution:4k
                        </Text>
                        <Text
                          className="text-base text-gray-100 text-right"
                          size="txtOpenSansRomanBold16Gray100"
                        >
                          Runtime: 1 hr, 37 min
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-[17px] w-[53%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-[78%]">
                        <RatingBar
                          className="flex justify-between w-[190px]"
                          value={5}
                          starCount={5}
                          activeColor="#f1c644"
                          size={30}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        5/5
                      </Text>
                    </div>
                  </div>
                  <PagerIndicator
                    className="flex h-6 md:ml-[0] ml-[591px] w-[194px]"
                    count={6}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid bg-gray-100 w-6"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid w-6"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-900_01 flex flex-col items-start justify-end p-4 right-[1%] top-[11%] w-[21%]">
            <Text
              className="common-pointer md:ml-[0] ml-[33px] mt-1 text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/Profile")}
            >
              Profile
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[33px] mt-[26px] text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/MyWishlist")}
            >
              Wishlist
            </Text>
            <Text
              className="md:ml-[0] ml-[33px] mt-[25px] text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
            >
              Notification
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-[26px] w-[78%] md:w-full">
              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtOpenSansRomanRegular16"
                >
                  Email Notification
                </Text>
                <Switch
                  onColor="#d9d9d9"
                  offColor="#d9d9d9"
                  onHandleColor="#ec008b"
                  offHandleColor="#ec008b"
                  value={true}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-7">
              <Text
                className="text-base text-white-A700"
                size="txtOpenSansRomanRegular16"
              >
                Language
              </Text>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[33px] mt-6 text-base text-white-A700"
            >
              <Text size="txtOpenSansRomanRegular16">Contact Us</Text>
            </a>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[33px] mt-[27px] text-base text-white-A700"
            >
              <Text size="txtOpenSansRomanRegular16">Log Out</Text>
            </a>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Desktop192Page;
