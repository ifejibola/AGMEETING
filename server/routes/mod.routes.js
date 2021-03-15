import express from 'express'
import modCtrl from '../controllers/mod.controller'

const router = express.Router()

router.route('/api/mod/')
    .post(modCtrl.create)

export default router