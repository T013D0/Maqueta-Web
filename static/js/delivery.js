const regions = [
  {
    label: "Region Metropolitana",
    value: "RM",
  },
  {
    label: "Valparaiso",
    value: "VA",
  },
  {
    label: "Arica y Parinacota",
    value: "AP",
  },
  {
    label: "Tarapacá",
    value: "TA",
  },
  {
    label: "Antofagasta",
    value: "AN",
  },
  {
    label: "Atacama",
    value: "AT",
  },
  {
    label: "Coquimbo",
    value: "CO",
  },
  {
    label: "O'Higgins",
    value: "OH",
  },
  {
    label: "Maule",
    value: "MA",
  },
  {
    label: "Ñuble",
    value: "NU",
  },
  {
    label: "Biobío",
    value: "BI",
  },
  {
    label: "Araucanía",
    value: "AR",
  },
  {
    label: "Los Ríos",
    value: "LR",
  },
  {
    label: "Los Lagos",
    value: "LL",
  },
  {
    label: "Aysén",
    value: "AY",
  },
  {
    label: "Magallanes",
    value: "MAG",
  },
];

$(document).ready(function () {
  const $regions = document.getElementById("region");
  regions.forEach((region) => {
    $regions.innerHTML += `<option value="${region.value}" id="${region.value}">${region.label}</option>`;
  });

  let ip;
  fetch("https://api.ipify.org/?format=json&callback=?").then(async (data) => {
    ip = await data.json().then((data) => data.ip);
    fetch(`http://ip-api.com/json/${ip}`).then(async (data) => {
      const location = await data.json();
      $("#city_field").prop("value", location.city);
      const region = regions.find((region) => region.value === location.region);
      $(`#${region.value}`).prop("selected", true);
    });
  });
});
