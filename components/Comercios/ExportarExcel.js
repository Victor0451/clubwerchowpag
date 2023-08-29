import React from "react";
import { downloadExcel } from "react-export-table-to-excel";
import moment from "moment";

export default function ExportarPadron({ listado }) {
  let header = [];
  let body = [];
  let name = "";

  name = `Listado de Comercios Club Werchow - ${moment().format(
    "DD-MM-YYYY"
  )}.xls`;

  header = ["N°", "Localidad", "Comercio", "Rubro", "Direccion", "Beneficio"];

  listado.forEach((i) => {
    body.push({
      id: i.idcomercio,
      localidad: i.localidad,
      comercio: i.comercio,
      rubro: i.rubro,
      direccion: i.direccion,
      beneficio: i.beneficio,
    });
  });

  const descargarExcel = () => {
    downloadExcel({
      fileName: name,
      sheet: "Reporte",
      tablePayload: {
        header,
        // accept two different data structures
        body: body,
      },
    });
  };

  return (
    <button className="btn btn-success mr-3" onClick={descargarExcel}>
      Descargar Listado
    </button>
  );
}
