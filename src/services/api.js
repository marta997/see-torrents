import axios from "axios"

const API_URL = "http://localhost:8009"
export const ERROR = 'error'

export const getServers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/sites`)
    return response?.data
  } catch (error) {
    console.error(error)
  }
}

export const searchTorrent = async (server, search) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/search?site=${server}&query=${search}`
    )
    return response?.data
  } catch (error) {
    return ERROR
  }
}
