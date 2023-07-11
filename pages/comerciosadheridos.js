import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ListadoComercios from '../components/Comercios/ListadoComercios'
import Layout from '../components/Layouts/Layout'
import toastr from 'toastr'


const ComerciosAdheridos = () => {


    const [listado, guardarListado] = useState([])

    const taerListado = async () => {

        await axios.get(`/api/Comercios`)
            .then(res => {

                if (res.data.msg === "Listado Generado") {

                    guardarListado(res.data.body)

                } else if (res.data.msg === "No se encontro comercios") {

                    toastr.error("No se encontraron comercios registrados", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {

        taerListado()

    }, []);

    return (
        <Layout>
            <ListadoComercios
                listado={listado}
            />
        </Layout>
    )
}

export default ComerciosAdheridos