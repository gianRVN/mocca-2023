const express = require('express');
const router = express.Router();
const { authorize } = require('../middlewares/auth')
const Controller = require('../controller/moviesController');
const uploadMulter = require('../middlewares/multer');

router.get('/', Controller.getAllMovies);
router.get('/:id', Controller.getMovieDetail);
// router.use(authorize);
router.post('/', uploadMulter, Controller.addMovie)
router.put('/:id', Controller.editMovie)
router.put('/upload/:id', uploadMulter, Controller.uploadMoviePhoto)
router.delete('/:id', Controller.deleteMovie)


module.exports = router;