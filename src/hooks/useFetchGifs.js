import { getGifs } from '../helpers/getGifs';
import { useState, useEffect } from 'react';




const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( 
    () => {
      getGifs(category)
      .then(imgs => {
          setState({
            data: imgs,
            loading: false
          })    
      })
    }, [] 
  );

  return state;
}


export default useFetchGifs;