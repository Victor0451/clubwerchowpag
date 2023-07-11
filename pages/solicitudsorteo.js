import React, { useState } from 'react'
import Layout from '../components/Layouts/Layout'
import FormSolicitudSorteo from '../components/Sorteos/FormSolicitudSorteo'
import axios from 'axios'
import toastr from 'toastr'
import Router from 'next/router'

const SolicitudSorteo = () => {

    const [errores, guardarErrores] = useState(null)

    let apellidoRef = React.createRef()
    let nombreRef = React.createRef()
    let dniRef = React.createRef()
    let telefonoRef = React.createRef()
    let obraSocRef = React.createRef()
    let mailRef = React.createRef()
    let rolRef = React.createRef()

    const enviarSolicitud = async () => {

        guardarErrores(null)

        const soli = {

            apellido: apellidoRef.current.value,
            nombre: nombreRef.current.value,
            dni: dniRef.current.value,
            obra_soc: obraSocRef.current.value,
            mail: mailRef.current.value,
            telefono: telefonoRef.current.value,
            socio: "",
            nosocio: "",
            referido: ""

        }

        if (soli.apellido === "") {

            guardarErrores("Debes ingresar tu apellido")

        } else if (soli.nombre === "") {

            guardarErrores("Debes ingresar tu nombre")

        } else if (soli.dni === "") {

            guardarErrores("Debes ingresar tu DNI")

        } else if (soli.obra_soc === "") {

            guardarErrores(`Debes ingresar tu obra social, en caso de no tener escribi "NO TENGO" `)

        } else if (soli.mail === "") {

            guardarErrores("Debes ingresar tu mail")

        } else if (soli.telefono === "") {

            guardarErrores("Debes ingresar un numero de telefono")

        } else if (rolRef.current.value === "no") {

            guardarErrores("Debes identificar si eres socio, no socio o referido")

        } else {

            let rol = rolRef.current.value

            if (rol === "1") {

                soli.socio = 1
                soli.nosocio = 0
                soli.referido = 0

            } else if (rol === "2") {

                soli.socio = 0
                soli.nosocio = 1
                soli.referido = 0

            } else if (rol === "3") {

                soli.socio = 0
                soli.nosocio = 0
                soli.referido = 1

            }


            await axios.post('/api/SolicitudSorteo', soli)

                .then(res => {

                    if (res.data.msg === "Solicitud Enviada") {

                        toastr.success("La solicitud se envio con exito", "ATENCION")

                        setTimeout(() => {
                            Router.push('/')
                        }, 1000);

                    }

                })
                .catch(error => {
                    console.log(error)
                })

        }


    }

    return (

        <Layout>
            <FormSolicitudSorteo
                apellidoRef={apellidoRef}
                nombreRef={nombreRef}
                dniRef={dniRef}
                telefonoRef={telefonoRef}
                obraSocRef={obraSocRef}
                mailRef={mailRef}
                rolRef={rolRef}
                errores={errores}
                enviarSolicitud={enviarSolicitud}
            />
        </Layout>
    )
}

export default SolicitudSorteo