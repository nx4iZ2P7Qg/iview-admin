import axios from '@/libs/api.request'

let queenUrl = 'queen'

export const getGlance = () => {
  return axios.request({
    url: `${queenUrl}/menstrual/glance`,
    headers: {
      'X-API-VERSION': 1
    },
    method: 'get'
  })
}

export const getMenstrualRecords = (pageParam) => {
  return axios.request({
    url: `${queenUrl}/menstrual/records`,
    headers: {
      'X-API-VERSION': 1
    },
    params: {
      number: pageParam.number,
      size: pageParam.size
    },
    method: 'get'
  })
}
