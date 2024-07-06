import React from 'react';

const Results = ({ totals, onReset }) => {
  const isResetDisabled = totals.totalTip === 0 && totals.total === 0;

  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="tip-amount">{totals.totalTip.toFixed(2)}</span></h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="total">{totals.total.toFixed(2)}</span></h3>
        </div>
      </div>
      <button
        type="button"
        id="reset-button"
        className="reset-button"
        onClick={onReset}
        disabled={isResetDisabled}
        style={{ opacity: isResetDisabled ? 0.3 : 1 }}
      >
        RESET
      </button>
    </div>
  );
};

export default Results;