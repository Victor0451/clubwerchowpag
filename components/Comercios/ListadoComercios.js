import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from "../../components/Layouts/FilterComponent";

const ListadoComercios = ({
    listado
}) => {

    const columns = [

        {
            name: "ID",
            selector: row => `${row.idcomercio}`,
            sortable: true,
            grow: 0
        },

        {
            name: "Comercio",
            selector: row => `${row.comercio}`,
            sortable: true,
            grow: 0.3
        },

        {
            name: "Rubro",
            selector: row => `${row.rubro}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Direccion",
            selector: row => `${row.direccion}`,
            sortable: true,
            grow: 0.2
        },

        {
            name: "Beneficio",
            selector: row => `${row.beneficio}`,
            sortable: true,
            grow: 0.4
        },


    ];

    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = listado.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        }

        return (

            <>
                <FilterComponent
                    onFilter={e => setFilterText(e.target.value)}
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
                <h2>
                    Listado de Comercios Adheridos
                </h2>

                <div className='border border-secondary rounded mt-4'>
                    <DataTable
                        // title="Listado de Clientes"
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
    )
}

export default ListadoComercios