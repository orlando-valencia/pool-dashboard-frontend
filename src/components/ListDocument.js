import React, { Component } from 'react';
import DocumentService from './DocumentService';
import axios from 'axios';
import TableRow from './TableRow';
import NavSearch from './NavSearch';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

let styles = {
    marginTop: '20px'
};

class ListDocument extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
        this.addDocumentService = new DocumentService();
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/dashboard/employees?division=pool')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="container" style={styles}>
                <NavSearch/>
                <div className="top d-flex justify-content-center">
                    <h3>List of Employees</h3><br/>
                </div>
                <Link to={"/add-document/"} ><Button>Add New Employee</Button></Link>
                <div className="table d-flex justify-content-center sm">
                    <Table bordered hover sm responsive >
                        <thead>
                            <tr class="text-center d-flex">
                                <th class="col-1" scope="col">ID</th>
                                <th class="col-2">Display Name</th>
                                <th class="col-1">Primary Skill</th>
                                <th class="col-2">Known Techs and Tools</th>
                                <th class="col-2">Job Title</th>
                                <th class="col-3" scope="col">Work Email</th>
                                <th class="col-2">Department</th>
                                <th class="col-2">Location</th>
                                <th class="col-1">Division</th>
                                <th class="col-2">Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ListDocument;