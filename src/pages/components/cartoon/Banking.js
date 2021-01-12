import React from "react";

import { Row, Col, Progress } from "reactstrap";
import AnimateNumber from "react-animated-number";

import Widget from "../../../components/Widget";

import s from "./Cartoon.module.scss";


class Banking extends React.Component {
  state = {
    done: false,
      statistics: null
  };

  componentDidMount(){
    /*
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 1 })
    };
    fetch('http://users-backend-native-redwhat.apps.cluster-3397.3397.example.opentlc.com/users/cartoon/completed', requestOptions)
        .then(response => response.json())
        .then(data => data.id);

    let url = "http://users-service-redwhat.apps.cluster-3397.3397.example.opentlc.com/users/statistics";
    fetch(url)
        .then(result=>result.json())
        .then(statistics=>this.setState({
            done: true,
            statistics
        }))  
        */

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">Cartoon</span> - World
        </h1>
        <h2>¿Qué es banca?</h2>
        <div>
          <Row>
            <Col lg={7}>
              <iframe width="800" height="450" src="https://puzzel.org/es/memory/play?p=-MMzpwi4IKBIo-Mif3PY" frameborder="0" allowfullscreen></iframe>
            </Col>
            
            <Col lg={1} />
            
            <Col lg={4}>
            <Widget
                    className="bg-transparent"
                    title={
                      <h5>
                        {" "}
                        Tus
                        <span className="fw-semi-bold">&nbsp;Datos</span>
                      </h5>
                    }
                    
                  >
                    <p>
                      Nivel: <strong>Joven Padawan</strong>
                    </p>
                    <p>
                      <span className="circle bg-default text-white">
                        <i className="fa fa-map-marker" />
                      </span>{" "}
                      &nbsp; 4892 FinParkers, 418 On-Line
                    </p>
                    <div className="row progress-stats">
                      <div className="col-md-9 col-12">
                        <h6 className="name fw-semi-bold">Cartoon World</h6>
                        <p className="description deemphasize mb-xs text-white">
                          Has completado el
                        </p>
                        <Progress
                          color="primary"
                          value="35"
                          className="bg-custom-dark progress-xs"
                        />
                      </div>
                      <div className="col-md-3 col-12 text-center">
                        <span className="status rounded rounded-lg bg-default text-light">
                          <small>
                            <AnimateNumber value="35" />%
                          </small>
                        </span>
                      </div>
                    </div>
                    <div className="row progress-stats">
                      <div className="col-md-9 col-12">
                        <h6 className="name fw-semi-bold">Adrenalin World</h6>
                        <p className="description deemphasize mb-xs text-white">
                          Has completado el
                        </p>
                        <Progress
                          color="danger"
                          value="12"
                          className="bg-custom-dark progress-xs"
                        />
                      </div>
                      <div className="col-md-3 col-12 text-center">
                        <span className="status rounded rounded-lg bg-default text-light">
                          <small>
                            <AnimateNumber value="12" />%
                          </small>
                        </span>
                      </div>
                    </div>
                    <div className="row progress-stats">
                      <div className="col-md-9 col-12">
                        <h6 className="name fw-semi-bold">Family World</h6>
                        <p className="description deemphasize mb-xs text-white">
                          Has completado el
                        </p>
                        <Progress
                          color="success"
                          value="53"
                          className="bg-custom-dark progress-xs"
                        />
                      </div>
                      <div className="col-md-3 col-12 text-center">
                        <span className="status rounded rounded-lg bg-default text-light">
                          <small>
                            <AnimateNumber value="53" />%
                          </small>
                        </span>
                      </div>
                    </div>
                    
                  </Widget>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Banking;
