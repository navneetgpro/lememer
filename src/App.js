import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Memefeed from './components/Memefeed';
import Hashtag from './components/pages/Hashtag';
import Profile from './components/pages/Profile';
import Notfound from './components/layout/Notfound';
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
      <Router>
        <Header name="Navneet+Gupta" />
        <Switch>
          <Route exact path="/"
            render={props => (
              <Memefeed
                memes={memes}
                loading={loading}
              />
            )}
          />
          <Route exact path="/hashtag" component={Hashtag} />
          <Route exact path="/profile" component={Profile} />
          <Route path="*" component={Notfound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
