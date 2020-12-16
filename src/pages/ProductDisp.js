import React from "react";
import Header from "../components/Header";
import { database } from "firebase";
import data from "../data";
import "./Pro.css";
import { Container, Row, Col } from "reactstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";

import { FaUnity } from "react-icons/fa";

function ProductDisp({ match }) {
  let history = useHistory();
  let w;
  console.log(match.params.id);
  console.log(data.length);
  if (match.params.id > "" + data.length) {
    console.log("executed");
    history.push("/nf");
  }

  for (let x = 0; x <= data.length - 1; x++) {
    if (match.params.id === "" + data[x].id) {
      w = x;
    }
  }
  console.log(data[w]);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () =>
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: data[w].id,
        image: data[w].image,
        price: data[w].price,
        name: data[w].name,
        subtitle: data[w].subtitle,
      },
    });

  return (
    <div style={{ background: "#13181f" }}>
      <Header />
      {console.log(basket)}
      <div
        className='banner'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${data[w].img1})`,
          backgroundPosition: "center center",
        }}
      >
        <div style={{ height: "400px" }}>s</div>
      </div>

      <Container fluid className='my-3'>
        <Row>
          <Col sm={12} md={6} lg={2}>
            <img src={data[w].img2} className='logoImg ' />
          </Col>
          <Col sm={12} md={6} lg={6} className='mx-5 gameDet'>
            <h1>{data[w].name}</h1>
            <p>{data[w].description}</p>
            <FaXbox size='2em' className='mx-3' />
            <FaPlaystation size='2em' className='mx-3' />
            <FaUnity size='2em' className='mx-3' />
          </Col>
          <Col lg={3}>
            <Card className='text-center my-3 cd'>
              <CardContent className='buttonCardss'>
                $ {data[w].price}
                <br />
                <Button
                  className='my-4'
                  color='primary'
                  variant='contained'
                  onClick={addToBasket}
                >
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </Col>
        </Row>

      </Container>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <img src={data[w].img1} style={{ width: "650px" }} />
          </Col>
          <Col>
            <Row>
              <Col lg={6}>
                <img src={data[w].img3} style={{ width: "320px" }} alt='3' />
              </Col>
              <Col lg={6}>
                <img src={data[w].img4} style={{ width: "320px" }} alt='4' />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <img src={data[w].img5} style={{ width: "320px" }} alt='5' />
              </Col>
              <Col lg={6}>
                <img src={data[w].img6} style={{ width: "320px" }} alt='6' />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={9}>
            <h1>MEDICINE INFORMATION</h1>
            <p className='gameDet'>{data[w].info}</p>
          </Col>
          <Col className='mt-5' style={{ fontSize: "15px" }}>

          </Col>
        </Row>
        <Row>
          <Col>
            <h1>REQUIREMENTS</h1>
            <ul>
              <li>The usual dose for adults is one or two 500mg tablets up to 4 times in 24 hours.</li>
<li>Always leave at least 4 hours between doses.</li>
            <li>  Overdosing on paracetamol can cause serious side effects.</li>
            <li> Do not be tempted to increase the dose or to take a double dose if your pain is very bad.</li>
            </ul>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default ProductDisp;
