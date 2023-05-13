import styled from "styled-components";
import { GrLinkPrevious } from "react-icons/gr"

export const Container = styled.div`
  display: flex;
  gap: 16px;
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
  position: absolute;
  top: 8px;
  right: 40px;
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
  z-index: 500;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled(GrLinkPrevious)`
margin-right: 8px;
`;
export const Dropdown =styled.div`
    position: relative;
   
  `;


export const DropdownMenu =styled.div`
    position: absolute;
    top: 20px;
    left: 0;
    padding: 5px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-top: none;
    z-index: 1;
  `;

export const BtnMenu = styled.button`
  display: flex;
  margin-bottom: 12px;
  padding: 8px ${(p) => p.paddingSize};
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

export const BtnFilter = styled.button`
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
