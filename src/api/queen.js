import axios from '@/libs/api.request'

let queenUrl = 'queen'

export const getGlance = () => {
  return axios.request({
    url: `${queenUrl}/menstrual/v1/glance`,
    method: 'get'
  })
}

export const getMenstrualRecords = (pageParam) => {
  return axios.request({
    url: `${queenUrl}/menstrual/v1/records`,
    params: {
      number: pageParam.number,
      size: pageParam.size
    },
    method: 'get'
  })
}
