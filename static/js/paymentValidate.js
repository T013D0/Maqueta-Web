function validateForm() {
  if (document.getElementById("name_field").value == "") {
    alert("Nombre no puede estar vacio.");
    return false;
  }

  const ccLeng = /^[0-9]{15,16}$/;
  const ccinfo = document.getElementById("card_field");
  if (!ccLeng.test(ccinfo.value)) {
    alert(
      "Informacion de tarjeta de credito debe ser mayor a 15 y menor a 16."
    );
    return false;
  }
  const dateLeng = /^[0-9]{4}$/;
  const ccdate = document.getElementById("ed_field");
  if (!dateLeng.test(ccdate.value)) {
    alert("Fecha de vencimiento debe tener 4 caracteres.");
    return false;
  }
  const codeLeng = /^[0-9]{3}$/;
  const cccode = document.getElementById("cvv_field");
  if (!codeLeng.test(cccode.value)) {
    alert("Codigo CCV debe ser igual a 3 caracteres..");
    return false;
  }
}
