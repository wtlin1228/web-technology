import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataFetchApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    
    dispatch({ type: 'FETCH_INIT' });
    async function fetchData() {
      // You can await here
      try {
        const response = await axios(url);

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        }
      } catch {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    }
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
}

export default useDataFetchApi;