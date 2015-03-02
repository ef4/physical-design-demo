import Ember from "ember";
export default Ember.Controller.extend({
  actions: {
    shuffle: function() {
      this.get('model').forEach((person) => {
        person._randomPosition = Math.random();
      });
      this.set('model', this.get('model').sortBy('_randomPosition'));
    }
  }
});
