import Ember from "ember";
import { speakerList } from "./speakers";

export default Ember.Route.extend({
  model: function(params) {
    return speakerList.find((model) => model.id === params.speaker_id);
  }
});
