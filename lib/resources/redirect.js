// Generated by CoffeeScript 1.10.0
(function() {
  var Base, Redirect,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Base = require('./base');

  Redirect = (function(superClass) {
    extend(Redirect, superClass);

    Redirect.prototype.slug = "redirect";

    Redirect.prototype.prefix = "/redirects";

    function Redirect(site) {
      Redirect.__super__.constructor.call(this, site);
    }

    return Redirect;

  })(Base);

  module.exports = Redirect;

}).call(this);