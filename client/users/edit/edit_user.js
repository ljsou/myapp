Template.EditUser.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users_form');
    });
});

Template.EditUser.onRendered(function () {
  $('.modal-trigger').leanModal();
});


Template.EditUser.helpers({
    user: function () {
        var id = FlowRouter.getParam('id');
        return UsersForm.findOne({_id: id});
    }
});

Template.EditUser.events({
    'click .update': function (event) {
        event.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        //var password = event.target.password.value;
        var email = $('#email').val();
        console.log("update", first_name);
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
        FlowRouter.go('users');
    },

    'click .yes': function(event){
        event.preventDefault();
        Meteor.call('UsersForm.remove', {_id: FlowRouter.getParam('id')});
        FlowRouter.go('users');
    }
});