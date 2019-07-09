import React from 'react';
// import ReactDOM from 'react-dom'
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
import Listcomp from '../List/List.js';

const { TabPane } = Tabs;

const operations = <Button>Extra Action</Button>;

function Tabcomp({countryNews,getCountryNews}) {
  return(
    <Tabs tabBarExtraContent={operations} onChange={getCountryNews}>
      <TabPane tab="US" key="us">
        <Listcomp arr={countryNews}></Listcomp>
    </TabPane>

      <TabPane tab="India" key="in">
      <Listcomp arr={countryNews}></Listcomp>
    </TabPane>

      <TabPane tab="China" key="cn">
      <Listcomp arr={countryNews}></Listcomp>
    </TabPane>
    </Tabs>

  );

}

export default Tabcomp;

