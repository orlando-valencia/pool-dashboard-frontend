import React, { Component } from 'react';
import DocumentService from './DocumentService';
import axios from 'axios';
import NavSearch from './NavSearch';
import PoolTableHeader from './PoolTableHeader';
import PoolTableData from './PoolTableData';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class ListDocument extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
        this.addDocumentService = new DocumentService();
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/dashboard/pool/employees')
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
                return <PoolTableData obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="1024px">
                    <NavSearch/>
                    <Paper style={{ overflow: 'auto', height:'960px', maxWidth:'xl'}}>
                        <Table className="minWidth: 650" aria-label="simple table">
                            <TableHead>
                                <PoolTableHeader />
                            </TableHead>
                            <TableBody>
                                {this.tabRow()}
                            </TableBody>
                        </Table>
                    </Paper>
                </Container>
            </React.Fragment>
        );
    }
}

export default ListDocument;