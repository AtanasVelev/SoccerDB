import axios from "axios";

export const getMatchDays = async (endpoint)=> await axios.get(endpoint);

export const getMatchDay = async (endpoint)=> await axios.get(endpoint);