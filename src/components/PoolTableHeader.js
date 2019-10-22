import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class PoolTableHeader extends Component {
    render() {
        return (
          <TableRow bgcolor="#62a60a">
            <TableCell style={{ width:'100' }} align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Primary Skill</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Secondary Skills And Level</TableCell>
            <TableCell align="center">Last Project</TableCell>
            <TableCell align="center">Potential Project</TableCell>
            <TableCell align="center">Date Joins Pool</TableCell>
            <TableCell align="center">Date Leaves Pool</TableCell>
            <TableCell align="center">Days In Pool</TableCell>
            <TableCell align="center">Tiempo Monthly Cost</TableCell>
            <TableCell align="center">% Cost</TableCell>
            <TableCell align="center">CE Monthly Cost</TableCell>
            <TableCell align="center">Source</TableCell>
            <TableCell align="center">Notes</TableCell>
            <TableCell align="center">Active</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
            );
        }
    }
    
    export default withRouter(PoolTableHeader);