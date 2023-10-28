const { Movie } = require('../models')

class Controller {
    static async getAllMovies(_, res, next) {
        try {
            const allMovies = await Movie.findAll()

            res.status(200).json({ message: 'success', data: allMovies})
        } catch (err) {
            next(err)
        }
    }

    static async getMovieDetail(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findByPk(id)
            
            res.status(200).json({ message: 'success', data: movie})
        } catch (err) {
            next(err)
        }
    }

    static deleteMovie(req, res, next) {
        const { id } = req.params

        Movie.destroy({
            where: { id }
          })
        .then(() => {
            res.status(201).json({ message: 'movie deleted successfully' })
        }).catch(err => next(err))
    }

    static editMovie(req, res, next) {
        const { id } = req.params
        const { title } = req.body

        Movie.update({ title }, {
            where: {
              id
            }
        })
        .then(movie => {
            if (movie[0].length === 0) throw new Error;
            res.status(201).json({ message: 'movie edited successfully', movie })
        })
        .catch(err => next(err))
    }

    static addMovie(req, res, next) {
        // Movies.addMovie(req, (err, _) => {
        //     if(err) next(err)
        //     else res.status(201).json({ message: 'movie added successfully' });
        // });
    }

    static uploadMoviePhoto(req, res, next) {
        // Movies.uploadMovies(req, (err, _) => {
        //     if(err) next(err)
        //     else res.status(200).json({ message: 'photo uploaded successfully' });
        // });
    }
}

module.exports = Controller;