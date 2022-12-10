import excuteQuery from '../../config/db';
import moment from 'moment';

export default async function handlerSorteos(req, res) {

    const { method } = req

    if (method === "POST") {


        const soli = {

            apellido: req.body.apellido,
            nombre: req.body.nombre,
            dni: req.body.dni,
            obra_soc: req.body.obra_soc,
            mail: req.body.mail,
            telefono: req.body.telefono,
            socio: req.body.socio,
            nosocio: req.body.nosocio,
            referido: req.body.referido,

        }

        try {

            const result = await excuteQuery({
                query: `INSERT INTO solicitud_sorteo
                            (apellido, nombre, dni, mail, telefono, socio, nosocio, referido, fecha_solicitud, obra_soc) 
                            VALUES('${soli.apellido}', '${soli.nombre}', ${soli.dni}, '${soli.mail}', ${soli.telefono}, ${soli.socio}, ${soli.nosocio}, ${soli.referido}, '${moment().format('YYYY-MM-DD')}', '${soli.obra_soc}') `,

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