import Ember from "ember";
export default Ember.Component.extend({
  classNames: ['speakers-list-inner'],

  actions: {
    edit: function() {
      this.set('editorName', this.get('model.name'));
      this.set('editorBio', this.get('model.bio'));
      this.set('editing', true);
    },
    save: function() {
      this.set('model.name', this.get('editorName'));
      this.set('model.bio', this.get('editorBio'));
      this.set('editing', false);
    },
    cancel: function() {
      this.set('editing', false);
    }
  }
});
