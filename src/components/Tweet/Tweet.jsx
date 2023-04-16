import picture from "../../image/picture2.png";
import Photo from "../../image/Hansel.png";
// import {Form} from "../Form/Form";
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
} from "../Card/Card.Style";
import { useState } from "react";

export const Tweet = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [counts, setCounts] = useState(100500);

  const handleClick = () => {
    setCounts(counts + 1);
  };
  const onHandleClick = () => {
    setCounts(counts - 1);
  };

  const toggleBtn = () => {
    setShowBtn(!showBtn);
  };

  return (
    <div>
      <Section>
        <Logo src={logo} alt="" />
        <Img src={picture} alt="" />
        <Line />
        <Ring>
          <OwnImg src={Photo} alt="" />
        </Ring>
        <ContainerBtn>
          {/* <Form/> */}
          <Text> 777 TWEETS</Text>
          <TextCount>{counts} FOLLOWERS</TextCount>
          {!showBtn ? (
            <Btn
              type="button"
              onClick={() => {
                toggleBtn();
                handleClick();
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
                onHandleClick();
              }}
              backgroundColor="#5CD3A8"
              paddingSize="42px"
            >
              Following
            </Btn>
          )}
        </ContainerBtn>
      </Section>
    </div>
  );
};
