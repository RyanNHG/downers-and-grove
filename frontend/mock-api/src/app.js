const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(process.env.PORT || 2001, function() {
    console.log(`JSON Mock API running on port ${process.env.PORT || 2001}`)
})