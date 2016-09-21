Template.Suma.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    this.interval = new ReactiveVar(1);
});


Template.Suma.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    interval() {
        return Template.instance().interval.get();
    }
});


Template.Suma.events({

    'click .suma'(event, instance) {
        // increment the counter when button is clicked
        console.log("click suma");
        var suma = parseInt(instance.counter.get()) + parseInt(instance.interval.get());
        instance.counter.set(suma);
    },
    'click .resta'(event, instance) {
        // increment the counter when button is clicked
        console.log("click resta");
        var resta = parseInt(instance.counter.get()) - parseInt(instance.interval.get());
        instance.counter.set(resta);
    },
    'submit .set-interval'(event, instance){
        event.preventDefault();
        instance.interval.set(event.target.inter.value);
        console.log("interval: ", instance.interval.get());
        event.target.inter.value = "";
    }

});