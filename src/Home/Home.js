import React from 'react';
import { Route } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import Body from "../Body/Body";
// import Button from "../Button/Button";

function Home() {
  return (
    
    <div className="Home">
      <Route>
        <Header />
        <Body />
        <Footer />
        </Route>
    </div>

  );
}

export default Home;
