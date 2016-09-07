import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.suma.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.suma.helpers({

  counter() {
    return Template.instance().counter.get();
  },

});

Template.suma.events({

  'click .suma'(event, instance) {
    // increment the counter when button is clicked
    console.log("click suma");
    instance.counter.set(instance.counter.get() + 1);
  },
  'click .resta'(event, instance) {
    // increment the counter when button is clicked
    console.log("click resta");
    instance.counter.set(instance.counter.get() - 1);
  }

});

