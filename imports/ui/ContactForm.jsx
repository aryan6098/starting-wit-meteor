import React, { useState } from "react";
import { ContactCollection } from "../api/ContactCollection";
export const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    imageUrl: "",
  });

  const onChange = (e) => {
    const {name,value} = e.target;
    setValues({
        ...values,
        [name]:value
    })
  };

  const submitHandler = ()=>{
    console.log(values.name ,values.email,values.imageUrl)
    ContactCollection.insert({name:values.name, email:values.email, imageUrl:values.imageUrl});
    setValues({
        name: "",
        email:'',
        imageUrl:''
    })
  }
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">ImageUrl:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={values.imageUrl}
          onChange={onChange}
        />
      </div>
      <div>
        <button type="button" onClick={submitHandler}>Save Contact</button>
      </div>
    </form>
  );
};
