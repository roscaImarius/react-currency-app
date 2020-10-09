import React from "react";

function CurrencyRow(props) {
  const { currencyOptions,
          selectedCurrency,
          onChangeCurrency,
          amount,
          onChangeAmount
          } = props;
  return (
    <div>
      <input type="number" className="input"  value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;

// Hei Kyle, thank you for all the knowledge you share!
// I found out (at 16:15 ) that if I set the value={selectedCurrency} to <option>  instead 
// of <select> it works without onChangeHandeler
