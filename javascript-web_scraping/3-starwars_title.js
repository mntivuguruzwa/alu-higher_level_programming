#!/usr/bin/node
// script that prints the title of a str war movie where the episode number matches a given integer.

const request = require('request');
const endPoint = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request({ url: endPoint, methods: 'GET' }, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(body && JSON.parse(body).title);
  }
});
