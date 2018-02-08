const items = [13, 14, 15, 15, 15, 16, 17, 18, 20]

let totalitems = items.length

let media = items
    .reduce((a, b) => {
        return a + b
    }) / totalitems

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