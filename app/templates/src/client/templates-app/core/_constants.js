/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    <% if (appFirebase == 'yes') { %>.constant('firebaseURL', 'https://some.url.here') 
    <% } -%>
    .constant('moment', moment);
})();
