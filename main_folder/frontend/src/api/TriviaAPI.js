import apiHelpers from "./apiHelpers"
import axios from "axios"


const TriviaAPI = { }

const BASE_URL = "http://localhost:8000/trivia_api/"

TriviaAPI.getAllProfiles = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}profiles/`, apiHelpers.getCsrfConfig()))
}

TriviaAPI.getProfileById = async (profileid) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}profiles/${profileid}`, apiHelpers.getCsrfConfig()))
}

TriviaAPI.getProfileByPlayer = async (player) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}profiles`, {
    params: {
      player: `${player}`
    }
  }))
}

TriviaAPI.createProfile = async (profileData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}profiles/`, profileData, apiHelpers.getCsrfConfig()))
}

TriviaAPI.getAllAchievements = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}achievements/`, apiHelpers.getCsrfConfig()))
}

TriviaAPI.newResult = async (resultData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}results/`, resultData, apiHelpers.getCsrfConfig()))
}

TriviaAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig()))
}

TriviaAPI.signup = async (signUpData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}users/`, signUpData, apiHelpers.getCsrfConfig()))
}

TriviaAPI.logout = async (logout) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}logout/`, null, apiHelpers.getCsrfConfig()))
}

TriviaAPI.edit = async (id, data) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}profiles/${id}/`, data, apiHelpers.getCsrfConfig())
  )
}

TriviaAPI.delete = async (id) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}users/${id}/`, apiHelpers.getCsrfConfig())
  )
}



export default TriviaAPI;