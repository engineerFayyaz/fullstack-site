import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SignUpEmailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900_02 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start p-[122px] md:px-5 w-[52%] md:w-full">
          <Img
            className="h-[403px] md:h-auto mb-[201px] mt-44 object-cover w-[95%]"
            src="images/img_whatsappimage_403x476.png"
            alt="whatsappimage"
          />
        </div>
        <div className="bg-black-900 flex flex-col justify-end mb-[7px] p-[11px] md:px-5 w-[49%] md:w-full">
          <Img
            className="h-[50px] md:ml-[0] ml-[18px] mr-[600px] mt-[18px] w-[50px]"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <div className="flex flex-col items-end justify-start md:ml-[0] ml-[104px] mr-[18px] w-[82%] md:w-full">
            <div className="flex flex-row items-center justify-between w-[78%] md:w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              >
                <Text size="txtPoppinsRegular24">Login</Text>
              </a>
            
              <div style={{ display: 'flex', alignItems: 'center', padding: '0px 100px 0' }}>
  <Text
    className="text-2xl md:text-[22px] text-pink-500 sm:text-xl"
    size="txtPoppinsBold24WhiteA600"
  >
    Sign Up
  </Text>
</div>
            </div>
            <Line className="bg-pink-500 h-0.5 mt-[7px] w-1/3" />
            <div style={{ display: 'flex', alignItems: 'center', padding: '30px 250px 0' }}>
  <Text
    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
    size="txtPoppinsBold24WhiteA600"
  >
    Set up your account
  </Text>
</div>

            <div className="flex flex-col items-center justify-start mr-[91px] mt-[34px] w-[84%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Username
                </Text>
                <Input
                  name="groupTwelve"
                  placeholder="Username"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="text"
                  color="gray_900_01"
                  variant="fill"
                ></Input>
                <Text
                  className="md:ml-[0] ml-[30px] text-lg text-white-A700_87"
                  size="txtPoppinsRegular18WhiteA70087"
                >
                  e.g. alexfred619, jasemine.ford.6
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start mt-[17px] w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  First Name
                </Text>
                <Input
                  name="groupThirteen"
                  placeholder="First Name"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="text"
                  color="gray_900_01"
                  variant="fill"
                ></Input>
              </div>
              <div className="md:h-[106px] h-[86px] mt-5 relative w-[99%] sm:w-full">
                <Input
                  name="groupFourteen"
                  placeholder="Last Name"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto rounded-[20px] w-full"
                  type="text"
                  color="gray_900_01"
                  variant="fill"
                ></Input>
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Last Name
                </Text>
                <div className="absolute flex flex-col gap-[9px] h-full inset-[0] items-start justify-center m-auto w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="groupFifteen"
                    placeholder="Last Name"
                    className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                    wrapClassName="rounded-[20px] w-full"
                    type="text"
                    color="gray_900_01"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[21px] w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Subscription
                </Text>
                <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                  <Text
                    className="text-lg text-white-A700_87"
                    size="txtPoppinsRegular18WhiteA70087"
                  >
                    <>
                      Please choose your Plan and continue to next
                      <br />
                      step where you can enter your payment
                      <br /> information
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[21px] w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Subscription Plan
                </Text>
                <SelectBox
                  className="border border-pink-500 border-solid font-bold leading-[normal] text-left text-lg w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-1.5 mr-[0] w-3 rounded-lg py-3 px-[9px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="price"
                  options={priceOptionsList}
                  isSearchable={false}
                  placeholder="Binge Network ($5.99 Monthly)"
                  shape="round"
                  color="pink_500"
                  size="xs"
                  variant="fill"
                />
              </div>
              <Button
                className="common-pointer border border-pink-500 border-solid cursor-pointer leading-[normal] min-w-[225px] mt-8 shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/HomePage")}
                shape="round"
                color="pink_500"
                size="xs"
                variant="fill"
              >
                Sign Up
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

export default SignUpEmailPage;
