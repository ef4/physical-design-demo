import Ember from "ember";
var Velocity = Ember.$.Velocity;

export default function fade() {
  return Velocity.animate(this.oldElement, {opacity: 0}, { duration: 500 }).then(() => {
    return Velocity.animate(this.newElement, {opacity: [ 1, 0] }, { duration: 500, visibility: 'visible' });
  });
}
