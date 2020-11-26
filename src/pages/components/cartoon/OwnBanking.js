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

  }

  componentWillUnmount() {
  }

  render() {
    if (!this.state.done)
        return <div>Loading...</div>;
      else
    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">Cartoon</span> - World
        </h1>
        <h2>¿Qué es para ti la banca?</h2>
        <div>
          <Row>
            <Col lg={7}>

              <iframe width="800" height="680" frameborder="0" scrolling="no" src="https://sumopaint.com/flash/api.php?target=https://www.inni.com/api/paint.php& url=https://www.inni.com/images/summer.jpg& mask=https://www.inni.com/images/mask.png& cloud=0&service=Save%20to%20INNI"></iframe>
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
                      &nbsp; {this.state.statistics.users_registered} FinParkers, {this.state.statistics.users_online} On-Line
                    </p>
                    <div className="row progress-stats">
                      <div className="col-md-9 col-12">
                        <h6 className="name fw-semi-bold">Cartoon World</h6>
                        <p className="description deemphasize mb-xs text-white">
                          Has completado el
                        </p>
                        <Progress
                          color="primary"
                          value={this.state.statistics.cartoon_completed}
                          className="bg-custom-dark progress-xs"
                        />
                      </div>
                      <div className="col-md-3 col-12 text-center">
                        <span className="status rounded rounded-lg bg-default text-light">
                          <small>
                            <AnimateNumber value={this.state.statistics.cartoon_completed} />%
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
                          value={this.state.statistics.adrenalin_completed}
                          className="bg-custom-dark progress-xs"
                        />
                      </div>
                      <div className="col-md-3 col-12 text-center">
                        <span className="status rounded rounded-lg bg-default text-light">
                          <small>
                            <AnimateNumber value={this.state.statistics.adrenalin_completed} />%
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
                          value={this.state.statistics.family_completed}
                          className="bg-custom-dark progress-xs"
                        />
                      </div>
                      <div className="col-md-3 col-12 text-center">
                        <span className="status rounded rounded-lg bg-default text-light">
                          <small>
                            <AnimateNumber value={this.state.statistics.family_completed} />%
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
