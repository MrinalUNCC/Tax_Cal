import React from 'react';
import { useData } from './store';
import { handleInputChange } from './utils';

function PersonalDataForm() {
  const { setData } = useData();

  return (
    <form>
      <h2>Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          required
          onChange={(e) => handleInputChange(setData, 'personalData', 'name', e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          onChange={(e) => handleInputChange(setData, 'personalData', 'email', e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          required
          onChange={(e) => handleInputChange(setData, 'personalData', 'phone', e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
}

export default PersonalDataForm;