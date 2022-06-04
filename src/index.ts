import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

let salary: number = Number(prompt("Ingrese su salario"));

if (salary > 25000) {
  console.log("No recibe aumento");
} else if (salary <= 25000 && salary >= 20000) {
  console.log("Recibe aumento del 5%");
} else if (salary <= 20000 && salary >= 15000) {
  console.log("Recibe aumento del 10%");
} else if (salary <= 15000) {
  console.log("Recibe aumento del 20%");
}
