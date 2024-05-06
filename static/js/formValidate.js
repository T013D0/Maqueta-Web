function validateForm() {
  const ncompleto = document.getElementById("ncompleto");
  if (ncompleto.value.length < 3) {
    alert("Nombre de usuario debe ser mayor a tres caracteres.");
    return false;
  }
  const rutLeng= /^[0-9]{7,8}$/;
    const rut = document.getElementById("rut");
    if (!rutLeng.test(rut.value)) {
      alert("Numero de rut debe ser menor a 8 y mayor o igual a 6.");
      return false;
    }
  const email = document.getElementById("email");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email.value)) {
    alert("Porfavor ingrese un correo electronico valido.");
    return false;
  }

  const passregex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const password = document.getElementById("password");
  if (!passregex.test(password.value)) {
    alert(
      "La contraseña debe tener al menos 8 caracteres.\n" +
        "Debe contener al menos una letra mayúscula.\n" +
        "Debe contener al menos una letra minúscula.\n" +
        "Debe contener al menos un número.\n" +
        "Debe contener al menos un caracter especial."
    );
    return false;
  }

  const password2 = document.getElementById("password2");
  if (password.value !== password2.value) {
    alert("Las contraseñas no coinciden.");
    return false;
  }
  return true;

}



