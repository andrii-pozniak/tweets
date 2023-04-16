import styled from "styled-components";

export const FormUser = styled.form`
margin-top: 26px;

`;
export const Input = styled.input`
width: 100px;
outline: none;
background: transparent;
border: none;
font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.mx};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.text};
  width: ${(p) => p.inputValue}ch;

`;

export const Label = styled.label`
display: flex;
    justify-content: center;
    :first-child {
    margin-bottom: 16px;
  };
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
  margin-top: 26px;
  background-color: ${(p) => p.backgroundColor};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.mx};
  
`;
