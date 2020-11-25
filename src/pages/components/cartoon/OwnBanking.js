import React from "react";

import { Row, Col, Progress, Table, Label, Input } from "reactstrap";
import AnimateNumber from "react-animated-number";

import Widget from "../../../components/Widget";
import ApexChart from "react-apexcharts";

import s from "./Cartoon.module.scss";
import { chartData, liveChart, liveChartInterval } from "./mock";
import Sparklines from "../../../components/Sparklines";

import ReactEchartsCore from "echarts-for-react/lib/core";

import echarts from "echarts/lib/echarts";

import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/themeRiver";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

exporting(Highcharts);
exportData(Highcharts);

class Banking extends React.Component {
  state = {
    cd: chartData,
    ld: liveChart,
    initEchartsOptions: {
      renderer: "canvas",
    },
    sparklineData: {
      series: [{ data: [1, 7, 3, 5, 7, 8] }],
      options1: {
        colors: ["#db2a34"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
      options2: {
        colors: ["#2477ff"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
    },
  };

  componentWillUnmount() {
    clearInterval(liveChartInterval);
  }

  render() {
    const { cd, ld, initEchartsOptions, sparklineData } = this.state;
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
      </div>
    );
  }
}

export default Banking;
