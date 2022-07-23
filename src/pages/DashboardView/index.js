import React, { useEffect, useState } from 'react';
import { Button, Drawer, Layout, Menu, Typography } from 'antd';
//import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
// import i18n from 'meteor/universe:i18n';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import { DashboardHeader } from './DashboardHeader';
// import { useDispatch } from 'react-redux';
// import { setBreadCrumb } from '../redux/actions';
// import { getUserFullName, isAdmin, useResize, isVerified } from '../../hook/useCustomHook';
import { useResize, getImg } from '../../hook/useCustomHook';
// import { CustomBreadCrumb } from './CustomBreadCrumb';

import './DashboardView.css'

const { Header, Sider, Content, Footer } = Layout;
const { Text, Title } = Typography;

// const T = i18n.createComponent();
//i18n.setLocale('en');

export const DashboardView = (props) => {
    const { isMobile } = useResize()
    // const [collapsed, setCollapsed] = useState(isMobile);
    const [drawerVisible, setDrawerVisible] = useState();
    const [selectedKeys, setSelectedKeys] = useState([props.location.pathname]);
    // const user = Meteor.user();
    // const verified = isVerified(user);
    const userFullName = 'Admin';
    // const dispatch = useDispatch();

    useEffect(() => {
        let pathArray = props.location.pathname.split('/');
        let resultKey = `/${pathArray[1]}/${pathArray[2]}`;
        setSelectedKeys([resultKey]);
    }, [props.location.pathname]);

    const menu = () => {
        return <Menu
            className="menu_container"
            mode="inline"
            style={{ width: '250px' }}
            selectedKeys={selectedKeys}
            onSelect={(item, key, keyPath, selectedKeys, domEvent) => {
                // dispatch(setBreadCrumb([{ name: item?.item?.node?.innerText || '' }]));
                setDrawerVisible(false);
            }}
            style={{
                width: '100%',
                borderRight: 0,
            }}
        >
            <Menu.Item key="/home/dashboard">
                <img src={getImg('navbar/dashboard.png')} />
                <span>Dashboard</span>
                <Link to="/home/dashboard" />
            </Menu.Item>

            <Menu.Item key="/home/wallet">
                <img src={getImg('navbar/wallet.png')} />
                <span>Wallet</span>
                <Link to="/home/wallet" />
            </Menu.Item>

            <Menu.Item key="/home/cards">
                <img src={getImg('navbar/cards.png')} />
                <span>Cards</span>
                <Link to="/home/cards" />
            </Menu.Item>

            <Menu.Item key="/home/wires">
                <img src={getImg('navbar/wires.png')} />
                <span>Wires</span>
                <Link to="/home/wires" />
            </Menu.Item>

            <Menu.Item key="/home/deposit">
                <img src={getImg('navbar/deposit.png')} />
                <span>Deposit</span>
                <Link to="/home/deposit" />
            </Menu.Item>

            <Menu.Item key="/home/transactions">
                <img src={getImg('navbar/transactions.png')} />
                <span>Transactions</span>
                <Link to="/home/transactions" />
            </Menu.Item>

            <Menu.Item key="/home/security">
                <img src={getImg('navbar/security.png')} />
                <span>Security</span>
                <Link to="/home/security" />
            </Menu.Item>

            <Menu.Item key="/home/verifications">
                <img src={getImg('navbar/verifications.png')} />
                <span>Verifications</span>
                <Link to="/home/verifications" />
            </Menu.Item>

            <Menu.Item key="/home/divider">
                <div className="dashboard_divider">
                    OTHERS
                </div>
            </Menu.Item>

            <Menu.Item key="/home/news">
                <img src={getImg('navbar/news.png')} />
                <span>News</span>
                <Link to="/home/news" />
            </Menu.Item>

            <Menu.Item key="/home/community">
                <img src={getImg('navbar/community.png')} />
                <span>Community</span>
                <Link to="/home/community" />
            </Menu.Item>

            <Menu.Item key="/home/help">
                <img src={getImg('navbar/help.png')} />
                <span>Help</span>
                <Link to="/home/help" />
            </Menu.Item>

            <Menu.Item key="/home/settings">
                <img src={getImg('navbar/settings.png')} />
                <span>Settings</span>
                <Link to="/home/settings" />
            </Menu.Item>

            <Menu.Item key="/home/logout" className="logout">
                <img src={getImg('navbar/logout.png')} />
                <span>Logout</span>
                <Link to="/home/dashboard" />
            </Menu.Item>
        </Menu>;
    };

    return (
        <Layout style={{ minHeight: '100vh' }} className="dashboard_view">
            <Header className="header_container">
                <DashboardHeader admin={false} drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
            </Header>
            <Layout>
                {isMobile && <Drawer
                    className="dashboard_sidebar"
                    placement="left"
                    closable={true}
                    onClose={() => setDrawerVisible(false)}
                    visible={drawerVisible}
                    key="left"
                    style={{ marginTop: '60px' }}
                >{menu()}</Drawer>}
                {!isMobile && <Sider width={200} collapsed={false}>{menu()}</Sider>}

                <Content className="whiteBackground">
                    {/* <CustomBreadCrumb pathname={props.location.pathname} id={props.match?.params?.id} /> */}
                    <div
                        className="site-layout-background"
                        style={!isMobile ? {
                            paddingTop: 24,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingBottom: 50,
                            margin: 0,
                            minHeight: "calc(100% - 56px)",
                        } : {
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 24,
                            paddingBottom: 50,
                            margin: 0,
                            minHeight: "calc(100% - 56px)",
                        }}
                    >
                        <props.component {...props} />
                    </div>
                    <Footer className="dashboard_footer" >
                        <div className="text">
                            Copyright @ Designed & Developed by PlasBit 2021
                        </div>
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
};
// ReactDOM.render(<Dashboard />, mountNode);
