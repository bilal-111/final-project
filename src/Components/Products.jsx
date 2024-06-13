import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../features/userSlice';
import Card from './Card';

const Products = () => {

    const {data, loading, error} = useSelector ((state)=>state.userSlice);
    const dispatch = useDispatch();

    useEffect ( ()=>{
        dispatch (userData ());
    }, []);

  return (
    <div>
        <h1 className='text-4xl'>List of Products</h1>
      
      <Card data={data} loading={loading} error={error} />
    </div>
  )
};

export default Products
