import React from 'react'
import propTypes from 'prop-types';
import classnames from 'classnames'; 


const MyTextInput = ({
    mylabel,
    mytype,
    myname,
    myvalue,
    myplaceholder,
    myOnChange,
    myerror
})=>{
    return(
        <div className="form-group">
            <label htmlFor={myname} > {mylabel} </label> 
            <input  type={mytype}
                    name={myname}
                    className={classnames("form-control form-control-lg",{"is-invalid":myerror})}
                    placeholder={myplaceholder}
                    value={myvalue}
                    onChange={myOnChange} /> 
            {myerror && <div className="invalid-feedback"> {myerror}</div> }
        </div>
    )
}

MyTextInput.propTypes = {
    mylabel:propTypes.string.isRequired,
    myname:propTypes.string.isRequired,
    myvalue:propTypes.string.isRequired,
    myOnChange:propTypes.func.isRequired,
}

MyTextInput.defaultProps = {
    mytype:"text",
    myplaceholder:'',
    myerror:''
}

export default MyTextInput;