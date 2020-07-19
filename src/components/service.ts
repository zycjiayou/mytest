import axios from 'axios';

export function getData() {
  // const res = await axios.get('http://localhost:3010/testAjax');
  return axios.get('http://localhost:3010/testAjax');
}
