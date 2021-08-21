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
  const initialValues = {
    name: '',
    email: '',
    dateofbirth: '',
    mobileNumber: '',
    city: '',
  };

  //   console.log('INITIAL VALUES=>', initialValues);

  const [formValues, setFormValues] = useState(initialValues);
  console.log('formValues=>', formValues);

  function onFormValueChange(event) {
    // console.log('YE CALL HUA');
    // console.log('event=>', event.target.value);
    //...formValues==> jo bhi mera purana values hai usko copy kar lo
    // console.log('NAME=>', event.target.name);
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  return (
    <div className='registration-form'>
      <h1>REGISTRATION FORM:-</h1>
      <div>
        <div>
          <label>NAME:</label>
          <input
            name='name'
            type='text'
            value={formValues.name}
            onChange={onFormValueChange}
          />
        </div>
        <div>
          <label>EMAIL:</label>
          <input
            name='email'
            type='text'
            value={formValues.email}
            onChange={onFormValueChange}
          />
        </div>
        <div>
          <label>DOB:</label>
          <input
            name='dateofbirth'
            type='date'
            value={formValues.dateofbirth}
            onChange={onFormValueChange}
          />
        </div>
        <div>
          <label>MOBILE:</label>
          <input
            name='mobileNumber'
            type='number'
            value={formValues.mobileNumber}
            onChange={onFormValueChange}
          />
        </div>
        <div>
          <label>CITY:</label>
          <input
            name='city'
            type='text'
            value={formValues.city}
            onChange={onFormValueChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
