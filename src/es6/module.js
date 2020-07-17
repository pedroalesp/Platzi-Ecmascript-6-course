const hello = () =>  'Hello!'

export default hello //Esta es la forma usada en es6 pero no funciona porque no está soportada en node lts

module.exports = hello //esta es la forma antigua pero segura