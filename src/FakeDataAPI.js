const data = {
    
    account : {
        mxn: {
            disponible : 250000,
            invertido : 50000,
            demora : 10000
        },
        usd: {
            disponible : 2000,
            invertido : 0,
            demora : 0
        }
    },
    portafolio : [
         {
            fecha : '10-ago-18',
            plazo : '30',
            taza : '12%',
            monto : 50.0000,
            pagador: 'Ford Motor',
            estatus: 'En tiempo'
        },
         {
            fecha : '10-sep-18',
            plazo : '30',
            taza : '9%',
            monto : 50.0000,
            pagador: 'Ford Motor',
            estatus: 'En tiempo'
        },
        {
            fecha : '1-sep-18',
            plazo : '45',
            taza : '15%',
            monto : 50.0000,
            pagador: 'Ford Motor',
            estatus: 'En tiempo'
        },
        {
            fecha : '10-sep-18',
            plazo : '50',
            taza : '8%',
            monto : 50.0000,
            pagador: 'Ford Motor',
            estatus: 'En demora'
        },
    ],
    inversiones:{
        automotriz:40,
        inmobiliaria:20,
        ganaderia:15,
        financieras:15,
        construccion:15
    },
    rendimiento:{
        enero: 20,
        febrero: 30,
        marzo: 15,
        abril: 39,
        mayo: 45,
        junio: 46
    },
    proyeccion:{
        MercadoFacturas : '20%',
        Banco: 3.2
    }
}

export default data;

