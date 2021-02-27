import React from "react";
import styled from "styled-components";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";

const Features = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Feature = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  border-radius: var(--rounded-xl);
  background-color: var(--color-blue-600);

  :first-child {
    margin-bottom: 24px;
  }
`;

const Icon = styled.div`
  width: 40px;
  margin-right: 32px;
`;

const Title = styled.div`
  color: #fff;
  font-family: "Poppins";
  font-weight: 600;
  font-size: var(--text-lg);
`;

const Content = styled.div`
  flex: 1;
`;

const Text = styled.div`
  color: var(--color-blue-300);
  font-family: "Inter";
  font-weight: 400;
  font-size: var(--text-sm);
  margin-top: 8px;
  line-height: 1.6;
`;

const JumboFeature = () => {
  return (
    <Features>
      <Feature>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#fff"
            viewBox="0 0 38.835 36.334"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M8.1.054l.068,0,.03,0,.025,0,.106.013.045.008L8.463.1,8.5.111l.1.031.028.011.1.04L8.756.21l.078.041a1.494,1.494,0,0,1,.685.842l.005.02,2.063,6.7A1.5,1.5,0,0,1,8.769,8.83L8.72,8.694,7.767,5.6A31.667,31.667,0,0,0,5.289,17.844,31.01,31.01,0,0,0,9.861,34.1,1.5,1.5,0,1,1,7.3,35.671,34.01,34.01,0,0,1,2.289,17.843,34.679,34.679,0,0,1,5.171,4.04L1.949,5.053a1.5,1.5,0,0,1-1.83-.846l-.05-.136a1.5,1.5,0,0,1,.846-1.83l.136-.05L7.708.1,7.767.09,7.641.123a1.6,1.6,0,0,1,.21-.05L7.9.066c.026,0,.051-.006.077-.008l.066,0H8.1ZM34.992,10.9l.183.155,3.155,2.806A1.5,1.5,0,0,1,36.456,16.2l-.12-.1L33.181,13.3a1.834,1.834,0,0,0-2.46.021l-.117.118-6.342,7a1.5,1.5,0,0,1-1.756.347l-.125-.067-7.868-4.7a1,1,0,0,0-1.123,1.651l.1.066,15.021,8.98A1.5,1.5,0,0,1,27.1,29.351l-.128-.068-3.005-1.8-.941,1.575a.165.165,0,0,0,.017.194l.041.034L28.8,32.71a2.472,2.472,0,0,0,1.391.29l.32-.011.361-.025.406-.039.7-.084.99-.129c2.218-.27,3.687-.158,5.119.7a1.5,1.5,0,0,1-1.412,2.643l-.128-.068a4.561,4.561,0,0,0-2.924-.329l-.831.1-.478.064-.609.074c-2.035.231-3.093.148-4.279-.513l-.17-.1L21.54,31.866a3.166,3.166,0,0,1-1.184-4.18l.091-.162.94-1.574-9.441-5.644A4,4,0,0,1,10.461,15l.1-.185a4,4,0,0,1,5.3-1.485l.185.1,6.812,4.072,5.516-6.087A4.833,4.833,0,0,1,34.99,10.9Z"
              transform="translate(0 -0.054)"
            />
          </svg>
        </Icon>
        <Content>
          <Title>Use a simple way</Title>
          <Text>
            We’re a growing family of 382,081 designers and makers from around
            the world
          </Text>
        </Content>
      </Feature>
      <Feature>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#fff"
            viewBox="0 0 38.835 36.334"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M8.1.054l.068,0,.03,0,.025,0,.106.013.045.008L8.463.1,8.5.111l.1.031.028.011.1.04L8.756.21l.078.041a1.494,1.494,0,0,1,.685.842l.005.02,2.063,6.7A1.5,1.5,0,0,1,8.769,8.83L8.72,8.694,7.767,5.6A31.667,31.667,0,0,0,5.289,17.844,31.01,31.01,0,0,0,9.861,34.1,1.5,1.5,0,1,1,7.3,35.671,34.01,34.01,0,0,1,2.289,17.843,34.679,34.679,0,0,1,5.171,4.04L1.949,5.053a1.5,1.5,0,0,1-1.83-.846l-.05-.136a1.5,1.5,0,0,1,.846-1.83l.136-.05L7.708.1,7.767.09,7.641.123a1.6,1.6,0,0,1,.21-.05L7.9.066c.026,0,.051-.006.077-.008l.066,0H8.1ZM34.992,10.9l.183.155,3.155,2.806A1.5,1.5,0,0,1,36.456,16.2l-.12-.1L33.181,13.3a1.834,1.834,0,0,0-2.46.021l-.117.118-6.342,7a1.5,1.5,0,0,1-1.756.347l-.125-.067-7.868-4.7a1,1,0,0,0-1.123,1.651l.1.066,15.021,8.98A1.5,1.5,0,0,1,27.1,29.351l-.128-.068-3.005-1.8-.941,1.575a.165.165,0,0,0,.017.194l.041.034L28.8,32.71a2.472,2.472,0,0,0,1.391.29l.32-.011.361-.025.406-.039.7-.084.99-.129c2.218-.27,3.687-.158,5.119.7a1.5,1.5,0,0,1-1.412,2.643l-.128-.068a4.561,4.561,0,0,0-2.924-.329l-.831.1-.478.064-.609.074c-2.035.231-3.093.148-4.279-.513l-.17-.1L21.54,31.866a3.166,3.166,0,0,1-1.184-4.18l.091-.162.94-1.574-9.441-5.644A4,4,0,0,1,10.461,15l.1-.185a4,4,0,0,1,5.3-1.485l.185.1,6.812,4.072,5.516-6.087A4.833,4.833,0,0,1,34.99,10.9Z"
              transform="translate(0 -0.054)"
            />
          </svg>
        </Icon>
        <Content>
          <Title>Use a simple way</Title>
          <Text>
            We’re a growing family of 382,081 designers and makers from around
            the world
          </Text>
        </Content>
      </Feature>
    </Features>
  );
};

export default JumboFeature;
