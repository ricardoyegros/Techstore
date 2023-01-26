import React from 'react';
import EmptyStar from '../../assets/Empty-star.svg';
import FullStar from '../..//assets/Full-star.svg';
import HalfStar from '../../assets/Half-star.svg';

export const StarRating = ({ numberOfStars, sizeStar }) => {

    const toRender = numberOfStars => {
        let isFloat = numberOfStars + '';
        let quantity = Math.floor(numberOfStars);
        let finalStars = [];
        for (let i = 0; i < 5; i++) {
            if (quantity - i > 0) finalStars.push(<img key={i} src={FullStar} alt='' className={`w-${sizeStar}`} />);
            if (quantity - i <= 0) finalStars.push(<img key={i} src={EmptyStar} alt='' className={`w-${sizeStar}`} />);
        }
        if (isFloat.length > 1) {
            finalStars[quantity] = <img src={HalfStar} alt='' className={`w-${sizeStar}`} />
        }

        return finalStars;
    }

    return (
        <div className='flex relative'>
            {numberOfStars && toRender(numberOfStars)}
        </div>
    )
}
