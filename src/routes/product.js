const express = require('express')
const products = require('../usecases/product')
// const authMiddleware = require('../middlewares/auth-middleware')

const router = express.Router()
// router.use(authMiddleware)//
// router.use(authMiddleware)

router.get('/', async (request, response) => {
  try {
    const allProduct = await products.getAll()

    response.json({
      success: true,
      data: allProduct
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const productCreated = await products.create(request.body)

    response.json({
      success: true,
      data: productCreated
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const productGet = await products.getById(request.params.id)

    response.json({
      success: true,
      data: productGet
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const productDeleted = await products.deleteById(request.params.id)

    response.json({
      success: true,
      data: productDeleted
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const {
      params: { id },
      body
    } = request
    const productUpdated = await products.updateById(id, body)

    response.json({
      success: true,
      data: productUpdated
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

module.exports = router
