"use strict";

const searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

const loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
var weatherDescription = document.querySelector('#weatherDescription');
var weatherTemperature = weatherBox.lastElementChild;