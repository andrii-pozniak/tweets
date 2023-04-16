import picture from "../../image/picture2.png";
import logo from "../../image/logo.svg";
import {
  Img,
  Line,
  Ring,
  ContainerBtn,
  Text,
  TextCount,
  Btn,
  OwnImg,
  Section,
  Logo,
} from "./Card.Style";
import { useState } from "react";

export const Card = ({ tweets, followers, avatar }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [counts, setCounts] = useState(followers);

  const handleFollowClick = () => {
    if (showBtn) {
      setShowBtn(false);
      setCounts(followers - 1);
    } else {
      setShowBtn(true);
      setCounts(followers + 1);
    }
  };

  const toggleBtn = () => {
    setShowBtn(!showBtn);
  };

  return (
    <Section>
      <Logo src={logo} alt="" />
      <Img src={picture} alt="" />
      <Line />
      <Ring>
        <OwnImg src={avatar} alt="" />
      </Ring>
      <ContainerBtn>
        {/* <Form/> */}
        <Text> {tweets} TWEETS</Text>
        <TextCount>{counts} FOLLOWERS</TextCount>
        {!showBtn ? (
          <Btn
            type="button"
            onClick={() => {
              toggleBtn();
              handleFollowClick();
            }}
            backgroundColor="#EBD8FF"
            paddingSize="56px"
          >
            Follow
          </Btn>
        ) : (
          <Btn
            type="button"
            onClick={() => {
              toggleBtn();
              handleFollowClick();
            }}
            backgroundColor="#5CD3A8"
            paddingSize="42px"
          >
            Following
          </Btn>
        )}
      </ContainerBtn>
    </Section>
  );
};
