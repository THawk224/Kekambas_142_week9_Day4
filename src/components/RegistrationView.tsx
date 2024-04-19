import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

/**
 * Component for user registration.
 */
const RegistrationView: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    first_name: '',
    last_name: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const config = {
        method: 'post',
        url: 'https://cae-bookstore.herokuapp.com/user',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(formData)
      };
      const response = await axios(config);
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
      <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationView;
