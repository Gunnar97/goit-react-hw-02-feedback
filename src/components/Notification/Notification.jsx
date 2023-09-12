import React from 'react';
import { Message } from './NotificationStyled';

const Notification = ({ message }) => {
  return (
    <>
      <Message>{message}</Message>
    </>
  );
};

export default Notification;
