const ventas = [
    {mes: 1, venta:7000},
    {mes: 2, venta:9000},
    {mes: 3, venta:5000},
    {mes: 4, venta:11000},
    {mes: 5, venta:10000},
    {mes: 6, venta:13000},
]

let sumatotal = ventas
    .map((element) => {
        return element.mes * element.venta
    })
    .reduce((a, b) =>{
        return a + b
    })

let sumaindices = ventas.reduce((a, b) => { return  a + b.mes }, 0)

let sumaventas = ventas.reduce((a, b) => {  return  a + b.venta }, 0)

let indicesalcuadrado = ventas.reduce((a, b) => { return  a + (b.mes ** 2) }, 0)

let sumaalcuadrado = sumaindices * sumaindices

let totalitems = ventas.length

let c = (totalitems * sumatotal) - (sumaventas * sumaindices) 

let d = (totalitems * indicesalcuadrado) - sumaalcuadrado

let pendiente = (c / d)

let mediaventas = sumaventas / totalitems

let mediaindices = sumaindices / totalitems

let interseccion = mediaventas - (pendiente * mediaindices)

let pronostico = interseccion + (pendiente * (++totalitems))

console.log('pronostico: ', pronostico) // => pronostico: 13066