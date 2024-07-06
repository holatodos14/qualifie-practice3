import React, { useEffect, useState } from 'react'
import BillInput from './components/BillInput'
import TipSelection from './components/TipSelection'
import PeopleInput from './components/PeopleInput'
import Results from './components/Results'

const empty_values = {
  bill: '',
  people: 1,
  tip: 0,
};

const empty_totals = {
  totalTip: 0,
  total: 0,
};

export default function App() {
  const [values, setValues] = useState(empty_values);
  const [totals, setTotals] = useState(empty_totals);
  const [customTip, setCustomTip] = useState('');

  const resetAll = () => {
    setValues(empty_values);
    setTotals(empty_totals);
    setCustomTip('');
  };

  const computeTotals = () => {
    const { tip, bill, people } = values;

    if (tip !== 0 && bill !== '' && people !== '' && parseFloat(people) > 0) {
      const totalTip = (parseFloat(bill) * (tip / 100)) / parseFloat(people);
      const total = (parseFloat(bill) / parseFloat(people)) + totalTip;

      setTotals({ totalTip, total });
    } else {
      setTotals(empty_totals);
    }
  };

  useEffect(() => {
    computeTotals();
  }, [values]);

  const handleValues = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <header><img src="./images/logo.svg" alt="" /></header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <BillInput value={values.bill} onChange={handleValues} />
          <TipSelection  selectedTip={values.tip}  customTip={customTip} onTipChange={handleValues} onCustomTipChange={setCustomTip}
          />
          <PeopleInput value={values.people} onChange={handleValues} />
        </div>
        <Results totals={totals} onReset={resetAll} />
      </div>
    </>
  );
}