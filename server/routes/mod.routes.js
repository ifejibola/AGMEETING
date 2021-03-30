import express from 'express'
import modCtrl from '../controllers/mod.controller'
import auth from '../controllers/auth.controller'
const router = express.Router()

router.route('/api/mod/')
    .post(modCtrl.create)

router.route('/api/mod/:modId')
    .get(auth.requireSignin, modCtrl.read)


router.param('modId', modCtrl.modByID)

export default router