import React from 'react';
// import ReactDOM from 'react-dom'
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Listcomp from '../List/List.js';
import Dropcomp from '../Dropdown/Dropdown';

const { TabPane } = Tabs;

    const operations = <Dropcomp>Hover Over ME!!</Dropcomp>;
    

function Tabcomp({countryNews,getCountryNews, saveArticle}) {
  return(
    <Tabs tabBarExtraContent={operations} onChange={getCountryNews}>
      <TabPane tab="US" key="us">
        <Listcomp arr={countryNews} saveArticle={saveArticle} ></Listcomp>
    </TabPane>

      <TabPane tab="India" key="in">
      <Listcomp arr={countryNews} saveArticle={saveArticle}></Listcomp>
    </TabPane>

      <TabPane tab="China" key="cn">
      <Listcomp arr={countryNews} saveArticle={saveArticle}></Listcomp>
    </TabPane>
    </Tabs>

  );

}

export default Tabcomp;

