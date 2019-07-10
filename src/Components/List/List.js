import React from 'react';
import { List, Avatar, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

function Listcomp({arr, saveArticle}){

const listData = arr;   
    

      
      const IconText = ({ type, text }) => (
        <span>
          <Icon type={type} style={{ marginRight: 8 }} />
          {text}
        </span>
      );
      
      return(
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          
          renderItem={(item,i) => (
            <List.Item
              key={i}
              actions={[
                <IconText type="star-o" text="156" />,
                <IconText type="like-o" text="156" />,
                <IconText type="message" text="2" />,
                <Button onClick={()=>{saveArticle(item)}}>Save This Article</Button>
              ]}
              extra={
                <a target="_blank" rel="noopener noreferrer" href={item.url}>
                <img
                  width={272}
                  alt="logo"
                  src={item.urlToImage}
                />
                </a>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a target="_blank" rel="noopener noreferrer" href={item.url}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      )
}

export default Listcomp;