import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';

export default () => (
  <div style={{ color: 'purple' }}>
    <Navbar />
    <Header headerText="My Home Page" />
    <p>What a fantastic design woop woop woop</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
);
