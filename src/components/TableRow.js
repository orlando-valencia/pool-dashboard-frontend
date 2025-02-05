import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentService from './DocumentService';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button'
import Moment from 'react-moment';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';

class TableRow extends Component {

    deleteDocument = () => {
        DocumentService.deleteApi('delete-document?id=' + this.props.obj._id)
            .then(json => {
                if (json.data.statusCode === 200) {
                    alert('Record deleted successfully!!');
                    this.props.history.push('/add-document')
                }
                else {
                    alert('something went wrong!!');
                    this.props.history.push('/index')
                }
            }).catch((error) => {
                console.log("error-----------", error)
            })
    }

    render() {
        var perMonth = this.props.obj.costPerMonthTiempo;
        var perMonthCE = this.props.obj.costPerMonthCE;
        var myFormat = "YYYY/MM/DD";
        const joinPool = this.props.obj.joinsPool;
        const leavePool = this.props.obj.leavesPool;
        return (

            // {rows.map(row => (
            //     <TableRow key={row.name}>
            //     <TableCell component="th" scope="row">
            //         {row.name}
            //     </TableCell>
            //     <TableCell align="center">{row.calories}</TableCell>
            //     <TableCell align="center">{row.fat}</TableCell>
            //     <TableCell align="center">{row.carbs}</TableCell>
            //     <TableCell align="center">{row.protein}</TableCell>
            //     </TableRow>
            // ))}

            <TableRow className="text-center d-flex">
                <TableCell align="center">{this.props.obj.employeeId}</TableCell>{/* Id */}
                <TableCell align="center">{this.props.obj.name}</TableCell>{/* displayName */}
                <TableCell align="center">{this.props.obj.status}</TableCell> {/* Status */}
                <TableCell align="center">{this.props.obj.stack}</TableCell>{/* Stack */}
                <TableCell align="center">{this.props.obj.level}</TableCell>{/* Level - Primary Skill */}
                <TableCell align="center">{this.props.obj.location}</TableCell>{/* Location */}
                <TableCell align="center">
                    <Button variant="secondary">
                        <Icon color="primary">addCircle</Icon>
                    </Button>
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
                <TableCell align="center"><textarea className="form-control" id="exampleFormControlTextarea1" rows="2">{this.props.obj.notes}</textarea></TableCell>{/* Notes */}
                <TableCell align="center">{this.props.obj.active}</TableCell>{/* Active */}
                <TableCell align="center">
                    <Link to={"/edit-document/" + this.props.obj._id} className="btn btn-primary"></Link>
                    {/* <Icon color="Primary">Edit</Icon> */}
                </TableCell>
                <TableCell>
                    <form >
                        <button type="button" /* onClick={this.deleteDocument} */ className="btn btn-danger">Inactivate</button>
                    </form>
                </TableCell>
            </TableRow>
        );
    }
}

export default withRouter(TableRow);
