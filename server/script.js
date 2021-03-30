
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'


import userRoutes from './routes/user.routes'
import modRoutes from './routes/mod.routes'
import modAuth from './routes/mod.auth.routes'
import db from '../models';
//SSR
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'


import devBundle from './devBundle'
//config
import devConfig from '../config/devConfig'
import config from '../config/devConfig'
import Template from '../template'
import MainRouter from '../client/MainRouter'
import css from '../styles.js'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'


const CURRENT_WORKING_DIR = process.cwd()

const server = express()

devBundle.compile(server)
// parse body params and attache them to req.body
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser())
server.use(compress())
// secure apps by setting various HTTP headers
server.use(helmet())
// enable CORS - Cross Origin Resource Sharing
server.use(cors())

server.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


server.use('/', userRoutes)
server.use('/', modRoutes)
server.use('/', modAuth)


server.get('*', (req, res, next) => {
    const sheet = new ServerStyleSheet()
    const context = {}

    const markup = ReactDOMServer.renderToString(


        <StaticRouter location={req.url} context={context}>
            <MainRouter />
        </StaticRouter>

    )
    if (context.url) {
        return res.redirect(303, context.url)
    }

    res.status(200).send(Template({
        markup: markup,
    }))

})
server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})
db.sequelize.sync().then(() => {

    console.log("Drop and re-sync db..")
    server.listen(devConfig.port, () => {
        // console.log('%s listening at %s', server.name, server.url);
        console.log(`Listening on port: ${devConfig.port}`);
    })
})