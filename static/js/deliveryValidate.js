function validateForm() {

const postalLeng= /^[0-9]{7}$/;
const postalcode = document.getElementById("postalcode");
if (!postalLeng.test(postalcode.value)) {
  alert("Numero postal debe tener 7 caracteres.");
  return false;
}



}
