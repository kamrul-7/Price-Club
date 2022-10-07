import React from 'react';
import PriceOption from '../PriceOptions/PriceOption';

const Priceing = () => {
    const pricingOption = [
        {
            id: 1, name: 'free', price: 0.00, features: [
                'Good feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Uni Feature',
                'Pro Feature'
            ]

        },
        {
            id: 2, name: 'Medium', price: 23.64, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Uni Feature',
                'Pro Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 55.78, features: [
                'Ultra Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Uni Feature',
                'Pro Feature'
            ]
        },
        {
            id: 4, name: 'Extra large', price: 67.65, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Uni Feature',
                'Pro Feature'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-black text-red-700 p-12'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOption.map(option => <PriceOption key={option.id}
                        option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default Priceing;