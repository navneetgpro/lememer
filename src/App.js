import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Content from './components/Content';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    getmemes();
    // eslint-disable-next-line
  }, []);
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  // Get All memes
  const getmemes = async () => {
    setLoading(true);
    const res = await axios.get(`https://aws-s3-uploadfile.herokuapp.com/getAllMeme`);
    setMemes(res.data.allmeme);
    setLoading(false);
  };
  return (
    <div className="app-container">
      <Header name="Navneet+Gupta" />
      <Content memes={memes} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
