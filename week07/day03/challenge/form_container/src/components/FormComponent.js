import React from 'react';
import './FormComponent.css';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Sample form</h1>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <br />

        <label>Select your destination</label>
        <br />
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="South Africa">South Africa</option>
          <option value="Mexico">Mexico</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Russia">Russia</option>
          <option value="South Korea">South Korea</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Morocco">Morocco</option>
        </select>
        <br />

        <label>Dietary restrictions:</label>
        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <br />

        <button type="submit">Submit</button>
      </div>

      <div className="result-container">
        <h2>Entered information:</h2>
        <p><em>Your name:</em> {formData.firstName} {formData.lastName}</p>
        <p><em>Your age:</em> {formData.age}</p>
        <p><em>Your gender:</em> {formData.gender}</p>
        <p><em>Your destination:</em> {formData.destination}</p>
        <p><em>Your dietary restrictions:</em></p>
        <p>**Nuts free : {formData.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {formData.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {formData.vegan ? "Yes" : "No"}</p>
      </div>
    </form>
  );
}

export default FormComponent;
