import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"; 


class FilerList extends Component {
    state = {
        myfilers: [],
        showConfirm: false,
        myfilerIdToDelete:""
    }
    componentDidMount() {
        console.log("componentDidMount");
        const URL = "http://localhost:5500/filers";
        axios.get(URL)
            .then((response) => {
                console.log(' response ', response)
                this.setState({
                    myfilers: response.data.rows
                });
                console.log(response);
            });
    }

    showDeleteConfim = (myfilerId) => {
        console.log("showDeleteConfirm", myfilerId);
        this.setState({
            showConfirm: true,
            myfilerIdToDelete: myfilerId,
        });
    };
    hideDeleteConfim = () => {
        console.log("hideDeleteConfim");
        this.setState({
            showConfirm: false,
        });
    };
    handleDelete = () => {
        console.log("handleDelete", this.state.myfilerIdToDelete);
        const URL = "http://localhost:5500/filer/${this.state.myfilerIdToDelete}";
        axios.delete(URL)
            .then((myresponse) => {
                console.log(1, myresponse.data);
                this.hideDeleteConfim();
                this.getAllFilers();
                this.props.history.push("/");
            })
            .catch((myerror) => {
                console.log(2, myerror);
            });
    };

    render() {
        const myfilerList = this.state.myfilers && this.state.myfilers.map(
            (myfiler) => {
                return (
                    <tr key={myfiler.filerId}>
                        <td>{myfiler.filerid}</td>
                        <td>{myfiler.dataset}</td>
                        <td>{myfiler.hostname}</td>
                        <td>{myfiler.filergroup}</td>
                        <td>{myfiler.type}</td>
                        <td>{myfiler.status}</td>
                        <td>{myfiler.userlocalcapacity}</td>
                        <td>{myfiler.tags}</td>
                        <td>
                            <NavLink to={"/edit-filer/" + myfiler.filerid} className="btn btn-primary mytext-large mymargin1" exact>Edit-Filer</NavLink>
                            <button type="button" data-toggle="modal"
                                data-target="#FilerDeleteConfirmation"
                                onClick={this.showDeleteConfim.bind(this, myfiler.bookId)}
                                className="btn btn-danger mytext-large mymargin1" >
                                Delete Filer
                            </button>

                        </td>
                    </tr>
                )
            }
        )
        return (
            <Container  className="span-viewport d-flex flex-column align-items-center">
            <div className="container">
                <br />
                <div className="myfloat-left">
                    <span className="text-center mytext-extra-large">
                        Welcome to CMS !!
                    </span>
                </div>

                <div className="myfloat-right">
                    <NavLink to={"/add-filer"} className="btn btn-primary mytext-large mymargin1" exact>Add New Filer</NavLink>
                </div>
                </div>
                <table className="table">
                    <thead>
                        <tr><th>FilerId</th>
                            <th>Dataset</th>
                            <th>HostName</th>
                            <th>FilerGroup</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>UserLocalCapacity</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>{myfilerList}</tbody>
                </table>

                <Modal show={this.state.showConfirm} onHide={this.hideDeleteConfim}>
                    <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Are you sure to delete?</p>
                    <b>{this.state.myfilerIdToDelete}</b>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideDeleteConfim}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={this.handleDelete}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal> 
            </Container>
        );
    }
}
export default FilerList;