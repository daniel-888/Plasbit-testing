import React from 'react';

import './dashboard.css'
import { DashboardFirst } from './DashboardFirst';
import { DashboardSecond } from './DashboardSecond';
import { DashboardThird } from './DashboardThird'
import { DashboardFourth } from './DashboardFourth'

export const DashboardPage = (props) => {

    return (
        <div className="dashboard">
            <div className="dashboard_container">
                <DashboardFirst />
                <DashboardSecond />
                <DashboardThird />
                <DashboardFourth />
            </div>
        </div>
    );
};
