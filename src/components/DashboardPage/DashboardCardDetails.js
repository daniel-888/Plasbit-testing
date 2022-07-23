import { Col, Row, Spin, Typography } from 'antd';
import { CardFlipper } from '../cards/CardFlipper';
import React from 'react';
import i18n from 'meteor/universe:i18n';
import { useTracker } from 'meteor/react-meteor-data';
import { UserCards, UserCardStatuses } from '../../../api/userCards/userCards';
import { Cards } from '../../../api/cards/cards';

const T = i18n.createComponent();
const { Title } = Typography;

export const DashboardCardDetails = () => {
  const {
    userCard,
    card,
    isReady
  } = useTracker(() => {
    let subscriptions = [
      Meteor.subscribe('cards'),
      Meteor.subscribe('userCards.find.all')
    ];

    let userCards = UserCards.find({ status: UserCardStatuses.ACTIVE })
      .fetch();
    let userCard = Array.isArray(userCards) && userCards.length > 0 && userCards[0];

    return {
      userCard: userCard,
      card: Cards.findOne(userCard?.cardId),
      isReady: subscriptions.filter(s => !s.ready()).length === 0
    };
  }, []);

  const getFeeRow = (label, value, isLast) => {
    return (
      <div style={isLast ? {} : {
        borderBottom: '1px #eeeeee solid',
        marginBottom: '0.8em'
      }}>
        <span>{label}</span>
        <span style={{ float: 'right' }}>{value}</span>
      </div>
    );
  };

  const getFeesInfo = () => {
    return (<>
      {getFeeRow('Card creation fee', `${card?.price || ''}$`)}
      {getFeeRow('Card loading fee', `${card?.loadFee || ''}$`)}
      {getFeeRow('Validity period ', `3 years`)}
      {getFeeRow('Maintenance per month ', `${card?.monthlyFee || ''}$`)}
      {getFeeRow('Purchases in card currency (POS)', `No commission`, true)}
    </>);
  };
  if (!isReady) {
    return (
      <Spin />
    )
  }

  if (!(userCard && card)) {
    return (
      <span>No card owned.</span>
    )
  }

  return (
    <Row justify="center" align="center" gutter={[8, 16]}>
      <Col>
        <CardFlipper cardNumber={userCard?.cardDetails?.cardNumber}
                     expDate={userCard?.cardDetails?.expDate}
                     cvv={userCard?.cardDetails?.cvv}/>
      </Col>
      <Col>
        <Title level={4} className="dashboardComponentHeader">
          <T>dashboard.headers.cardDetails</T>
        </Title>
        {getFeesInfo()}
      </Col>
    </Row>
  );
};
