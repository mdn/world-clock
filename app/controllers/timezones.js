import Ember from 'ember';

export default Ember.Controller.extend({
    /* create array of timezones with name & offset */
    init: function() {
        var timezones = [];
        for (var i in moment.tz._zones) {
          timezones.push({
            name: moment.tz._zones[i].name,
            offset: moment.tz._zones[i].offset[0]
          });
        }
        this.set('timezones', timezones);
        this._super();
      },
      selectedTimezone: null,
      actions: {
        /* save a timezone record to our offline datastore */
        add: function() {
          var timezone = this.store.createRecord('timezone', {
            name: this.get('selectedTimezone').name,
            offset: this.get('selectedTimezone').offset
          });
          timezone.save();
        },        
        /* delete a timezone record from our offline datastore */
        remove: function(timezone) {
          timezone.destroyRecord();
        }
      }
});
