const express = require('express')
const app = express()

app.set('port', process.env.PORT || 2000)

app.listen(app.get('port'), () => {

    console.info(`App ready on port ${app.get('port')}`)

})