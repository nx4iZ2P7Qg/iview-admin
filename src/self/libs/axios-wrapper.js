import axios from '@/libs/api.request'

export const get = () => {
  // return axios.request({
  //   'url': 'http://127.0.0.1:9000/test'
  // }).then(function (response) {
  //   console.log(response)
  // }).catch(function (error) {
  //   console.log(error)
  // })

  return axios.request({
    'baseURL': 'http://httpbin.org',
    'url': '/get'
  }).then(
    () => console.log('s'),
    () => console.log('e')
  )
}
