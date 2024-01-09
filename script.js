function addToDisplay(value) {
    if (value === 'backspace') {
      let currentValue = document.getElementById('display').value;
      document.getElementById('display').value = currentValue.slice(0, -1);
    } else {
      document.getElementById('display').value += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }