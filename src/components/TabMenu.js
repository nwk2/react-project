import React, {Component} from 'react';
//import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import {TabView, TabPanel} from 'primereact/components/tabview/TabView';
import FilterTable from './FilterTable';
import '../css/header.css';
import Logo from '../images/Logo.svg';
import Metrics from "./Metrics";


class TabMenu extends Component {

    /*constructor() {
        super();
        this.state = {};
    }*/

    shouldComponentUpdate() {
        return false;
    }

    render() {

        return (
            <div className="all">
                <div className="content-section">
                    <div className="feature-intro">
                        <img src={Logo} width="auto" height="50px"alt="logo"/><h1 className="springboot-app">Spring Boot Applications</h1>
                    </div>
                </div>
                <div className="content-section-implementation">
                    <TabView>
                        <TabPanel header="Dummy Data">
                            <FilterTable/>
                        </TabPanel>

                        <TabPanel header="Backend Metrics">
                            <Metrics/>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        );
    }
}

export default TabMenu;