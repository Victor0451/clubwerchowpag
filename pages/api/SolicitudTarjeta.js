import excuteQuery from '../../config/db';
import moment from 'moment';

export default async function handlerTarjetas(req, res) {

    const { method } = req

    if (method === "POST") {


        const soli = {

            apellido: req.body.apellido,
            nombre: req.body.nombre,
            dni: req.body.dni,
            mail: req.body.mail,
            telefono: req.body.telefono,
            socio: req.body.socio,
            nosocio: req.body.nosocio,
            referido: req.body.referido,

        }

        try {

            const result = await excuteQuery({
                query: `INSERT INTO socios
                            (apellido, nombre, dni, mail, telefono, socio, nosocio, referido, fecha_solicitud) 
                            VALUES('${soli.apellido}', '${soli.nombre}', ${soli.dni}, '${soli.mail}', ${soli.telefono}, ${soli.socio}, ${soli.nosocio}, ${soli.referido}, '${moment().format('YYYY-MM-DD')}') `,

            });

            if (result) {
                res.json({
                    msg: "Solicitud Enviada",
                    body: result
                })
            }


        } catch (error) {
            console.log(error);
        }

        return soli;


    }


}