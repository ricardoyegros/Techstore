import React from 'react';
import EmptyStar from '../../assets/Empty-star.svg';
import FullStar from '../..//assets/Full-star.svg';
import HalfStar from '../../assets/Half-star.svg';

export const StarRating = ({ n }) => {

    const toRender = n => {
        let isFloat = n + '';
        let quantity = Math.floor(n);
        let r = [];
        for (let i = 0; i < 5; i++) {
            if (quantity - i > 0) r.push(<img key={i} src={FullStar} alt='' className='w-10' />);
            if (quantity - i <= 0) r.push(<img key={i} src={EmptyStar} alt='' className='w-10' />);
        }
        if (isFloat.length > 1) {
            r[quantity] = <img src={HalfStar} className='w-10' />
        }

        return r;
    }

    return (
        <div className='flex relative'>
            {n && toRender(n)}
        </div>
    )
}
