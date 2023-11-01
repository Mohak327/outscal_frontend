import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import LoginCard from './loginCard';
import { useAppContext } from '../../Utility/AppContext';
import { fetchUsers } from '../../api/fetchUsers';

const Login = ({ handleLogin }) => {
  const { deskTopView } = useAppContext();

  // const fetchData = () => {
  //   fetch('http://localhost:3000/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // User data
  //     })
  //     .catch(error => console.error('Error:', error));
  // }
  
  useEffect(() => {  
    fetchUsers();
  }, []);  

  const containerStyle = {
    position: 'relative',
    height: 'calc(100vh - 64px)',
    overflowY: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <div
      style={containerStyle}
    >
      <img
        src="bg1.jpeg"
        alt="Background_Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={overlayStyle}>
        <Typography variant={deskTopView ? "h2" : "h4"} sx={{ fontWeight: '600', textAlign: 'center' }}>
        Login/Register
        </Typography>
        <LoginCard handleLogin={handleLogin}/>
      </div>
    </div>
  );
};

export default Login;

