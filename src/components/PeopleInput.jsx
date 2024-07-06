import React from 'react';

const PeopleInput = ({ value, onChange }) => (
  <>
    <h2>Number of People</h2>
    <div>
      <p className="error-message" style={{ display: value === '0' ? 'block' : 'none' }}>Can't be zero</p>
      <label htmlFor="input-people">
        <input id="input-people" className={`input-people ${value === '0' ? 'input-invalid' : ''}`} type="number" name="people" value={value} onChange={(e) => onChange('people', e.target.value)} placeholder="0"
        />
      </label>
    </div>
  </>
);

export default PeopleInput;