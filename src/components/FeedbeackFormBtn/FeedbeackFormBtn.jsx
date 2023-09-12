import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const button = options.map(state => {
    return (
      <button key={state} onClick={onLeaveFeedback} name={state}>
        {state.toUpperCase()}
      </button>
    );
  });
  return <div>{button}</div>;
};

export default FeedbackOptions;
