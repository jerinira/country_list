import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = ({ isDrawerOpen }) => {
  // Define a className based on whether the drawer is open or not
  const containerClassName = isDrawerOpen ? 'home-container drawer-open' : 'home-container';

  return (
    <div >
      <h1>Home</h1>
      <p>This is the home page content.</p>
    </div>
  );
}

export default Home;
