import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.suma.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.interval = new ReactiveVar(1);
});


Template.suma.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  interval() {
    return Template.instance().interval.get();
  }
});


Template.suma.events({

  'click .suma'(event, instance) {
    // increment the counter when button is clicked
    console.log("click suma");
    instance.counter.set(instance.counter.get() + instance.interval.get());
  },
  'click .resta'(event, instance) {
    // increment the counter when button is clicked
    console.log("click resta");
    instance.counter.set(instance.counter.get() - instance.interval.get());
  },
  'submit .set-interval'(event, instance){
		event.preventDefault();
		instance.interval.set(event.target.inter.value);
		console.log("interval: ", instance.interval.get());
		event.target.inter.value = "";
  }

});

