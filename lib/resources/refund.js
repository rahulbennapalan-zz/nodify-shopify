// Generated by CoffeeScript 1.10.0
(function() {
  var BaseChild, Metafields, Refund,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseChild = require('./base_child');

  Metafields = require('./metafield');

  Refund = (function(superClass) {
    extend(Refund, superClass);

    Refund.prototype.parent = "/orders";

    Refund.prototype.slug = "refund";

    Refund.prototype.child = "/refunds";

    function Refund(site) {
      Refund.__super__.constructor.call(this, site);
    }

    return Refund;

  })(BaseChild);

  module.exports = Refund;

}).call(this);