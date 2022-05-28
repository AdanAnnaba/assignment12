import React from 'react';
import Banar from './Banar';
import CardInfo from './CardInfo';
import Exporter from './Exporter';
import Footer from './Footer';
import Prefer from './Prefer';

const Home = () => {
    return (
        <div>
           <Banar></Banar>
           <Exporter></Exporter>
           <CardInfo></CardInfo>
           <Prefer></Prefer>
           <Footer></Footer>
        </div>
    );
};

export default Home;