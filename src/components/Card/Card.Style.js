import styled from "styled-components";

export const Section = styled.div`
 position: relative;  
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)";
  border-radius: ${(p) => p.theme.radii.large};
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const Line = styled.div`
 
  margin-top: ${(p) => p.theme.space[4]}px;
  height: ${(p) => p.theme.space[3]}px;
  width: 100%;
  background: ${(p) => p.theme.colors.line};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ring = styled.div` 
  margin-left: auto;
  margin-right: auto;
  margin-top: -55px;
  height: ${(p) => p.theme.space[7]}px;
  width: ${(p) => p.theme.space[7]}px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  border-radius: ${(p) => p.theme.radii.round};
  border: ${(p) => p.theme.space[3]}px solid ${(p) => p.theme.colors.line};
  border-color: ${(p) => p.theme.colors.line};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Img = styled.img`
  padding-top: ${(p) => p.theme.space[4]}px;
  padding-left: ${(p) => p.theme.space[6]}px;
  padding-right: ${(p) => p.theme.space[6]}px;
 
`;
export const ContainerBtn = styled.div`
  margin-top: 26px;
  padding-bottom: 36px;
  :first-child {
    margin-bottom: 16px;
  }
  text-align: center;
`;
export const Text = styled.p`
  margin: 0;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.mx};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.text};
  
`;
export const TextCount = styled.p`  margin: 0;
  margin-bottom: 26px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.mx};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.text};  
`;
export const Btn = styled.div`
  display: inline-block; 
  padding: 14px ${(p) => p.paddingSize};  
  background-color: ${(p) => p.backgroundColor};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.mx};
  color: ${(p) => p.theme.colors.btn};
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  
`;
export const OwnImg = styled.img`
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    object-fit: cover;
    border-radius: 50%;

`;
