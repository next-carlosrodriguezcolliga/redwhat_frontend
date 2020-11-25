import React from "react";

import { Row, Col, Progress, Table, Label, Input } from "reactstrap";
import AnimateNumber from "react-animated-number";

import Widget from "../../../components/Widget";
import ApexChart from "react-apexcharts";

import s from "./Adrenalin.module.scss";
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

  function createTikTok() {
  return {__html: '<div><blockquote class="tiktok-embed" cite="https://www.tiktok.com/@miguelvalenzuela036/video/6849443459904965893" data-video-id="6849443459904965893" style={max-width:605px;min-width:325px} > <section> <a target="_blank" title="@miguelvalenzuela036" href="https://www.tiktok.com/@miguelvalenzuela036">@miguelvalenzuela036</a> <p><a title="bbabancomer" target="_blank" href="https://www.tiktok.com/tag/bbabancomer">#bbabancomer</a> <a title="bbvabancomer" target="_blank" href="https://www.tiktok.com/tag/bbvabancomer">#bbvabancomer</a> <a title="comedia" target="_blank" href="https://www.tiktok.com/tag/comedia">#comedia</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">#fyp</a>  Saluditos a los de los bancos 😂😂</p> <a target="_blank" title="♬ sonido original - Brandon Vazquez" href="https://www.tiktok.com/music/sonido-original-6846612765470214917">♬ sonido original - Brandon Vazquez</a> </section> </blockquote> </div>'};
}

 function myTikTok() {
  return <div dangerouslySetInnerHTML={createTikTok()} />;
}


class TikTok extends React.Component {
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

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

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
        <h2>¿Qué es banca?</h2>
        <div>
          <Row>
            <Col lg={7}>
              {myTikTok()}
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

export default TikTok;
