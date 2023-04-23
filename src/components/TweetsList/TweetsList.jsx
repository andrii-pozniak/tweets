import { useState, useEffect } from "react";
import { Container,
   BtnLoadMore,
    BtnBack,
     Icon,
     Dropdown,
  DropdownMenu,
  BtnMenu
     } from "./TweetsList.Style";
import { Card } from "../Card/Card";
import { Tweet } from "../Tweet/Tweet";

export const TweetsList = ({ tweets }) => {
  const [visibleTweets, setVisibleTweets] = useState([]);
  // const [visible, setVisible] = useState([]);
  const [filterOption, setFilterOption] = useState('show all');
  const [menuVisible, setMenuVisible] = useState(false);
  
  useEffect(() => {
    const tweetsWithFollow = tweets.slice(0, 11).map(tweet => ({
      ...tweet,
      follow: 'follow'
    }));
    setVisibleTweets(tweetsWithFollow);
  }, [tweets]);
console.log('first', visibleTweets)

  const loadMoreTweets = () => {
    setVisibleTweets([
      ...visibleTweets,
      ...tweets.slice(visibleTweets.length, visibleTweets.length + 4),
    ]);
  };

  const handleBackClick = () => {
    window.history.back();
  };
  
  const handleFilterChange = (option) => {
    setFilterOption(option);
    
  };  
  
  const handleMenuClick  = () => {
    setMenuVisible(!menuVisible);
    
  };

  const handleFollowClick = ( follow, tweetId) => {
    
    const updatedTweets = visibleTweets.map((tweet) => {
     
      if (tweet.id === tweetId) {
      
        return {
          ...tweet,
          ...follow};
    
      }
    
      return tweet
        
    });
    setVisibleTweets(updatedTweets);
  };
 
  const filteredTweets = visibleTweets.filter(tweet => {
    if (filterOption === 'all') {
      return true;
    } else if (filterOption === 'following') {
      return tweet.follow === 'following';
    } else if (filterOption === 'follow') {
      return tweet.follow === 'follow';
    }
    return false;
  });
  return (
    <>
      <Dropdown >
      <BtnMenu onClick={handleMenuClick}>{filterOption}</BtnMenu>
      {menuVisible && (<DropdownMenu >
        <BtnMenu onClick={() => handleFilterChange('all')}>show all</BtnMenu>
        <BtnMenu onClick={() => handleFilterChange('follow')}>follow</BtnMenu>
        <BtnMenu onClick={() => handleFilterChange('following')}>followings</BtnMenu>
      </DropdownMenu>)}
    </Dropdown>
      <Container>     
        <BtnBack onClick={handleBackClick}>
          <Icon /> Back
        </BtnBack>
        <Tweet />
        
        {filteredTweets?.map(({ id, tweets, followers, avatar }) => (
          <Card
            key={id}
            id={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            onFollowClick={ (follow) => handleFollowClick(follow, id)}
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
