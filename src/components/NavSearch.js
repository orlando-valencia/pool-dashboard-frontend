import React, { Component } from 'react';
import { withRouter } from 'react-router';
import logo from './image/tiempo_logo.jpg';

class NavSearch extends Component {
    render() {
        return (

                <div className="card-body row no-gutters align-items-center">
                    <div className="col">
                        <img src={logo} width="120px" alt='icon' className="rounded float-left"/>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-search h2 text-body"></i>
                    </div>
                    <div className="col">
                        <input className="form-control form-control-md form-control-borderless" type="search" placeholder="Search employee" />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-md btn-success" type="submit">Search</button>
                    </div>
                </div>
        );
    }
}

export default withRouter(NavSearch);