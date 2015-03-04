import Ember from "ember";
import { sponsorList } from "../sponsors";

export default Ember.Route.extend({
  model: function(params) {
    return sponsorList.find((model) => model.id === params.sponsor_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    sponsorList.forEach((sponsor) => Ember.set(sponsor, 'isActive', (sponsor === model)));
  }

});
