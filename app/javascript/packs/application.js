//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require activestorage


// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

var btn = document.getElementById('btn');
var modal = document.getElementById('modal');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
})

var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
})