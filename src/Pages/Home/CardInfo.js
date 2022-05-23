import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Modal from './Modal';

const CardInfo = () => {
    const [products, setProducts] = useState([])
    const [id_data, setIddata] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:5000/product`)
        .then(res=>{
            const data = res.data;
            setProducts(data);
        })
    },[])
    return (
        <div>
            <p>data: {products.length}</p>
        <div className='grid grid-cols-3 gap-2 ml-12 mt-3'>
            
            {
                products.map(product=><Card key={product._id} product={product} setIddata={setIddata}></Card>)
            }
        </div>
        {
            id_data && <Modal id_data={id_data}></Modal>
        }
        </div>
    );
};

export default CardInfo;