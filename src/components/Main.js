import React, { useState } from 'react';

/*
HOOKS:- helps in creating state, lifecycle

useState():- Used for creating hooks
useEffect():- Used for lifecycle
useMemo()
useCallback()
useRef()

*/

function Main() {
  // const initialValues = {
  //   name: '',
  //   email: '',
  //   dateofbirth: '',
  //   mobileNumber: '',
  //   city: '',
  // };

  // //   console.log('INITIAL VALUES=>', initialValues);

  // const [formValues, setFormValues] = useState(initialValues);
  // console.log('formValues=>', formValues);

  // function onFormValueChange(event) {
  //   // console.log('YE CALL HUA');
  //   // console.log('event=>', event.target.value);
  //   //...formValues==> jo bhi mera purana values hai usko copy kar lo
  //   // console.log('NAME=>', event.target.name);
  //   setFormValues({ ...formValues, [event.target.name]: event.target.value });
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');

  function onFormSubmit(e) {
    console.log('FORM SUBMIT');
    e.preventDefault();
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div className='registration-form'>
      <h1>REGISTRATION FORM</h1>
      <form onSubmit={onFormSubmit} id='form-id-001'>
        <div className='form-list'>
          <div className='form-element'>
            <label>NAME:</label>
            <input
              name='name'
              type='text'
              id='name'
              // value={name}
              placeholder='Please enter your name'
              onChange={onNameChange}
            />
          </div>
          <div className='form-element'>
            <label>EMAIL:</label>
            <input
              name='email'
              type='text'
              id='email'
              // value={email}
              // onChange={onFormValueChange}
              placeholder='Please enter your emailId'
            />
          </div>
          <div className='form-element'>
            <label>DOB:</label>
            <input
              name='dateofbirth'
              type='date'
              id='dob'
              // value={dateofbirth}
              // onChange={onFormValueChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-element'>
            <label>MOBILE:</label>
            <input
              name='mobileNumber'
              type='number'
              id='mobile'
              // value={mobileNumber}
              // onChange={onFormValueChange}
              placeholder='Enter your mobile number'
            />
          </div>
          <div className='form-element'>
            <label>CITY:</label>
            <input
              name='city'
              id='city'
              type='text'
              // value={city}
              // onChange={onFormValueChange}
              placeholder='Your City'
            />
          </div>
          {/* <div className='form-element'>
            <label> Details you have entered:-</label>
            {JSON.stringify(formValues)}
          </div> */}
        </div>
        <button type='submit'> FORM SUBMIT</button>
      </form>
    </div>
  );
}

export default Main;
