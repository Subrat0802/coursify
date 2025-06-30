import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserThunk } from '../services/operations/authApi';

const CallGetUserFunction = () => {
    const dispatch = useDispatch();
    dispatch(getUserThunk());
    
  return null
}

export default CallGetUserFunction