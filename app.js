let name = prompt("Enter your Name: ");
let dist = prompt("Choose the City Name: ");

switch (dist) {
  case "Dhaka":
    document.write(`<h1>${dist}-> Abbe ${name}, tumi bala achoni ni </h1>`);
    break;
  case "Chittagong":
    document.write(`<h1>${dist}-> ${name}, Gom achoo ni </h1>`);
    break;
  case "Sylhet":
    document.write(`<h1>${dist}-> ${name}, kita khobor? bala achoni ni? </h1>`);
    break;
  case "Khulna":
    document.write(`<h1>${dist}-> ${name}, kiram achooo? </h1>`);
    break;
  default:
    document.write(`<h1>${dist}-> ${name} bhai, kon jelar apni? </h1>`);
    break;
}
