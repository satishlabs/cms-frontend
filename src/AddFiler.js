import axios from "axios";
import { event } from "jquery";
import React, { Component } from "react";
import MyTextInput from "./MyTextInput";

class AddFiler extends Component{
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
        const URL="http://localhost:5500/addfiler";
        axios.post(URL,this.state)
                .then(myresponse =>{
                    console.log(1,myresponse.data);
                    //Form reset
                    this.setState({
                        myfilers:{},
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
                <h2 className="text-center">Add Filer Form</h2>
                <form onSubmit={this.onSubmitHandler}>
                  <MyTextInput
                        myname="filerid"
                        mylabel="FilerId"
                        myvalue={filerid}
                        myerror={this.state.errors.filerid}
                        myOnChange={this.onChangeHandler}
                    />
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
                    <input type="submit" on value="Add Filer Now" className="btn btn-primary btn-lg"/> 
                </form>
            </div>
        );
    }
}
export default AddFiler;