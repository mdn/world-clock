import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    offset: DS.attr('number')
});