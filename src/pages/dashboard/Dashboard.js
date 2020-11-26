import React from "react";
import { Row, Col, Progress } from "reactstrap";

import Widget from "../../components/Widget";

import Calendar from "./components/calendar/Calendar";
import Map from "./components/am4chartMap/am4chartMap";
import Rickshaw from "./components/rickshaw/Rickshaw";

import AnimateNumber from "react-animated-number";

import s from "./Dashboard.module.scss";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
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
                Nivel: <strong>Whatever</strong>
              </p>
              <p>
                <span className="circle bg-default text-white">
                  <i className="fa fa-map-marker" />
                </span>{" "}
                &nbsp; 1466932 FinParkers, 145 On-Line
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Cartoon World</h6>
                  <p className="description deemphasize mb-xs text-white">
                    Has completado el
                  </p>
                  <Progress
                    color="primary"
                    value="60"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={75} />%
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
                    value="39"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={84} />%
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
                    value="80"
                    className="bg-custom-dark progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={92} />%
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
