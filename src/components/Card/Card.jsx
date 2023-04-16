import picture from "../../image/picture2.png";
// import Photo from "../../image/Hansel.png";
// import {Form} from "../Form/Form";
import logo from "../../image/logo.svg"
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
    Logo
} from "./Card.Style";
import { useState } from "react";

export const Card = ({ tweets, followers, avatar }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [counts, setCounts] = useState(followers);

  const handleClick = () => {
   console.log('first', counts )
    setCounts(counts + 1);
// console.log('counts', t )
  };
  const onHandleClick = () => {
    setCounts(counts - 1);
  };

    // console.log('first', {avatar})
  const toggleBtn = () => {
    setShowBtn(!showBtn);
  };

  return (
   
    <Section >
       <Logo src={logo} alt=''/>
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
      
   
  );
};
