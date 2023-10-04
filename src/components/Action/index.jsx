import React from "react";
import { useNavigate } from "react-router-dom";
import { Button,Img,List, PagerIndicator, Text  } from "components";

const Action =()=>{
    const navigate= useNavigate();
    return(
        <>
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
        </>
    )
};
export default Action;