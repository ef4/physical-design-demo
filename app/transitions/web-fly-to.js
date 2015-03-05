import Ember from "ember";
var RSVP = Ember.RSVP;

export default function webFlyTo(opts={}) {
  if (!this.newElement) {
    return RSVP.resolve();
  } else if (!this.oldElement) {
    this.newElement.css({visibility: ''});
    return RSVP.resolve();
  }

  var oldOffset = this.oldElement.offset();
  var newOffset = this.newElement.offset();

  var initialState = {
    transform: 'translateX(0px) translateY(0px)',
    width: this.oldElement.width() + 'px',
    height: this.oldElement.height() + 'px'
  };

  var finalState = {
    transform: `translateX(${newOffset.left - oldOffset.left}px) translateY(${newOffset.top - oldOffset.top}px)`,
    width: this.newElement.width(),
    height: this.newElement.height()
  };

  return new RSVP.Promise((resolve) => {
    this.newElement.css({ visibility: 'hidden' });
    var animationRunner = this.oldElement[0].animate([
      initialState,
      finalState
    ], {
      duration: opts.duration || 500,
    });
    animationRunner.onfinish = () => {
      this.oldElement.css({ visibility: 'hidden' });
      this.newElement.css({ visibility: ''});
      resolve();
    };
  });
}
