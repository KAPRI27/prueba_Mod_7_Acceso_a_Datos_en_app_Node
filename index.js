const express = require('express')
const { Pool } = require('pg')

const pool = new Pool({connectionString:'pmaureira://pmaureira:M4ur3ir4!!Aa@localhost:5432/bancosolar'});
// Importamos la librería de PostgreSQL
//const { Client } = require("pg");
// Función para conectarnos a la base de datos
const connection = async () => {
  // Creamos una instancia de la clase Client
  const config = {
    user: 'pmaureira',
    host: 'localhost',
    database: 'bancosolar',
    password: 'M4ur3ir4!!Aa',
    port: 5432,
   }
  // Nos conectamos a la base de datos
  await pool.connect();

  // Realizamos una consulta a la base de datos
  const result = await pool.query("SELECT * FROM usuarios");
  // Mostramos el resultado de la consulta
  console.log(result.rows);
  // Cerramos la conexión a la base de datos
  await pool.end();
};

// Llamamos a la función connection
connection();


/*
//Edita el usuario 
const setInfoModal = (nombre, balance, id) => {
  $("#nombreEdit").val(nombre);
  $("#balanceEdit").val(balance);
  $("#editButton").attr("onclick", `editUsuario('${id}')`);
};

const editUsuario = async (id) => {
  const name = $("#nombreEdit").val();
  const balance = $("#balanceEdit").val();
  try {
    const { data } = await axios.put(
      `http://localhost:3000/usuario?id=${id}`,
      {
        name,
        balance,
      }
    );
    $("#exampleModal").modal("hide");
    location.reload();
  } catch (e) {
    alert("Algo salió mal..." + e);
  }
};

$("form:first").submit(async (e) => {
  e.preventDefault();
  let nombre = $("form:first input:first").val();
  let balance = Number($("form:first input:nth-child(2)").val());
  try {
    const response = await fetch("http://localhost:3000/usuario", {
      method: "post",
      body: JSON.stringify({
        nombre,
        balance,
      }),
    });
    $("form:first input:first").val("");
    $("form:first input:nth-child(2)").val("");
    location.reload();
  } catch (e) {
    alert("Algo salió mal ..." + e);
  }
});

$("form:last").submit(async (e) => {
  e.preventDefault();
  let emisor = $("form:last select:first").val();
  let receptor = $("form:last select:last").val();
  let monto = $("#monto").val();
  if (!monto || !emisor || !receptor) {
    alert("Debe seleccionar un emisor, receptor y monto a transferir");
    return false;
  }
  try {
    const response = await fetch("http://localhost:3000/transferencia", {
      method: "post",
      body: JSON.stringify({
        emisor,
        receptor,
        monto,
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (e) {
    console.log(e);
    alert("Algo salió mal..." + e);
  }
});

const getUsuarios = async () => {
  const response = await fetch("http://localhost:3000/usuarios");
  let data = await response.json();
  $(".usuarios").html("");

  $.each(data, (i, c) => {
    $(".usuarios").append(`
            <tr>
              <td>${c.nombre}</td>
              <td>${c.balance}</td>
              <td>
                <button
                  class="btn btn-warning mr-2"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onclick="setInfoModal('${c.nombre}', '${c.balance}', '${c.id}')"
                >
                  Editar</button
                ><button class="btn btn-danger" onclick="eliminarUsuario('${c.id}')">Eliminar</button>
              </td>
            </tr>
        `);

    $("#emisor").append(`<option value="${c.nombre}">${c.nombre}</option>`);
    $("#receptor").append(`<option value="${c.nombre}">${c.nombre}</option>`);
  });
};

const eliminarUsuario = async (id) => {
  const response = await fetch(`http://localhost:3000/usuario?id=${id}`, {
    method: "DELETE",
  });
  getUsuarios();
};

const getTransferencias = async () => {
  const { data } = await axios.get("http://localhost:3000/transferencias");
  $(".transferencias").html("");

  data.forEach((t) => {
    $(".transferencias").append(`
      <tr>
        <td> ${formatDate(t[4])} </td>
        <td> ${t[1]} </td>
        <td> ${t[2]} </td>
        <td> ${t[3]} </td>
      </tr>
    `);
  });
};

getUsuarios();
getTransferencias();

const formatDate = (date) => {
  const dateFormat = moment(date).format("L");
  const timeFormat = moment(date).format("LTS");
  return `${dateFormat} ${timeFormat}`;
};
formatDate();

*/