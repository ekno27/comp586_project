import axios from 'axios';

export default {
  addItemAPI(body) {
    return axios.post('https://xpireserver20191207050549.azurewebsites.net/api/GroceryItems/', body)
  },
  deleteItemAPI() {
    return axios.delete('https://xpireserver20191207050549.azurewebsites.net/api/GroceryItems/')
  },
  getItemsAPI() {
    return axios.get('https://xpireserver20191207050549.azurewebsites.net/api/GroceryItems/')
  }
}