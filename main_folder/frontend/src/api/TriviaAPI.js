
import axios from "axios"


const TriviaAPI = { }

const BASE_URL = "http://127.0.0.1:8000/trivia_api/"

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    console.log("RESPONSE:", response)
    console.log("RESONSE DATA:", response.data)
    return response.data
  }  
  catch (e) {
    console.error("Error:", e)
    return null
  }
}

TriviaAPI.getAllResults = async () => {
 return await tryCatchFetch(() => axios.get(`${BASE_URL}results/`))
}

TriviaAPI.getAllProfiles = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}profiles/`))
}

TriviaAPI.getProfileById = async (profileid) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}profiles/${profileid}`))
}

TriviaAPI.getAllAchievements = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}achievements/`))
}

TriviaAPI.newResult = async (resultData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}results/`, resultData))
}



export default TriviaAPI;