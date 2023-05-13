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
import  {fetchTweets}  from "../../api/getTweets";

export const TweetsList = () => {
  const [visibleTweets, setVisibleTweets] = useState([]);
  const [filterOption, setFilterOption] = useState('show all');
  const [menuVisible, setMenuVisible] = useState(false);
  const [tweets, setTweets] = useState([]);

useEffect(() => (
  async() => {
    try {
    const data = await fetchTweets();
  
      setTweets(data);
console.log("first", data)
    } catch (error) {
      
    }
  }) , [])
    
  useEffect(() => {
    const tweetsWithFollow = tweets.slice(0, 11).map(tweet => ({
      ...tweet,
      follow: 'follow'
    }));
    setVisibleTweets(tweetsWithFollow);
  }, [tweets]);


  const loadMoreTweets = () => {
    setVisibleTweets([
      ...visibleTweets,
      ...tweets.slice(visibleTweets.length, visibleTweets.length + 4),
    ]);
  };

  const onBackClick = () => {
    window.history.back();
  };
  
  const onFilterChange = (option) => {
    setFilterOption(option);
     setMenuVisible(!menuVisible);
    
  };  
  
  const onMenuClick  = () => {
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
    if (filterOption === 'show all') {
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
      <BtnMenu onClick={onMenuClick}>{filterOption}</BtnMenu>
      {menuVisible && (<DropdownMenu >
        <BtnMenu onClick={() => onFilterChange('show all')}>show all</BtnMenu>
        <BtnMenu onClick={() => onFilterChange('follow')}>follow</BtnMenu>
        <BtnMenu onClick={() => onFilterChange('following')}>followings</BtnMenu>
      </DropdownMenu>)}
    </Dropdown>
      <Container>     
        <BtnBack onClick={onBackClick}>
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
