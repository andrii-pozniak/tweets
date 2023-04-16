import styled from "styled-components";

export const Section = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
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

