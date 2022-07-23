import React, { useState } from 'react';
import { Alert, Form, Space, Statistic } from 'antd';

const { Countdown } = Statistic;

export const DepositWaitView = (props) => {
  const deadline = Date.now() + 1000 * 3; // Moment is also OK
  const [errorMessage, setErrorMessage] = useState();

  const onFinish = () => {
    setErrorMessage("asdhjasg dajshgd ajhsgd jahsgdja sdjhgas d");
  };

  return (
    <>
      {errorMessage && <Alert
        message="Error"
        showIcon
        description={errorMessage}
        type="error"
        closable
      />}
      <Space>
        <Form>
          dsfgsdfg
        </Form>
        <Countdown value={deadline} format="mm:ss" onFinish={onFinish}></Countdown>
      </Space>
    </>
  );
};
