import React, { useEffect } from 'react';
import '../Asserts/css/Home.css';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/action';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      dispatch(setUser(item));
    }
  }, [item, dispatch]);

  return (
    <div className='home'>
      <Navbar />
      <button type='submit' className='hi' onClick={() => navigate('/shop')}>Shop Now</button>
    </div>
  );
};

export default Home;
