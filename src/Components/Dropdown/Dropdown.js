import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

  function Dropcomp({gCN}) {

    const menu = (
      <Menu>
        <Menu.Item onClick={()=>{gCN('au')}}>
            Austrailia
        </Menu.Item>
        <Menu.Item onClick={()=>{gCN('jp')}}>
            Japan
        </Menu.Item>
        <Menu.Item onClick={()=>{gCN('no')}}>
            Noway
        </Menu.Item>
        <Menu.Item onClick={()=>{gCN('kr')}}>
            South Korea
        </Menu.Item>
        <Menu.Item onClick={()=>{gCN('se')}}>
            Sweden
        </Menu.Item>
        <Menu.Item onClick={()=>{gCN('tw')}}>
            Taiwan
        </Menu.Item>
        <Menu.Item onClick={()=>{gCN('')}}>
            United Kingdom
        </Menu.Item>
      </Menu>
    );

      return(
        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          More Countries <Icon type="down" />
        </a>
      </Dropdown>
      )
  }

  export default Dropcomp;