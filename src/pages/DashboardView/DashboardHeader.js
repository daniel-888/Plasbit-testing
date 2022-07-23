import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Button, Col, Image, Layout, Popover, Row, Space, Typography, Input } from 'antd';
// import { Definition } from '../../api/definition/definition';
// import { useTracker } from 'meteor/react-meteor-data';
// import { CoinTypes } from '../../api/btc/btcMethods';
// import { Meteor } from 'meteor/meteor';
import { getImg, getUserFullName, imageEmpty, useResize } from '../../hook/useCustomHook';
import BellOutlined from '@ant-design/icons/BellOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import { UserCards, UserCardStatuses } from '../../api/userCards/userCards';
// import { getRemoteDataSet, GlobalActions } from '../redux/actions';
// import { useDispatch } from 'react-redux';

const { Header, Sider, Content } = Layout;
const { Text, Title } = Typography;

export const DashboardHeader = (props) => {
  // const [version, setVersion] = useState();
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const userFullName = "Darkhorse";
  const name = props.admin ? 'Admin' : userFullName;
  const { isMobile } = useResize();
  // useEffect(() => {
  //   Meteor.call('version', (err, res) => {
  //     if (!err && res) {
  //       setVersion(res);
  //     }
  //   });
  // }, []);

  // Get data set data
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getRemoteDataSet()
  //     .then(dataSet => {
  //       dispatch(GlobalActions.setDataSet(dataSet));
  //     });
  //   const interval = setInterval(() => {
  //     getRemoteDataSet()
  //       .then(dataSet => {
  //         dispatch(GlobalActions.setDataSet(dataSet));
  //       });
  //   }, 60000);
  //   return () => clearInterval(interval);
  //   // dispatch(GlobalActions.getDataSet());
  // }, []);

  // const { definition, user, notificationsNumber } = useTracker(() => {
  //   Meteor.subscribe('definition');
  //   Meteor.subscribe('userCards.all');
  //   // Meteor.subscribe('version');
  //   return {
  //     definition: Definition.findOne({ name: CoinTypes.BTC }),
  //     notificationsNumber: UserCards.find({$or:[{hasPendingWithdrawals:true}, {status:UserCardStatuses.IN_PROGRESS}] }, {}).fetch()?.length || 0,
  //     user: Meteor.user()
  //   };
  // }, []);

  const getProfile = () => {
    return <Space direction="vertical" className="profile_modal">
      <Link to={(props.admin ? '/admin' : '/home') + '/user-profile'} onClick={() => setIsProfileOpened(false)}>User
        Profile</Link>
      <Link to={(props.admin ? '/admin' : '/home') + '/change-password'} onClick={() => setIsProfileOpened(false)}>Change
        Password</Link>
      <Link to={(props.admin ? '/admin' : '/home') + '/support'} onClick={() => setIsProfileOpened(false)}>Help &amp; Support</Link>

      <Button>Logout</Button>
      <div className="version">Version: 0.0.8</div>
    </Space>;
  };

  return (
    <header className="dashboard_header">
      {isMobile && <div className="toggle" onClick={() => props.setDrawerVisible(true)}
      >
        {props.drawerVisible && <span className="nav_toggle" ></span>}
        {!props.drawerVisible && <span className="nav_toggle" >
          <span className="nav_toggle-item"></span>
        </span>}
      </div>}
      <Link to="/" className="logo">
        <img src={getImg('navbar/logo.svg')} alt="logo" />
      </Link>
      <div className="right_side">
        {!isMobile && <div className="search">
          <Input
            placeholder="Search cryptocurrency, news, etc..."
            suffix={
              <SearchOutlined />
            }
          />
        </div>}
        {isMobile && <div className="search"><SearchOutlined style={{ fontSize: 24, color: 'var(--darkBlue)' }} /></div>}
        {!isMobile && <div className="lang" >
          <img src={getImg('navbar/lang.svg')} alt="" />
        </div>}
        <div className="notify">
          <Badge dot={true}>
            <BellOutlined style={{ fontSize: 24, color: 'var(--darkBlue)' }} />
          </Badge>
        </div>
        <div className="profile-panel">
          <Popover visible={isProfileOpened} placement="bottom" title={name} onVisibleChange={(visible) => {
            setIsProfileOpened(visible);
          }}
            content={getProfile} trigger="click">
            <div className="profile-trigger">
              <Avatar src={getImg('upload/avatar/default.png')} style={{ width: 35 }} />
              {!isMobile && <><span className="text"> {name}</span>
                <DownOutlined style={!isProfileOpened ? { marginLeft: '0.4em' } : {
                  marginLeft: '0.4em',
                  visibility: 'hidden'
                }} /></>}
            </div>
          </Popover>
        </div>
      </div>
    </header>
  );
};