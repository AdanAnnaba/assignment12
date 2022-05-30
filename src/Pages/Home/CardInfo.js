import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Purchase from './Purchase';

const CardInfo = () => {
    const [products, setProducts] = useState([])
    const [single, setSingle] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:5000/product`)
        .then(res=>{
            const data = res.data;
            setProducts(data);
        })
    },[])
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 ml-12 mt-3'>
            
            {
                products.map(product=><Card key={product._id} product={product} setSingle={setSingle}></Card>)
            }
        </div>
        {
            single && <Purchase single={single}></Purchase>
        }
        </div>
    );
};

export default CardInfo;