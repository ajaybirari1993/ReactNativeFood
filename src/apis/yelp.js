import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Xy9mZPNMYqz-RQRnuGaSnMUi8QyPE9wTmC_BPkIcMYDiV4vkl7ulZVR2q88tqQgeuE_2_MpDPfb7OC3AEoK19mc1zxH409MHGNIJFJ0J309kL2bcARbpTAHMibLFYHYx'
  }
})