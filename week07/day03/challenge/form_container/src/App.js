import React, { useState } from 'react';
import FormComponent from './components/FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = new URLSearchParams();

    for (const key in formData) {
      if (typeof formData[key] === 'boolean') {
        if (formData[key]) query.append(key, 'on');
      } else if (formData[key] !== '') {
        query.append(key, formData[key]);
      }
    }

    window.location.href = `/?${query.toString()}`;
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
