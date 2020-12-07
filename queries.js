const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "family",
  password: "vocisuj3",
  port: 5432,
});

const getScotts = (request, response) => {
  pool.query("SELECT * FROM scott", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// const getStudentById = (request, response) => {
//   const id = parseInt(request.params.studentId)

//   pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const searchStudent = (request, response) => {
//   const search = `%${request.query.search}%`;

//   pool.query('SELECT * FROM students WHERE firstname LIKE $1', [search], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getGradesById = (request, response) => {
//   const id = parseInt(request.params.studentId)

//   pool.query('SELECT grade FROM grades WHERE student_id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const createGrade = (request, response) => {
//   const { student_id, grade } = request.body

//   pool.query('INSERT INTO grades (grade, student_id) VALUES ($1, $2)', [grade, student_id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`Grade added successfully.`)
//   })
// }

// const createStudent = (request, response) => {
//   const { firstname, lastname } = request.body

//   pool.query('INSERT INTO students (firstname, lastname) VALUES ($1, $2)', [firstname, lastname], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`Student added successfully.`)
//   })
// }

module.exports = {
  getScotts,
};