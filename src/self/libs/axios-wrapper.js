// import axios from "@/libs/api.request"
import axios from 'axios'

export const get = () => {
  return axios.get('http://127.0.0.1:9000/test')
    .then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
}
