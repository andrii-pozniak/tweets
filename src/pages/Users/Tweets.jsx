import axios from "axios";
import { useState, useEffect  } from "react";
import { UserList } from "../../components/TweetsList/TweetsList";
import { 
    Section
 } from "./Tweets.Style";

const URL_NAME = "https://643adcdf90cd4ba56303b907.mockapi.io";
export const Users = () => {
    const [users, setUsers] =  useState([])
    console.log('first', users)
    useEffect(() => {
        async function fetchUsers() {
            try {
                const {data} = await axios.get(`${URL_NAME}/tweeters`);
                setUsers(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])
    return (
        <Section>
            <UserList users={users}/>
        </Section>

        
    )
}