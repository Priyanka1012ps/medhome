import React from "react";
import "./Post.css";
import { Container, Row, Col } from "reactstrap";

function Post({ username, caption, imageUrl, postId, desc, name, timestamp }) {
  return (
    <div className='game '>
      <Container fluid>
        <Row>
          <Col md={2} sm={4} xs={4}>
            <img src={imageUrl} className='sideImg' />
            {caption}
          </Col>
          <Col md={8} sm={12}>
            <h3>{name}</h3>

            <div className='info desc'>
              <Row>
                <Col md={3} className='text-white'>
                  Details
                </Col>
                <Col>
                  <p className='desc'>{desc}</p>
                </Col>
              </Row>
              <Row>
                <Col md={3} className='text-white'>
                  Category
                </Col>
                <Col>Action</Col>
              </Row>
              <Row>
                <Col md={3} className='text-white'>
                  Name
                </Col>
                <Col>Battlefield 4</Col>
              </Row>
              <Row>
                <Col md={3} className='text-white'>
                  Developed By
                </Col>
                <Col>{username}</Col>
              </Row>
              <Row>
                <Col md={3} className='text-white'>
                  Created On
                </Col>
                <Col>{timestamp}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
