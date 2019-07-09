import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardcomp({sportsFeed}) {
    return (
        <CardGroup>
            {sportsFeed.map((x)=>
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
    )
}


export default Cardcomp;