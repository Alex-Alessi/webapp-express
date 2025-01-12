const connection = require("../db/conn");

function index(req, res) {
  const sql = `SELECT id, title, director, image 
  FROM movies`;
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: "KO",
        error: "Database query failed",
      });
    }

    res.json({
      status: "OK",
      movies: results,
    });
  });
}

function show(req, res) {
  const movieId = req.params.id;
  const sqlMovie = `SELECT id, title, director, image 
  FROM movies
  WHERE id=?`;

  connection.query(sqlMovie, [movieId], (err, results) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        status: "KO",
        error: "Database query failed",
      });
    }

    const [movie] = results;

    res.json({
      status: "OK",
      movies: results,
    });
  });
}
module.exports = { index, show };
