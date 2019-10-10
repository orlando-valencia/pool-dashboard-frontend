import React, { Component } from 'react';
import { withRouter } from 'react-router';

class NavSearch extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
            <h1>&nbsp;</h1>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default withRouter(NavSearch);