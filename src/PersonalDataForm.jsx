import React from 'react';

function PersonalDataForm() {
  return (
    <form>
      <h2>Personal Information</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" required />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
}

export default PersonalDataForm;