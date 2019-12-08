import axios from 'axios';

export default {
  addItemAPI(body) {
    return axios.post('https://localhost:44366/api/GroceryItems/', body)
  },
  deleteItemAPI() {
    return axios.delete('https://localhost:44366/api/GroceryItems/')
  },
  getItemsAPI() {
    return axios.get('https://localhost:44366/api/GroceryItems/')
  }
}