import React from 'react';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ data, totalCount, totalPositivePercentage }) => {
  const dataStat = Object.entries(data);
  const statItem = dataStat.map(state => {
    return (
      <li key={state[0]} id={state[0]}>
        <span>{state[0]}: </span>
        <span>{state[1]}</span>
      </li>
    );
  });
  return totalCount() ? (
    <>
      <ul>{statItem}</ul>
      <p>
        <span>Total: </span>
        <span>{totalCount()}</span>
      </p>
      <p>
        <span>Positive feedback: </span>
        <span>{totalPositivePercentage()}%</span>
      </p>
    </>
  ) : (
    <Notification message={'There is no feedback'} />
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  totalCount: PropTypes.func,
  totalPositivePercentage: PropTypes.func,
};

export default Statistics;
