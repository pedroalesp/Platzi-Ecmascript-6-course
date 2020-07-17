//-------------------OBJECT.ENTRIES----------------------------
//Sirve para transformar un objeto a una matríz de datos

let data = {
    frontend: 'Pedro',
    backend: 'Gustavo',
    designer: 'Samuel'
}

const entries = Object.entries(data)

console.log(entries)
console.log(entries.length)

//--------------------------OBJECT.VALUES-------------------------------------------
//Convierte un objeto a un array, tomando en cuenta solo los valores

let data = {
    frontend: 'Pedro',
    backend: 'Gustavo',
    designer: 'Samuel'
}

const values = Object.values(data)

console.log(values)
console.log(values.length)

//----------------------------PADDING----------------------------------------------
//Transforma el valor de un string, añadiendo caracteres al principio o al final
//Recibe dos parámetros que son el numero total de caracteres que tendrá el string y los carcteres que queremos añadir

const string = 'hello'

console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(11, ' world'))
console.log('hola'.padEnd(11, ' mundo'))

//--------------------------ASYNC-AWAIT---------------------------------------
//Primero declaramos una promesa como siempre
const helloWorld = () => {
    return new Promise( (resolve, reject) => { //esta estructura es un if ternario
        (true)                                     //Condición
        ? setTimeout(() => resolve('hello world'), 3000) //Lógica que se ejecuta si se cumple la condición, que desemboca en el resolve (se cumple la promesa)
        :reject(new Error('TEST ERROR'))                //error si no se cumple la condición(por ende no se cumple la promesa, reject)
    })
}
//seguido, en una const declaramos otra función pero con la palabra reservada async, la cual indica que usará el async await
//Dentro va una const que contiene el await, el cual va a llamar a la promesa
//EL método await esperará a que se resuelva la promesa para mostrar el output
const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

//-----------------------------TRY- CATCH----------------------------------------
//En la mis a lógica se va a ir probando, dentro del try. Si hay algo que no coincide, caerá en el catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) { //Nota que el parámetro error puede tener cualquier nombre, lo importante es que está siendo ejecutado al caer en el catch
        console.log(error) //y está haciendo referencia al reject de la promesa
    }
}

anotherFunction()