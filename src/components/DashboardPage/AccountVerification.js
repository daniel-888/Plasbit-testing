import React from 'react';
import { List, Typography } from 'antd';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

const {
  Title,
  Text
} = Typography;

export const AccountVerification = () => {
  return (
    <>
      <List bordered>
        <List.Item>
          <List.Item.Meta
            avatar={<MailOutlined className="verificationIcon"/>}
            title={<Text><T>dashboard.verification.emailHeader</T></Text>}
            description={<T>dashboard.verification.emailDescription</T>}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<PhoneOutlined className="verificationIcon"/>}
            title={<Text><T>dashboard.verification.phoneHeader</T></Text>}
            description={<T>dashboard.verification.phoneDescription</T>}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<IdcardOutlined className="verificationIcon idIcon"/>}
            title={<Text><T>dashboard.verification.identityHeader</T></Text>}
            description={<T>dashboard.verification.identityDescription</T>}
          />
        </List.Item>
      </List>
    </>
  );
};
