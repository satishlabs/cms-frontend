import axios from "axios";
import React, { Component } from "react";
import MyTextInput from "./MyTextInput";
import classnames from "classnames";


class EditFiler extends Component{
    state ={
        filerid:'',
        dataset:'',
        hostname:'',
        filergroup:'',
        type:'',
        status:'',
        userlocalcapacity:'',
        tags:'',
        errors:{},
    }

    componentDidMount(){
        console.log("componentDidMount",this.props);
        this.setState({
            filerid: this.props.match.params.filerid
        });

        const URL = "http://localhost:5500/filer/${this.props.match.params.filerid}"; 
        axios.get(URL).then((myresponse)=>{
            console.log(myresponse.data);
            this.setState({
                filerid: myresponse.data.filerid,
                dataset: myresponse.data.dataset,
                hostname: myresponse.data.hostname,
                filergroup: myresponse.data.filergroup,
                type: myresponse.data.type,
                status: myresponse.data.status,
                userlocalcapacity: myresponse.data.userlocalcapacity,
                tags: myresponse.data.tags,  
            });
        });
    }

    onChangeHandler = (event) =>{
        console.log("onChangeHandler");
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        const{filerid,dataset,hostname,filergroup,type,status,userlocalcapacity,tags} = this.state;

        console.log("onSubmitHandler");
        console.log(this.state);

        //Do the validations
        if(filerid ===''){
            this.setState({errors:{
                filerid:"FilerId is Required"
            }});
            return;
        }
        if(dataset === ''){
            this.setState({errors:{
                dataset:"Dataset is Required"
            }});
            return;
        }
        if(hostname ===''){
            this.setState({errors:{
                hostname:"Host Name is Required"
            }});
            return;
        }
        
        if(filergroup ===''){
            this.setState({errors:{
                filergroup:"FilerGroup is Required"
            }});
            return;
        }
        if(type === ''){
            this.setState({errors:{
                type:"Type is Required"
            }});
            return;
        }
        if(status === ''){
            this.setState({errors:{
                status:"Status is Required"
            }});
            return;
        }
        if(userlocalcapacity === ''){
            this.setState({errors:{
                userlocalcapacity:"UserLocalCapacity is Required"
            }});
            return;
        }
        if(tags === ''){
            this.setState({errors:{
                tags:"Tags is Required"
            }});
            return;
        }
        //Make Call to Server
        const URL = "http://localhost:5500/editfiler";
        axios.put(URL,this.state)
            .then(myresponse =>{
                console.log("1",myresponse.data);

                //Form reset
                this.setState({
                    filerid: "",
                    dataset: "",
                    hostname: "",
                    filergroup: 0,
                    type: "",
                    status: "",
                    userlocalcapacity: "",
                    tags: "",
                    errors: {},
                });
                this.props.history.push("/");
            }).catch(myerror =>{
                console.log("2",myerror);
            });
        
    }

    render(){
        const {filerid,hostname,dataset,filergroup,type,status,userlocalcapacity,tags} = this.state;
        return(
            <div className="card-body container col-md-6">
                <h2 className="text-center">Edit Filer Form</h2>
                <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="filerid"> Filer Id </label>
                    <input type="text" name="filerid" value={filerid} readOnly
                    className={classnames("form-control form-control-lg")} />
                </div>
                 
                    <MyTextInput
                        myname="hostname"
                        mylabel="HostName"
                        myvalue={hostname}
                        myerror={this.state.errors.hostname}
                        myOnChange={this.onChangeHandler}
                    />
                    <MyTextInput
                        myname="dataset"
                        mylabel="Dataset"
                        myvalue={dataset}
                        myerror={this.state.errors.dataset}
                        myOnChange={this.onChangeHandler}
                    />
                    <MyTextInput
                        myname="filergroup"
                        mylabel="FilerGroup"
                        myvalue={filergroup}
                        myerror={this.state.errors.filergroup}
                        myOnChange={this.onChangeHandler}
                    />
                    <MyTextInput
                        myname="type"
                        mylabel="Type"
                        myvalue={type}
                        myerror={this.state.errors.type}
                        myOnChange={this.onChangeHandler}
                    />
                    <MyTextInput
                        myname="status"
                        mylabel="Status"
                        myvalue={status}
                        myerror={this.state.errors.status}
                        myOnChange={this.onChangeHandler}
                    />
                     <MyTextInput
                        myname="userlocalcapacity"
                        mylabel="UserLocalCapacity"
                        myvalue={userlocalcapacity}
                        myerror={this.state.errors.userlocalcapacity}
                        myOnChange={this.onChangeHandler}
                    />
                     <MyTextInput
                        myname="tags"
                        mylabel="Tags"
                        myvalue={tags}
                        myerror={this.state.errors.tags}
                        myOnChange={this.onChangeHandler}
                    />
                    <input type="submit" on value="Update Filer Now" className="btn btn-primary btn-lg"/> 
                </form>
            </div>
        );
    }
}
export default EditFiler;