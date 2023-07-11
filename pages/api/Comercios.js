import excuteQuery from '../../config/db';
import moment from 'moment';

export default async function handlerSorteos(req, res) {

    const { method } = req

    if (method === "GET") {


        try {

            const result = await excuteQuery({
                query: `

                        SELECT *
                        FROM comercios
                        ORDER BY idcomercio ASC
                
                `,

            });

            if (result[0]) {

                res.json({
                    msg: "Listado Generado",
                    body: result
                })

            } else if (!result[0]) {

                res.json({
                    msg: "No se encontro comercios"
                })

            }

        } catch (error) {
            console.log(error);
        }
    }


}