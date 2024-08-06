function Bill({ bill, setBill }) {
  return (
    <>
      <label for="bill">How much was the bill ?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill((bill) => e.target.value)}
      />
    </>
  );
}
export default Bill;
