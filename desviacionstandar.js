const items = [0, 2, 4, 5, 8, 10, 10, 15, 38]

let sumaitems = items.reduce((a, b) => {
    return a + b
})

let totalitems = items.length

let media = sumaitems / totalitems

let restamedia = items
    .map((x) => {
        return (x - media) * ( x - media)
    })
    .reduce((a, b) => {
        return a + b
    })

let varianza = restamedia / totalitems

let desviacionStandar = Math.sqrt(varianza)

console.log('Desviacion Standar : ', desviacionStandar)