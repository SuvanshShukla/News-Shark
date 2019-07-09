import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

function Cardcomp({tagNews, pageChanged}) {
  let pageSize = 5;
  console.log(tagNews.articles,tagNews.page);
  console.log(pageChanged);
  
  
    return (
      <div>
        <CardGroup>
            {tagNews.articles.slice((tagNews.page-1)*pageSize,tagNews.page*pageSize).map((x)=>
                <Card>
                <a href={x.url}><Card.Img variant="top" src={x.urlToImage} /></a>
                <Card.Body>
                  <Card.Title>{x.title}</Card.Title>
                  <Card.Text>
                    {x.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            )}
        </CardGroup>        
        <Pagination pageSize="5" defaultCurrent={1} total={tagNews.articles.length} onChange={(p)=>{pageChanged(p)}}/>
      </div>
    )
}


export default Cardcomp;