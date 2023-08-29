import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../components/Layouts/FilterComponent";
import ExportarPadron from "./ExportarExcel";

const ListadoComercios = ({ listado }) => {
  const columns = [
    {
      name: "ID",
      selector: (row) => `${row.idcomercio}`,
      sortable: true,
      grow: 0.1,
    },

    {
      name: "Localidad",
      selector: (row) => `${row.localidad}`,
      sortable: true,
      grow: 0.2,
    },

    {
      name: "Comercio",
      selector: (row) => `${row.comercio}`,
      sortable: true,
      grow: 0.3,
    },

    {
      name: "Direccion",
      selector: (row) => `${row.direccion}`,
      sortable: true,
      grow: 0.4,
    },

    {
      name: "Beneficio",
      selector: (row) => `${row.beneficio}`,
      sortable: true,
      grow: 0.8,
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = listado.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <ExportarPadron listado={listado} />

        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
      <br />
      <br />

      <section class="container mt-4 mb-4 p-4">
        <h2>Listado de Comercios Adheridos</h2>

        <div className="border border-secondary rounded p-1 mt-4">
          <DataTable
            //title="Comercios"
            columns={columns}
            data={filteredItems}
            defaultSortField="name"
            striped
            pagination
            subHeader
            subHeaderComponent={subHeaderComponent}
          />
        </div>
      </section>
    </div>
  );
};

export default ListadoComercios;
