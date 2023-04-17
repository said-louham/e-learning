import axios from 'axios'
import { useEffect ,useReducer } from 'react'

const initialState = {
    data: {},
    loading: true,
    error: ''
  }
  const Reducer = (state, action) => {
    switch (action.type) {
      case 'OnSuccess':
        return {
          loading: false,
          data: action.payload,
          error: ''
        }
      case 'OnFailure':
        return {
          loading: false,
          data: {},
          error: action.payload
        }
  
      default:
        return state
    }
  }
function useFetch(url) {
    
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            dispatch({ type: 'OnSuccess', payload: res.data.data })
            
        })
        .catch((error)=>{
            dispatch({ type: 'OnFailure',payload: error})
        })
        },[url] )
        return state
}

export default useFetch