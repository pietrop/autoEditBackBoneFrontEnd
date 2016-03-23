var Backbone = require('backbone');
// var db = require('./db.json');
// var fs = require('fs');

console.log("API.js being called")

exports.getProjects = function () {
  var db = getdb();
  return db.projects;
}

exports.addProject = function (name) {
  var db = getdb();
  db.projects.push({name: name})
  savedb(db);
  // fs.writeFileSync(__dirname +'/db.json',JSON.stringify(db), 'utf8');

}




function getdb(){
  var db = JSON.parse(localStorage.db);
  return db;
}


function savedb(db){
  localStorage.db = JSON.stringify(db);
}
