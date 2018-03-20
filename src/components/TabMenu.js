import React, {Component} from 'react';
//import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import {TabView, TabPanel} from 'primereact/components/tabview/TabView';
import FilterTable from './FilterTable';
import '../css/header.css';
import {Row, Col, Nav, NavItem, Tabs, Tab} from 'react-bootstrap';



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

            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Spring Boot Applications</h1>
                    </div>
                </div>
                <div className="content-section implementation">
                    <TabView>
                        <TabPanel header="Applications">
                            <FilterTable/>
                        </TabPanel>

                        <TabPanel header="Second Tab">
                            <h4>Second Tab</h4>
                            <p>Some data</p>
                        </TabPanel>
                    </TabView>
                </div>


            </div>
        );
    }
}

export default TabMenu;