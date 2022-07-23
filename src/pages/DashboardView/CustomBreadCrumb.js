import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Typography} from 'antd';
//import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import i18n from 'meteor/universe:i18n';
import { isMobile } from '../../api/helpers';

const {Header, Sider, Content, Footer} = Layout;
const {Text, Title} = Typography;

const T = i18n.createComponent();
//i18n.setLocale('en');


export const CustomBreadCrumb = ({pathname, id}) => {
    const [crumbs, setCrumbs] = useState([]);

    useEffect(() => {
        let pathArray = pathname.split("/");
        if (!pathArray[0]) {
            pathArray.splice(0, 1);
        }
        setCrumbs(pathArray);
    }, [pathname]);


    const getBreadCrumbLink = (index) => {
        let url = "";
        for (let i = 0; i <= index && i < crumbs.length; i++) {
            url += "/" + crumbs[i];
        }
        return url;
    }

    return (
        <Breadcrumb style={isMobile() ? {margin: '2em 0 0 5em'} : {margin: '2em 0'}}>
            {crumbs && crumbs.length > 0 &&
            crumbs.map((val, index) => {
                const last = index === crumbs.length - 1;
                return <Breadcrumb.Item key={index}>
                    <Link to={() => getBreadCrumbLink(index)}
                          style={{textTransform: "capitalize", cursor: last ? "initial" : "pointer"}}>
                        {val === ":id" ? id : val.replace("-", " ")}
                    </Link>
                </Breadcrumb.Item>;
            })}
        </Breadcrumb>
    );
};
// ReactDOM.render(<Dashboard />, mountNode);
