import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const AddBusiness = (props) =>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [hours, setHours] = useState('');
    const [description, setDescription] = useState('');
   
    
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };

    const handleHoursChange = (e) => {
      setHours(e.target.value);
    };

    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Name: ${name}, Email: ${address}, Hours: ${hours}, Description: ${description}`);
  
      props.addBusiness({
        id: props.business.length+1, name, address, hours, description
      }) 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <TextField
          label="Address"
          variant="outlined"
          value={address}
          onChange={handleAddressChange}
        />
        <br />
        <TextField
          label="Hours (ex:9am-9pm)"
          variant="outlined"
          value={hours}
          onChange={handleHoursChange}
        />
        <br />
        <TextField
          label="Descripton"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
};

export default AddBusiness;
