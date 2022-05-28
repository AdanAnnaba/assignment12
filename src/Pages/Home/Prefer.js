import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTruck } from '@fortawesome/free-solid-svg-icons';
import {  faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import {  faSackDollar } from '@fortawesome/free-solid-svg-icons';
import {  faBox } from '@fortawesome/free-solid-svg-icons';

const Prefer = () => {
    return (
        <div>
            <div className='flex justify-center'>
            <h2 className='text-4xl space-x-1 uppercase font-bold mx-4'>Why Prefer</h2>
            <h1 className='text-4xl mt-20 uppercase font-bold text-orange-400 mb-8 mt-0'><span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block mr-2">
            <span class="relative text-white">Annaba</span>
            </span>Hand Tools</h1> <h2 className='text-4xl uppercase font-bold mx-4'>Manufacturer Bangladesh </h2>
            </div>
           <div className='flex justify-evenly'>
           <div>
            <p className='text-6xl my-4'><FontAwesomeIcon icon={faTruck} /></p> <p className='justify-center'>Competitive pricing timming deliveries</p>
            </div>
            <div>
            <p className='text-6xl my-4'><FontAwesomeIcon icon={faScrewdriverWrench} /></p> <p className='justify-center'>Components and products made to customer specification</p>
            </div>
            <div>
            <p className='text-6xl my-4'><FontAwesomeIcon icon={faSackDollar} /></p> <p className='justify-center'>Transparancy in all dealings</p>
            </div>
            <div>
            <p className='text-6xl my-4'><FontAwesomeIcon icon={faBox} /></p> <p className='justify-center'>Packaging that confirms to international standars</p>
            </div>
           </div>
        </div>
    );
};

export default Prefer;