import React from 'react';
import EmptyStar from '../../assets/Empty-star.svg';
import FullStar from '../..//assets/Full-star.svg';

export const StarRating = ({ n }) => {

    const toRender = n => {
        let r = [];
        for (let i = n; i < n; i++) {
            r.push(<img src={FullStar} alt='' />)
        }
        if (r.length < 5) {
            for (let i = 5; i != r.length; i--) {
                r.push(<img src={EmptyStar} alt='' />)
            }
        }
    }

    return (
        <div className='flex justify-center items-center w-full'>
            {n && toRender(n)}
        </div>
    )
}
