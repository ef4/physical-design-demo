import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete: function(sponsor) {
      this.set('model', this.get('model').filter((s)=> s.id !== sponsor.id));
    }
  }
});
