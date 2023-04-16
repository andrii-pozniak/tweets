import { useState, useEffect } from "react";
import {
  Container,
  BtnLoadMore,
  BtnBack,
  Road,
  Icon,
} from "./TweetsList.Style";
import { Card } from "../Card/Card";
import { Tweet } from "../Tweet/Tweet";

export const TweetsList = ({ tweets }) => {
  const [visibleTweets, setVisibleTweets] = useState([]);

  const loadMoreTweets = () => {
    setVisibleTweets([
      ...visibleTweets,
      ...tweets.slice(visibleTweets.length, visibleTweets.length + 4),
    ]);
  };

  useEffect(() => {
    setVisibleTweets(tweets.slice(0, 8));
  }, [tweets]);

  return (
    <>
      <Container>
        <div>
          <Road to={"/"}>
            <BtnBack>
              <Icon /> Back
            </BtnBack>
          </Road>
        </div>

        <Tweet />
        {visibleTweets?.map(({ id, tweets, followers, avatar }) => (
          <Card
            key={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </Container>
      <div>
        {visibleTweets.length < tweets.length && (
          <BtnLoadMore onClick={loadMoreTweets}>Load More</BtnLoadMore>
        )}
      </div>
    </>
  );
};
