import React from "react";

import { Row, Col, Progress} from "reactstrap";
import AnimateNumber from "react-animated-number";

import Widget from "../../../components/Widget";

import s from "./Adrenalin.module.scss";


  function createTikTok() {
  return {__html: '<div><blockquote class="tiktok-embed" cite="https://www.tiktok.com/@miguelvalenzuela036/video/6849443459904965893" data-video-id="6849443459904965893" style={max-width:605px;min-width:325px} > <section> <a target="_blank" title="@miguelvalenzuela036" href="https://www.tiktok.com/@miguelvalenzuela036">@miguelvalenzuela036</a> <p><a title="bbabancomer" target="_blank" href="https://www.tiktok.com/tag/bbabancomer">#bbabancomer</a> <a title="bbvabancomer" target="_blank" href="https://www.tiktok.com/tag/bbvabancomer">#bbvabancomer</a> <a title="comedia" target="_blank" href="https://www.tiktok.com/tag/comedia">#comedia</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">#fyp</a>  Saluditos a los de los bancos 😂😂</p> <a target="_blank" title="♬ sonido original - Brandon Vazquez" href="https://www.tiktok.com/music/sonido-original-6846612765470214917">♬ sonido original - Brandon Vazquez</a> </section> </blockquote> </div>'};
}

 function myTikTok() {
  return <div dangerouslySetInnerHTML={createTikTok()} />;
}


class TikTok extends React.Component {
  state = {
    done: false,
    statistics: null
  };

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 1 })
    };
    fetch('http://users-backend-native-redwhat.apps.cluster-3397.3397.example.opentlc.com/users/adrenalin/completed', requestOptions)
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
        <h2>¿Eres TikToker? - ¡Demúestranoslo!</h2>
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

export default TikTok;
