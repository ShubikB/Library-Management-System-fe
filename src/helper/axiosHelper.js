import axios from "axios"

const authEp = ""
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT")
}

const getRefreshJwt = () => {
  return localStorage.getItem("refreshJWT")
}

export const apiHelper = async ({ method, url, data, isPrivate, isRefreshToken = false }) => {
  const headers = {
    Authorization: isPrivate
      ? `Bearer ${getAccessJWT()}`
      : isRefreshToken
      ? `Bearer ${getRefreshJwt()}`
      : null,
  }
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    })
    return response.data
  } catch (error) {
    if (error?.response?.data?.message === "jwt expired") {
      const refreshData = await apiHelper({
        method: "get",
        url: "http://localhost:5173/api/v1/user/renewJWT",
        isRefreshToken: true,
        isPrivate: false,
      })
      if (refreshData && refreshData.status) {
        sessionStorage.setItem("accessJWT", refreshData.data)

        return apiHelper({
          method,
          url,
          data,
          isPrivate,
        })
      } else {
        return {
          status: "Error",
          message: "Error Refreshing Refresh Token",
        }
      }
    }
    return {
      status: "Error",
      message: error.message,
    }
  }
}
