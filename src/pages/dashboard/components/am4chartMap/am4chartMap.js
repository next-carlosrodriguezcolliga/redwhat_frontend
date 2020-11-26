import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import cities from './mock';
import backgroundImage from './backgroundImage.jpg'
import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/usaHigh";
import amcharts4_geodata from "@amcharts/amcharts4-geodata/worldLow"

import AnimateNumber from 'react-animated-number';
import s from './am4chartMap.module.scss';

import cities_original from './mock.js';
  
  class Am4chartMap extends Component {

    constructor() {
        super();
        this.state = { 
            done: false,
            cities_json: []
        };
    }
  
  componentDidMount() {
    
    let url = "http://contents-backend-native-redwhat.apps.cluster-3397.3397.example.opentlc.com/contents/map";
    fetch(url)
        .then(result=>result.json())
        .then(cities_json=>this.setState({
            done: true,
            cities_json
        }))    
  }

  componentWillUnmount() {
    if(this.map) {
      this.map.dispose();
    }
  }

  render() {
    am4core.options.autoDispose = true;

    let map = am4core.create("map", am4maps.MapChart);
        map.geodata = am4geodata_usaHigh;
        map.percentHeight = 90;
        map.dy = 10;
        map.projection = new am4maps.projections.AlbersUsa();
        let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        let polygonTemplate = polygonSeries.mapPolygons.template;
        //polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#474D8400");
        polygonTemplate.stroke = am4core.color("#6979C900");
        //let hs = polygonTemplate.states.create("hover");
        //hs.properties.fill = am4core.color("#354D8400"); 
        
        map.backgroundImage = backgroundImage;
        map.homeZoomLevel = 1.2;
        

        //Background
        var bgSeries = map.series.push(new am4maps.MapImageSeries());
        bgSeries.toBack();
        var bgImage = bgSeries.mapImages.template.createChild(am4core.Image);
        bgImage.propertyFields.href = "src";
        bgImage.width = 1019;
        bgImage.height = 632;
        bgSeries.data = [{
          src: "https://www.parquewarner.com/sites/parquewarner.com/files/parkmap/2456x1590-completo3.jpg"
        }];

        let citySeries = map.series.push(new am4maps.MapImageSeries());


        

         this.map = map;

    if (!this.state.done){
        return (
<div className={s.mapChart}>
            <div className={s.stats}>
              <h6 className="mt-1"  style={{color: "black"}}><b>Cargando....</b></h6>
              <p className="h3 m-0">
                <span className="mr-xs fw-normal">
                  <AnimateNumber
                    value={0}
                    initialValue={0}
                    duration={1000} 
                    stepPrecision={0}
                    formatValue={n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  /></span>
                <i className="fa fa-map-marker" />
              </p>
            </div>
            <div className={s.map} id="map">
              <span>Alternative content for the map</span>
            </div>
          </div>
            )
    }else{


        let citySeries2 = map.series.push(new am4maps.MapImageSeries());
        citySeries2.data = this.state.cities_json;   

        citySeries2.dataFields.value = "size";
        let city = citySeries2.mapImages.template;
        city.nonScaling = true;
        city.propertyFields.latitude = "latitude";
        city.propertyFields.longitude = "longitude";
        let circle = city.createChild(am4core.Circle);
        circle.fill = am4core.color("#000");
        circle.strokeWidth = 0;
        let circleHoverState = circle.states.create("hover");
        circleHoverState.properties.strokeWidth = 1;
        circle.tooltipText = '{tooltip}';
        circle.propertyFields.radius = 'size';

         this.map = map;


        return (<div className={s.mapChart}>
            <div className={s.stats}>
              <h6 className="mt-1"  style={{color: "black"}}><b>Nuestras atracciones</b></h6>
              <p className="h3 m-0">
                <span className="mr-xs fw-normal">
                  <AnimateNumber
                    value={50}
                    initialValue={0}
                    duration={1000} 
                    stepPrecision={0}
                    formatValue={n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  /></span>
                <i className="fa fa-map-marker" />
              </p>
            </div>
            <div className={s.map} id="map">
              <span>Alternative content for the map</span>
            </div>
          </div>);
    }
  }
}

export default Am4chartMap;
