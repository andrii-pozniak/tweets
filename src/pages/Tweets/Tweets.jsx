import axios from "axios";
import { useState, useEffect  } from "react";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { 
    Section
 } from "./Tweets.Style";

const URL_NAME = "https://643adcdf90cd4ba56303b907.mockapi.io";
export const Tweets = () => {
    const [tweets, setTweets] =  useState([])
    // console.log('first', users)
    useEffect(() => {
        async function fetchUsers() {
            try {
                const {data} = await axios.get(`${URL_NAME}/tweeters`);
                setTweets(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])
    return (
        <Section>

            <TweetsList tweets={tweets}/>
        </Section>

        
    )
}