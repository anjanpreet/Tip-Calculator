function Service({ option, setOption, children }) {
  return (
    <>
      <label for="service1">{children}</label>
      <select
        value={option}
        onChange={(e) => setOption(Number(e.target.value))}
      >
        <option value="5">It was bad(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was tasty(20%)</option>
        <option value="25">It was finger licking good(25%)</option>
      </select>
    </>
  );
}

export default Service;
