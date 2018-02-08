const items = [-30, 20, 20]

const entradas = [
    {a: 0, b: 0},
    {a: 0, b: 1},
    {a: 1, b: 0},
    {a: 1, b: 1},
]

const [head, ...tail] = items

const operacion = function (x){
    return (x.a * tail[0]) + (x.b * tail[1])
}

let resultado = entradas
    .map((x) => {
        return  head + operacion(x)  > 0 ? 1 : 0
    })
    

console.log('resultado :', resultado) // => resultado : [0, 0, 0, 1]





