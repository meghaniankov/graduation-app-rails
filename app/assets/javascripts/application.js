// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .


//= require jquery
//= require bootstrap-sprockets

$(document).ready(function(){

  // HIDE BUTONS ON START
  $('#congrats-container').hide()
  $('.card-text').hide()

  $('#hooray').on('click', function() {
    $('#congrats-container').show()
    $('#hooray').hide()
    $('#maddie').hide()
    $('#hooray').tooltip('hide')
  })

  $('#yes-maddie').on('click', function() {
    $('#maddie').show()
    $('#q1').hide()
  })

  $('#hooray').tooltip({
    trigger: 'manual'
  })

  $('#view-messages-btn').tooltip()

  $('#hooray').tooltip('hide');
    setTimeout(function(){ 
      $('#hooray').tooltip('show'); 
    }, 2000);

  $('.card-author').on('click', function() {
    $('.card-author').hide()
    $('.card-text').hide()
    $('#t-' + this.id).show()
  })

  $('.card-text').on('click', function() {
    $('.card-author').show()
    $('.card-text').hide()
  })



})
