// Generated by CoffeeScript 1.10.0
(function() {
  var Base, Checkout,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Base = require('./base');

  Checkout = (function(superClass) {
    extend(Checkout, superClass);

    Checkout.prototype.slug = "checkout";

    Checkout.prototype.prefix = "/checkouts";

    function Checkout(site) {
      Checkout.__super__.constructor.call(this, site);
    }

    return Checkout;

  })(Base);

  module.exports = Checkout;

}).call(this);