import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr"

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const BtnLoadMore = styled.button`
  display: flex;
  margin-top: 26px;
  padding: 14px ${(p) => p.paddingSize};
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.mx};
  color: ${(p) => p.theme.colors.btn};
  border: none;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const BtnBack = styled.button`
  /* position: absolute;
  top: 8px;
  right: 40px; */
  display: flex;
  margin-top: 26px;
  padding: 5px 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  color: ${(p) => p.theme.colors.btn};
  border: none;
  z-index: 100;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Road = styled(Link)`
text-decoration: none;
`;
export const Icon = styled(GrLinkPrevious)`
margin-right: 8px;
`;
