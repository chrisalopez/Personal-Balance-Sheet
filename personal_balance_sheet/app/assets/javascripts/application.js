function updateForm() {

var _income = parseInt(document.getElementById('income').value);
var exp1 = parseInt(document.getElementById('rent').value);
var exp2 = parseInt(document.getElementById('loans').value);
var exp3 = parseInt(document.getElementById('insurance').value);
var exp4 = parseInt(document.getElementById('utilities').value);
var exp5 = parseInt(document.getElementById('entertainment').value);
var exp6 = parseInt(document.getElementById('food').value);
var exp7 = parseInt(document.getElementById('misc').value);
var _balance = document.getElementById('balance');

if (!_income) {
  _income = 0
};
if (!exp1) {
  exp1 = 0
};
if (!exp2) {
  exp2 = 0
};
if (!exp3) {
  exp3 = 0
};
if (!exp4) {
  exp4 = 0
};
if (!exp5) {
  exp5 = 0
};
if (!exp6) {
  exp6 = 0
};
if (!exp7) {
  exp7 = 0
};

_balance.value = _income - (exp1 + exp2 + exp3 + exp4 + exp5 + exp6 + exp7);
};

function onload() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    document.getElementById("_month").innerHTML = n;
};

// _income.onblur = function() {

//   _balance = (0 - parseInt(this.value,10));
// };
// exp1.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// exp2.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// exp3.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// exp4.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// exp5.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// exp6.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// exp7.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };


// _balance.onblur = function() {
//   _balance = (parseInt(_balance,10) - parseInt(this.value,10));
// };
// function Calc(myform){
//   var enternumber1 = document.myform.monthly_income.value;
//   var enternumber1 = parseInt(enternumber1,10);
//     if(isNaN(enternumber1)){
//       alert(" Enter a valid number! ");
//       document.myform.monthly_income.value="";
//       document.myform.monthly_income.focus();
//     }else{
//       var enternumber2=document.myform.rent.value;
//       var enternumber2=parseInt(enternumber2,10);
//       if(isNaN(enternumber2)){
//         alert(" Enter a valid number! ");
//         document.myform.rent.value="";
//         document.myform.rent.focus();
//       }else
// document.myform.balance.value=enternumber1-enternumber2;}}

// This is a manifest file that'll be compiled into application.js, which will include all the files

// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
