import React from "react";
import { Row, Col, Progress } from "reactstrap";

import Widget from "../../components/Widget";

import Map from "./components/am4chartMap/am4chartMap";

import AnimateNumber from "react-animated-number";

import s from "./Dashboard.module.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
      done: false,
      statistics: null
    };


  }

  componentDidMount() {
    let url = "http://users-service-redwhat.apps.cluster-3397.3397.example.opentlc.com/users/statistics";
    fetch(url)
        .then(result=>result.json())
        .then(statistics=>this.setState({
            done: true,
            statistics
        }))  
  }

  render() {
    
      if (!this.state.done)
        return <div>Loading...</div>;
      else
          return (
            <div className={s.root}>
              <h1 className="page-title">
                El parque &nbsp;
                <small>
                  <small>No te pierdas nada</small>
                </small>
              </h1>

              <Row>
                <Col lg={7}>
                  <Widget className="bg-transparent">
                    <Map />
                  </Widget>
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



            ); 

    
  }
}

export default Dashboard;
