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
import { useState, useEffect } from "react";

export const Tweet = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [counts, setCounts] = useState(100500);

  useEffect(() => {
    const followingState = localStorage.getItem("following");
    const followersCount = localStorage.getItem("followers");
    if (followingState !== null && followersCount !== null) {
      setShowBtn(JSON.parse(followingState));
      setCounts(parseInt(followersCount));
    }
  }, []);

  const handleFollowClick = () => {
    if (showBtn) {
      setShowBtn(false);
      setCounts(counts - 1);
      localStorage.setItem("following", false);
      localStorage.setItem("followers", counts - 1);
    } else {
      setShowBtn(true);
      setCounts(counts + 1);
      localStorage.setItem("following", true);
      localStorage.setItem("followers", counts + 1);
    }
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
    </div>
  );
};
