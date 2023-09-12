import React from 'react';
import { ChoosBtn, TextBtn } from './FeedbeackFormBtnStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const button = options.map(state => {
    return (
      <ChoosBtn key={state} onClick={onLeaveFeedback} name={state}>
        <TextBtn name={state}>{state.toUpperCase()}</TextBtn>
      </ChoosBtn>
    );
  });
  return <div>{button}</div>;
};

export default FeedbackOptions;
