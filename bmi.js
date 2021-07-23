/* Bmi Calculator */
function bmi() {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var height = Number(document.getElementById('height').value);
  var weight = Number(document.getElementById('weight').value);
  var result = Number(document.getElementById('result').value); 
  var ideal = weight / (height/100 * height/100)
  var ideall= (ideal.toFixed(1));
  var resultBMI = document.createTextNode(name + "'s" + " BMI is " + ideall);
  var bmih1 = document.createElement('h2');
  bmih1.setAttribute('id', 'BmiCalculator');
  bmih1.appendChild(resultBMI);
  document.getElementById('result').appendChild(bmih1);
  console.log(ideall);
}
function remove() {
  document.getElementById('BmiCalculator').remove();
}