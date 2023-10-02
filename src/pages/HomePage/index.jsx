import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";
import Header1 from "components/Header1";

const HomePage = () => {
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
          <div className="absolute bottom-[13%] flex flex-col items-start justify-start left-[2%] w-[33%]">
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
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 justify-start my-0 w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Free to Watch
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                    <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                      <Img
                        className="common-pointer h-[300px] md:h-auto object-cover w-full"
                        src="images/img_faj2uifuuaul6u_300x210.png"
                        alt="faj2uifuuaul6u"
                        onClick={() => navigate("/details")}
                      />
                      <Img
                        className="common-pointer h-[300px] md:h-auto object-cover w-full"
                        src="images/img_mv5bntfinzblyme_300x210.png"
                        alt="mv5bntfinzblyme"
                        onClick={() => navigate("/detailsone")}
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
            <div className="flex flex-1 flex-col gap-4 justify-start my-0 w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Featured
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
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
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[92%] md:w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Top 10 in your country
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_1.svg"
                    alt="One"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-5.5px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_2.svg"
                    alt="Two"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-24.35px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_185x132.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_3.svg"
                    alt="Three"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-25.75px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_1.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_4.svg"
                    alt="Four"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-41.5px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_2.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_5.svg"
                    alt="Five"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-23.33px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_3.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_6.svg"
                    alt="Six"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-28.33px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_2.png"
                      alt="image_One"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Action
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
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
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Adventure
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
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
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Animation
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
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
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Drama
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
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
            <footer className="flex flex-1 items-center justify-center w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="flex md:flex-col flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] mr-[1308px] w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtOpenSansRomanBold20WhiteA700"
                  >
                    Fantasy
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
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
            </footer>
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

export default HomePage;
