import React from 'react';
import { ChoosBtn, TextBtn } from './FeedbeackFormBtnStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const button = options.map(state => {
    return (
      <ChoosBtn
        type="button"
        key={state}
        onClick={onLeaveFeedback}
        name={state}
      >
        <TextBtn name={state} onClick={onLeaveFeedback}>
          {state.toUpperCase()}
        </TextBtn>
      </ChoosBtn>
    );
  });
  return <div>{button}</div>;
};

export default FeedbackOptions;
