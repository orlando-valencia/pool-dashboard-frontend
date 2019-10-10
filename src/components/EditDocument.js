import React, { Component } from 'react';
import axios from 'axios';
import DocumentService from './DocumentService';

class EditDocument extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            displayName: '',
            firstName: '',
            lastName: '',
            preferredName: '',
            gender: '',
            jobTitle: '',
            workEmail: '',
            department: '',
            location: '',
            division: '',
            linkedIn: '',
            supervisor: '',
            photoUploaded: '',
            photoUrl: '',
            canUploadPhoto: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/document/get-document-by-id?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    displayName: response.data.displayName,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    preferredName: response.data.preferredName,
                    gender: response.data.gender,
                    jobTitle: response.data.jobTitle,
                    workEmail: response.data.workEmail,
                    department: response.data.department,
                    location: response.data.location,
                    division: response.data.division,
                    linkedIn: response.data.linkedIn,
                    supervisor: response.data.supervisor,
                    photoUploaded: response.data.photoUploaded,
                    photoUrl: response.data.photoUrl,
                    canUploadPhoto: response.data.canUploadPhoto
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    editDoc = () => {
        console.log(this.props.match.params.id, '--id')
        DocumentService.postApi('update-document', {
            displayName: this.state.displayName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            preferredName: this.state.preferredName,
            gender: this.state.gender,
            jobTitle: this.state.jobTitle,
            workEmail: this.state.workEmail,
            department: this.state.department,
            location: this.state.location,
            division: this.state.division,
            linkedIn: this.state.linkedIn,
            supervisor: this.state.supervisor,
            photoUploaded: this.state.photoUploaded,
            photoUrl: this.state.photoUrl,
            canUploadPhoto: this.state.canUploadPhoto,
            id: this.props.match.params.id
        }).then(json => {
            console.log(json, 'response on edit request!!!!!');
            if (json.data.statusCode === 200) {
                alert('Record updated successfully!!')
                this.props.history.push('/index')
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

            <div>
                <h2 className="text-center">Edit Document Form</h2>
                <div className="row justify-content-md-center">
                    <div className="col-md-6 col-md-offset-3">
                        <form>
                            <div className="form-group">
                                <label>Display Name:</label>
                                <input name="displayName" type="text" className="form-control" onChange={this.handleChange} value={this.state.displayName}></input>
                            </div>

                            <div className="form-group">
                                <label>First Name:</label>
                                <input name="firstName" type="text" className="form-control" onChange={this.handleChange} value={this.state.firstName}></input>
                            </div>

                            <div className="form-group">
                                <label>Last Name:</label>
                                <input name="lastName" type="text" className="form-control" onChange={this.handleChange} value={this.state.lastName}></input>
                            </div>

                            <div className="form-group">
                                <label>Preferred Name:</label>
                                <input name="preferredName" type="text" className="form-control" onChange={this.handleChange} value={this.state.preferredName}></input>
                            </div>
                            
                            <div className="form-group">
                                <label>Gender:</label>
                                <input name="gender" type="text" className="form-control" onChange={this.handleChange} value={this.state.gender}></input>
                            </div>

                            <div className="form-group">
                                <label>Job Title:</label>
                                <input name="jobTitle" type="text" className="form-control" onChange={this.handleChange} value={this.state.jobTitle}></input>
                            </div>

                            <div className="form-group">
                                <label>Work Email:</label>
                                <input name="workEmail" type="text" className="form-control" onChange={this.handleChange} value={this.state.workEmail}></input>
                            </div>

                            <div className="form-group">
                                <label>Department:</label>
                                <input name="department" type="text" className="form-control" onChange={this.handleChange} value={this.state.department}></input>
                            </div>

                            <div className="form-group">
                                <label>Location:</label>
                                <input name="location" type="text" className="form-control" onChange={this.handleChange} value={this.state.location}></input>
                            </div>

                            <div className="form-group">
                                <label>Division:</label>
                                <input name="division" type="text" className="form-control" onChange={this.handleChange} value={this.state.division}></input>
                            </div>

                            <div className="form-group">
                                <label>LinkedIn:</label>
                                <input name="linkedIn" type="text" className="form-control" onChange={this.handleChange} value={this.state.linkedIn}></input>
                            </div>
                            
                            <div className="form-group">
                                <label>Supervisor:</label>
                                <input name="supervisor" type="text" className="form-control" onChange={this.handleChange} value={this.state.supervisor}></input>
                            </div>

                            <div className="form-group">
                                <label>Photo Uploaded:</label>
                                <input name="photoUploaded" type="text" className="form-control" onChange={this.handleChange} value={this.state.photoUploaded}></input>
                            </div>

                            <div className="form-group">
                                <label>Photo Url:</label>
                                <input name="photoUrl" type="text" className="form-control" onChange={this.handleChange} value={this.state.photoUrl}></input>
                            </div>

                            <div className="form-group">
                                <label>Can Upload Photo:</label>
                                <input name="canUploadPhoto" type="text" className="form-control" onChange={this.handleChange} value={this.state.canUploadPhoto}></input>
                            </div>

                            <button type="button" onClick={this.editDoc} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditDocument;