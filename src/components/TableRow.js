import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentService from './DocumentService';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button'

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
        return (
            <tr class="text-center d-flex">
                <td class="col-1"> {this.props.obj.id} </td>
                <td class="col-2"> {this.props.obj.displayName} </td>
                <td class="col-1"> <Button variant="secondary">+</Button> </td>
                <td class="col-2"> <Button variant="secondary">+</Button> </td>
                <td class="col-2"> {this.props.obj.jobTitle} </td>
                <td class="col-3"> {this.props.obj.workEmail} </td>
                <td class="col-2"> {this.props.obj.department} </td>
                <td class="col-2"> {this.props.obj.location} </td>
                <td class="col-1"> {this.props.obj.division} </td>
                <td class="col-2"> {this.props.obj.supervisor} </td>
                <td class="col-1">
                    <Link to={"/edit-document/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <form >
                        <button type="button" /* onClick={this.deleteDocument} */ className="btn btn-danger">Inactivate</button>
                    </form>
                </td>
            </tr>
        );
    }
}

export default withRouter(TableRow);
