import React from 'react';

const BillInput = ({ value, onChange }) => (
  <>
    <h2>Bill</h2>
    <label htmlFor="input-bill">
      <input  className="input-bill"  id="input-bill"  name="bill"  type="number"  value={value}  onChange={(e) => onChange('bill', e.target.value)}  placeholder="0"
      />
    </label>
  </>
);

export default BillInput;