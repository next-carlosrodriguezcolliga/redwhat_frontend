import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Progress, Alert} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {dismissAlert} from '../../actions/alerts';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';

import {changeActiveSidebarItem} from '../../actions/navigation';
import {logoutUser} from '../../actions/user';


import ReactModal from 'react-modal';


class Sidebar extends React.Component {
    static propTypes = {
        sidebarStatic: PropTypes.bool,
        sidebarOpened: PropTypes.bool,
        dispatch: PropTypes.func.isRequired,
        activeItem: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
        }).isRequired,
    };

    static defaultProps = {
        sidebarStatic: false,
        activeItem: '',
    };




    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);

        this.state = {
              showModal: false
            };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
  
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        this.element.addEventListener('transitionend', () => {
            if (this.props.sidebarOpened) {
                this.element.classList.add(s.sidebarOpen);
            }
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sidebarOpened !== this.props.sidebarOpened) {
            if (nextProps.sidebarOpened) {
                this.element.style.height = `${this.element.scrollHeight}px`;
            } else {
                this.element.classList.remove(s.sidebarOpen);
                setTimeout(() => {
                    this.element.style.height = '';
                }, 0);
            }
        }
    }

    dismissAlert(id) {
        this.props.dispatch(dismissAlert(id));
    }

    doLogout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <nav
                className={cx(s.root)}
                ref={(nav) => {
                    this.element = nav;
                }}
            >
                <header className={s.logo}>
                    <a href="#">Fin <span
                        className="fw-bold">Park</span></a>
                </header>
                <ul className={s.nav}>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="El Mapa"
                        isHeader
                        iconName="flaticon-home"
                        link="/app/main"
                        index="main"
                    />
                    <h5 className={[s.navTitle, s.groupTitle].join(' ')}>En nuestro parque</h5>
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Cartoon World"
                        isHeader
                        iconName="flaticon-network"
                        link="/app/cartoon"
                        index="cartoon"
                        childrenLinks={[
                            {
                                header: 'Aprendiendo a ahorrar', link: '/app/cartoon',
                            },
                            {
                                header: '¿Qué es para ti la banca?', link: '/app/cartoon/what-is-banking',
                            },
                            {
                                header: '¿Qué es ahorrar?', link: '/app/cartoon', 
                            },
                            {
                                header: '¿Qué es banca?', link: '/app/cartoon/banking', 
                            },
                        ]}
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Adrenalin World"
                        isHeader
                        iconName="flaticon-map-location"
                        link="/app/adrenalin"
                        index="adrenalin"
                        childrenLinks={[
                            {
                                header: 'Hablemos de finanzas', link: '/app/adrenalin',
                            },
                            {
                                header: 'TikTokers', link: '/app/adrenalin/tiktok',
                            },
                            {
                                header: '¿Qué es la bolsa?', link: '/app/adrenalin', 
                            },
                        ]}
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Family World"
                        isHeader
                        iconName="flaticon-layers"
                        link="/app/family"
                        index="family"
                        childrenLinks={[
                            {
                                header: 'Economía familiar', link: '/app/family',
                            },
                            {
                                header: 'Tu Cuenta', link: '/app/family',
                            },
                            {
                                header: 'Tu Gestor', link: '/app/family',
                            },
                            {
                                header: 'Tu oficina', link: '/app/family', 
                            },
                        ]}
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="PRIVATE CONTENT"
                        isHeader
                        iconName="flaticon-lock"
                        link="/app/private?private=1"
                        index="private"
                        
                    />
                    
                </ul>

            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarStatic: store.navigation.sidebarStatic,
        alertsList: store.alerts.alertsList,
        activeItem: store.navigation.activeItem,
    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
