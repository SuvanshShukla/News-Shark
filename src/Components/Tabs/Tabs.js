import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Listcomp from '../List/List.js';
import Dropcomp from '../Dropdown/Dropdown';

const { TabPane } = Tabs;    

function Tabcomp({countryNews,getCountryNews, saveArticle}) {

  const operations = <Dropcomp gCN={getCountryNews}>Hover Over ME!!</Dropcomp>;

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

