import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer gNdZIoGkdErQLkeO90eCmYW-aDhqvEYE84klbPV8RSigC-TD6laNBsW-l6bnYR72Umg4m4P4mWFTI9zPuto2hLNV6FHaE97h8yZPAk0EcNDj3bhV4lfi-jb4SV8JYHYx'
  }
});
