import React, { useState } from 'react';
import { utils } from '../utils/utils';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState([1, 2, 3, 4, 5]);
  const [candidateNumbers, setCandidateNumbers] = useState([2, 3]);

  // if the sum of numbers is greater than the number of stars shown
  const candidatesAreWrong = () => {
    return utils.sum(candidateNumbers) > stars;
  };

  const getStatus = number => {
    if (!availableNumbers.includes(number)) {
      return 'used';
    }

    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong() ? 'wrong' : 'candidate';
    }

    return 'available'; // default
  };

  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          <StarsDisplay stars={stars} />
        </div>
        <div className='right'>
          {utils.range(1, 9).map(number => (
            <PlayNumber
              key={number}
              number={number}
              color={getStatus(number)}
            />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
