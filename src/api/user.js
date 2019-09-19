import axios from '@/libs/api.request'

let baseUrl = 'user'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: `${baseUrl}/login`,
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: `${baseUrl}/get_info`,
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: `${baseUrl}/logout`,
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: `${baseUrl}/message/count`,
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: `${baseUrl}/message/init`,
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: `${baseUrl}/message/content`,
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: `${baseUrl}/message/has_read`,
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeRead = msg_id => {
  return axios.request({
    url: `${baseUrl}/message/remove_read`,
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: `${baseUrl}/message/restore`,
    method: 'post',
    data: {
      msg_id
    }
  })
}
