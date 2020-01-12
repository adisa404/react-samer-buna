import React, { useState } from 'react';
import { utils } from '../utils/utils';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);

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

  const onNumberClick = (number, currentStatus) => {
    //currentStatus => newStatus
    if (currentStatus === 'used') return;

    // const newCandidateNumbers =
    //   currentStatus === 'available'
    //     ? candidateNumbers.concat(number)
    //     : candidateNumbers.filter(cn => cn !== number);

    const newCandidateNumbers = candidateNumbers.concat(number);

    if (utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      // case: right pick
      // remove the newCandidate number from the set of available numbers
      const newAvailableNumbers = availableNumbers.filter(
        n => !newCandidateNumbers.includes(n),
      );

      //reset stars randomly
      setStars(utils.randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      setCandidateNumbers([]);
    }
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
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
