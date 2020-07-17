//-------------SPREAD OPERATOR--------------

const obj = {
    name: 'Pedro',
    age: 23,
    country: 'VE',
}

let {name, ...all} = obj //esto va a extraer el name y va a encapsular lo demas en un objeto, ojo, extraes lo que no necesitas, dejas lo que te importa
console.log(name, all) //así mostrará Pedro { age: 23, country: 'VE' }
console.log(all) //Así mostrará { age: 23, country: 'VE' }

//-------------ANIDAR OBJETOS-------------------------

const obj = {
    name: 'Pedro',
    age: 23,
}

const obj1 = {
    ...obj,
    country: 'VE',
}

console.log(obj1)

//-------------PROMISE.FINALLY-------------------------
//Podmos saber cuando ha terminado el llamado para ejecutar cierta lógica

const helloWorld = () => {
    return new Promise ( (resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('hello world!'), 3000)
        :reject(new Error('TEST ERROR'))
    } )
}

helloWorld()
    .then(response => console.log(response))
    .catch(reject => console.log(reject))
    .finally( () => console.log('Finalizado')) //Al final también va a mostrar esto en consola


//---------------------MANEJAR REJEXS------------------------------------
//Organizar fechas por año/mes/dia de forma separada 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //establecemos primero esa regla [cuales numeros] {cuantos valores}
const match = regexData.exec('2020-03-28')
const year = match[1] //Accede al primer grupo del reject
const month = match[2]//Accede al segundo grupo del reject
const day = match[3]//Accede al tercer grupo del reject

console.log(year, month, day) //mostrará 2020 03 28

