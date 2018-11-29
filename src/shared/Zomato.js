import axios from 'axios';
import { zomatoKey } from './config';
class Zomato {
  constructor(props) {
    const baseURL = 'https://developers.zomato.com/api/v2.1/';
    this.axios = axios.create({
      baseURL,
      headers: { 'user-key': zomatoKey }
    });
  }

  getNearbyLocations = (lat, lng) => {
    return this.axios.get(
      `/search?cuisines=1034&lat=${lat}&lon=${lng}&sort=real_distance&radius=1000&count=100`
    );
  };
}

const api = new Zomato();

export default api;
