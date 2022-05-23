import React from 'react';
import Banar from './Banar';
import CardInfo from './CardInfo';
import Exporter from './Exporter';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
           <Banar></Banar>
           <Exporter></Exporter>
           <CardInfo></CardInfo>
           <Footer></Footer>
        </div>
    );
};

export default Home;