import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('speakers');
  this.route('speaker', { path: '/speakers/:speaker_id' });
  this.route('sponsors');
});

export default Router;
