const input = document.getElementById("num");
const label = document.getElementById("labl");
const h3 = document.querySelector("h3");

label.addEventListener("click", () => {
  const validSsn = (value) =>
    /^(?!(000|666|^9))(\d{3}-(?!(00))\d{2}-(?!(0000))\d{4})/.test(value)
      ? true
      : false;

  //=============
  const output = validSsn(input.value);
  if (output) {
    h3.innerText = `Entered SSN (${input.value}) is valid`;
    input.value = "";
  } else {
    h3.innerText = `SSN must be 11 character (9 numbers and two hypens)`;
    input.value = "";
  }
});
