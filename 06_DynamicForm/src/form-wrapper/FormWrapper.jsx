import React from "react";
import Checkbox from "./Checkbox";
import TextField from "./TextField";


const FormWrapper = ({inputs}) => {
  return (
    <div className="form-wrapper">
     {
      inputs.map((input,index) => {
        if(input.type === "checkbox"){
          return <Checkbox key={input.id} {...input} />
        }
        return <TextField key={input.id} {...input} />
      })
     }
    </div>
  );
};

export default FormWrapper;
