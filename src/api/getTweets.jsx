import axios from "axios";

const URL_NAME = "https://643adcdf90cd4ba56303b907.mockapi.io";


export const fetchTweets = async()=> {

    const response = await axios.get(`${URL_NAME}/tweeters`);

    console.log("response", response)

    return response.data;

};