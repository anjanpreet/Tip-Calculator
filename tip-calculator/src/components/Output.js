function Output({ bill, option, friendOption }) {
  let avgTipPercentage = (option + friendOption) / 2;
  let calculatedTip = (avgTipPercentage / 100) * bill;
  console.log(calculatedTip);
  let totalBill = Number(bill) + Number(calculatedTip);
  return (
    <>
      <h1>The total bill is {totalBill}</h1>
    </>
  );
}

export default Output;
