import axios from 'axios';

export default {
  addItemAPI() {
    return axios.get("http://www.mocky.io/v2/5da379082f000050008a07a4")
  },
  deleteItemAPI() {
    return axios.delete('"http://www.mocky.io/v2/5da379082f000050008a07a4')
  }
}