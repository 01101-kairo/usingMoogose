const express = require('express')
const router = express.Router()
const controller = require('./../controllers/controller')

/*            REST
 *  (POST, GET, PUT, PATCH, DELETE)
 * */
// Create: post
router.post('/', controller.Create)
// Read  : get
router.get('/',controller.Read)
router.get('/:id',controller.oneRead)
// Update: put
router.put('/:id', controller.Update)
// Delete: delete
router.delete('/:id', controller.Delete)

module.exports = router
