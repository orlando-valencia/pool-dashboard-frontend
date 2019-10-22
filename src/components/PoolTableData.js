import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button'
import Moment from 'react-moment';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CurrencyFormat from 'react-currency-format';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class PoolTableData extends Component {
    render() {
        var perMonth = this.props.obj.costPerMonthTiempo;
        var perMonthCE = this.props.obj.costPerMonthCE;
        var myFormat = "YYYY/MM/DD";
        const joinPool = this.props.obj.joinsPool;
        const leavePool = this.props.obj.leavesPool;
        return (
            <TableRow key={this.props.obj.name}>
                <TableCell component="th" scope="row">{this.props.obj.employeeId}</TableCell>{/* Id */}
                <TableCell align="center">{this.props.obj.name}</TableCell>{/* displayName */}
                <TableCell align="center">{this.props.obj.status}</TableCell> {/* Status */}
                <TableCell align="center">{this.props.obj.stack}</TableCell>{/* Stack */}
                <TableCell align="center">{this.props.obj.level}</TableCell>{/* Level - Primary Skill */}
                <TableCell align="center">{this.props.obj.location}</TableCell>{/* Location */}
                <TableCell align="center">
                <Fab color="primary" aria-label="add" size="small">
                    <AddIcon />
                </Fab>
                </TableCell>{/* Known Techs and Tools */}
                <TableCell align="center">{this.props.obj.currentProject}</TableCell>{/* Current Project */}
                <TableCell align="center">{this.props.obj.potentialProject}</TableCell>{/* Potential Project */}
                <TableCell align="center"><Moment format={myFormat}>{joinPool != null ? joinPool : "" }</Moment></TableCell>{/* Date Join Pool */}
                <TableCell align="center"><Moment format={myFormat}>{leavePool != null ? leavePool : "" }</Moment></TableCell>{/* Date Leaves Pool */}
                <TableCell align="center">{this.props.obj.daysInPool}</TableCell>{/* Days In Pool */}
                <TableCell align="center"><CurrencyFormat value={perMonth != null ? perMonth : "" } displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>{/* Tiempo Monthly Cost */}
                <TableCell align="center">{this.props.obj.perCostCE}%</TableCell>{/* Percentage Cost CE */}
                <TableCell align="center"><CurrencyFormat value={perMonthCE != null ? perMonthCE : "" } displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>{/* CE Monthly Cost */}
                <TableCell align="center">{this.props.obj.source}</TableCell>{/* Source */}
                <TableCell align="center"><textarea className="form-control" rows="2" style={{ minWidth: 140 }} defaultValue={this.props.obj.notes} /></TableCell>{/* Notes */}
                <TableCell align="center">{this.props.obj.active}</TableCell>{/* Active */}
                <TableCell align="center">
                    <div>
                    {/* <Link to={"/edit-document/" + this.props.obj.employee_id} className="btn btn-primary">Edit</Link> */}
                    <Fab color="secondary" aria-label="edit" size="small">
                        <EditIcon />
                    </Fab>
                    {/* <form > */}
                    <Fab aria-label="delete" size="small">
                        <DeleteIcon />
                    </Fab>
                        {/* <button type="button" onClick={this.deleteDocument} className="btn btn-danger">Inactivate</button> */}
                    {/* </form> */}
                    </div>
                </TableCell>
            </TableRow>
            );
        }
    }
    
    export default withRouter(PoolTableData);