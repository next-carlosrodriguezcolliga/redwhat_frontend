import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import uuid from 'uuid/v4'

class BreadcrumbHistory extends Component {

  renderBreadCrumbs = () => {

    let own_url = this.props.url;

    if (own_url.indexOf('&') > 0 && own_url.indexOf('?') < 0){
     // alert('url mal formada' + own_url.indexOf('&') + " ||| " + own_url.indexOf('?') + " ||| " + own_url);
     // window.location.href = own_url.replace('&','?');
     // alert('url bien formada' + own_url.indexOf('&') + " ||| " + own_url.indexOf('?') + " ||| " + own_url.replace('&','?'));
    }

    own_url = ( own_url.indexOf('&') > 0 ? own_url.split('&')[0] : own_url);
    own_url = ( own_url.indexOf('?') > 0 ? own_url.split('?')[0] : own_url);
    
    let route = own_url.split('/')
    .slice(1)
    .map(route => route
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    )
    const length = route.length;
    
    return route.map((item,index) => (
      length === index + 1 ? 
      <BreadcrumbItem key={uuid()} className="active"><strong>{item}{item === 'Adrenalin' || item === 'Family' || item === 'Cartoon' ? ' World' : ''}</strong></BreadcrumbItem> : 
      <BreadcrumbItem key={uuid()}>{item}</BreadcrumbItem>
    ))
  }
  
  render() {
    return (
      <>
        { this.props.url !== '/app/chat' ?
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem>Estás aquí</BreadcrumbItem>
              {this.renderBreadCrumbs()}
            </Breadcrumb>
          </div>
        :null}
      </>
    )
  };
};

export default BreadcrumbHistory;