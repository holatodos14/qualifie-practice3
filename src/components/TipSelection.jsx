import React from 'react';

const TipSelection = ({ selectedTip, customTip, onTipChange, onCustomTipChange }) => (
  <>
    <h2>Select Tip %</h2>
    <ul>
      {[5, 10, 15, 25, 50].map(tp => (
        <li id={`percentage-${tp}`} key={tp}>
          <button type="button" onClick={() => onTipChange('tip', tp)} className={`percentage-button ${selectedTip === tp ? 'btn-active' : ''}`} value={tp}
          >
            {tp}%
          </button>
        </li>
      ))}
      <li>
        <input
          type="number"
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
          onChange={(e) => {
            onCustomTipChange(e.target.value);
            onTipChange('tip', parseFloat(e.target.value) || 0);
          }}
          value={customTip}
        />
      </li>
    </ul>
  </>
);

export default TipSelection;