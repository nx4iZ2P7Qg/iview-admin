import axios from '@/libs/api.request'

let queenUrl = 'queen'

export const getGlance = () => {
  return axios.request({
    url: `${queenUrl}/menstrual/glance`,
    method: 'get'
  })
}

export const getMenstrualRecords = (pageParam) => {
  return axios.request({
    url: `${queenUrl}/menstrual/records`,
    headers: {
      pageNumber: pageParam.pageNumber,
      pageSize: pageParam.pageSize
    },
    method: 'get'
  })
}
