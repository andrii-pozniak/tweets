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

export const Card = ({ tweets, id, followers, avatar, onFollowClick }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [counts, setCounts] = useState(followers);

  const toggleBtn = () => {
    setShowBtn(!showBtn);
    if (showBtn) {
      setCounts(counts - 1);
    } else {
      setCounts(counts + 1);
    }
  };

  return (
    <Section>
      <Logo src={logo} alt="logo" />
      <Img src={picture} alt="picture" />
      <Line />
      <Ring>
        <OwnImg src={avatar} alt="avatar" />
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
              onFollowClick({ follow: "following" }, id);
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
              onFollowClick({ follow: "follow" }, id);
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
