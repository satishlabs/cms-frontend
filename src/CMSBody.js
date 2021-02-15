import React, { Component } from "react";
import { Route } from "react-router-dom";
import AddFiler from "./AddFiler";
import EditFiler from "./EditFiler";
import FilerList from "./FilerList";

//import { Route } from "react-router-dom";

class CMSBody extends Component{
    render(){
        return(
            <div>
            <Route path="/" component={FilerList} exact></Route>
            <Route path="/add-filer" component={AddFiler} exact/>
            <Route path="/edit-filer/:filerid" component={EditFiler} exact/>
            </div>
        );
    }
}
export default CMSBody;