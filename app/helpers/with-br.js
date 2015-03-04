import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return value ? Ember.Handlebars.Utils.escapeExpression(value).replace(/\n/g, '<br>').htmlSafe() : '';
});
