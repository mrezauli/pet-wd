// Import all plugins
// import * as bootstrap from 'bootstrap';

import 'bootstrap'
import '../scss/custom.scss'

//import * as mdb from 'mdb-ui-kit'; // lib
//import { Input } from 'mdb-ui-kit'; // module

function showDatetime() {
    let today = new Date();
    let date = today.toDateString();
    let time = today.toTimeString();
    let dateTime = date + ' ' + time;
    document.getElementById("clock").innerHTML = dateTime;
    setTimeout(showDatetime, 1000);
}

showDatetime();

console.log('Hello world!');