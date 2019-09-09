import axios from '@/libs/api.request'

export const get = () => {
  return axios.request({
    'url': 'http://127.0.0.1:9000/test'
  }).then(
    (res) => console.log(res),
    () => console.log('e')
  )
}
