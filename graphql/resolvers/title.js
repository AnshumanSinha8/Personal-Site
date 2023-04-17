/* Your resolver should connect your GraphQL API to the MySQL database by executing SQL commands
and returning the results as GraphQL objects. */


// Import PlanetScale client library:
const mysql = require('mysql2')

// Now need to create a mysql connection pool:
const pool = mysql.createPool({
    host: 'aws.connect.psdb.cloud',
    user: 'quxske7nq10kdiaonjre',
    password: 'pscale_pw_Bk19vV38QJiLAjt6jj71zDVcQhaN4xQK1lfCvlUAmxv',
    database: 'blog'
  });

// Define resolver function
const getTitlesByIdResolver = (parent, args, context, info) => {
    const { id } = args;
    // Use connection pool to query the database
    return new Promise((resolve, reject) => {
      pool.query('SELECT title FROM testPosts WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].title);
        }
      });
    });
  };

module.exports = {
    getTitlesById: getTitlesByIdResolver
  };