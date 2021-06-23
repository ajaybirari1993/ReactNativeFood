import { useEffect, useState } from 'react';
import yelp from './../apis/yelp';

export default () => {
  const [result, setResult] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchResturant = async (searchTerm) => {
    console.log("API called");
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      console.log(response.data);
      setResult(response.data.businesses);
    } catch (error) {
      setErrorMsg("Something went wrong");
    }
  }

  // Call the search API only once
  useEffect(() => {
    searchResturant('pasta');
  }, [])

  return [searchResturant, result, errorMsg];
}