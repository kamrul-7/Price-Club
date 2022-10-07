import React from 'react';
import Features from '../Features/Features';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-pink-200 m-4 rounded-md p-6'>
            <div>
                <p><span className='text-4xl font-bold'>{option.price} </span> <span className='text-2xl'>/mon</span></p>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
            <button className='bg-blue-300 w-full p-2 m-2 font-bold rounded'>buy Now</button>
        </div>
    );
};

export default PriceOption;