

var connection = require("../config/connection.js");



var orm = {

  //Selecting everything within the table. tableInput is the table name:
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  insertOne: function(tableName, object, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [tableName, object], function(err, res){
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  
  updateOne: function(tableName, whatToUpdate, whereToUpdate, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";

    connection.query(queryString, [tableName, whatToUpdate, whereToUpdate], function(err, res){
      if (err){
        throw err;
      }
      
      cb(res);
    });
  }
};

module.exports = orm;