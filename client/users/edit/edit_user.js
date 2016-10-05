Template.EditUser.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users_form');
    });
});

Template.EditUser.helpers({
    user: function () {
        var id = FlowRouter.getParam('id');
        return UsersForm.findOne({_id: id});
    }
});

Template.EditUser.events({
    'submit': function (event) {
        event.preventDefault();
        var first_name = event.target.first_name.value;
        var last_name = event.target.last_name.value;
        //var password = event.target.password.value;
        var email = event.target.email.value;

        var user_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                }
            }
        }

        //UsersForm.insert(user);
        Meteor.call('UsersForm.update', user_updated);

        event.target.first_name.value = "";
        event.target.last_name.value = "";
        //event.target.password.value = "";
        event.target.email.value = "";
        FlowRouter.go('users');
    }
});