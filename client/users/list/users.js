Template.Users.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users_form');
    });
});

Template.Users.helpers({
    users:function () {
        return UsersForm.find().fetch();
    }

});

Template.Users.events({

});