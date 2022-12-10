import React, { useState } from 'react'
import Layout from '../components/Layouts/Layout'
import FormSolicitudTarjeta from '../components/Tarjetas/FormSolicitudTarjeta'
import axios from 'axios'
import toastr from 'toastr'
import Router from 'next/router'

const SolicitudTarjeta = () => {

    const [errores, guardarErrores] = useState(null)

    let apellidoRef = React.createRef()
    let nombreRef = React.createRef()
    let dniRef = React.createRef()
    let telefonoRef = React.createRef()
    let mailRef = React.createRef()
    let rolRef = React.createRef()

    const enviarSolicitud = async () => {

        guardarErrores(null)

        const soli = {

            apellido: apellidoRef.current.value,
            nombre: nombreRef.current.value,
            dni: dniRef.current.value,
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


            await axios.post('/api/SolicitudTarjeta', soli)

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
            <FormSolicitudTarjeta
                apellidoRef={apellidoRef}
                nombreRef={nombreRef}
                dniRef={dniRef}
                telefonoRef={telefonoRef}
                mailRef={mailRef}
                rolRef={rolRef}
                enviarSolicitud={enviarSolicitud}
                errores={errores}
            />
        </Layout>
    )
}

export default SolicitudTarjeta