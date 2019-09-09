import axios from '@/libs/api.request'

export const get = () => {
  return axios.request({
    'url': '/test'
  }).then(
    (res) => console.log(res),
    () => console.log('e')
  )
}
