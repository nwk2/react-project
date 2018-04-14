import React, {Component} from 'react';
import {TabView, TabPanel} from 'primereact/components/tabview/TabView';
import FilterTable from './FilterTable';
import '../css/main.css';
import Logo from '../images/Logo.svg';
import Metrics from "./Metrics";
import AlertDisclaimer from "./AlertDisclaimer";

class TabMenu extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {

        return (
            <div className="all">
                <div className="content-section">
                    <AlertDisclaimer/>
                    <div className="feature-intro">
                        <img src={Logo} width="auto" height="50px" alt="logo"/>
                        <h1 className="springboot-app">Spring Boot Applications</h1>

                    </div>
                </div>
                <div className="content-section-implementation">
                    <TabView>
                        <TabPanel header="Dummy Data">
                            <FilterTable/>
                        </TabPanel>

                        <TabPanel header="Actuator">
                            <Metrics/>
                        </TabPanel>
                    </TabView>
                </div>
            </div>

        );
    }
}

export default TabMenu;