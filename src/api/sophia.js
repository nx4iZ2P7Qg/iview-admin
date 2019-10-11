import axios from '@/libs/api.request'

let baseUrl = 'sophia'

export const glance = () => {
  return axios.request({
    url: `${baseUrl}/menstrual/glance`,
    method: 'get'
  })
}
