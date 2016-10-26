Template.Users.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('users_form');
    });
});

Template.Users.helpers({
    users:function () {
        return UsersForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Users.events({
	'click .add-user': function(event){
		console.log("add user");
		FlowRouter.go('user');
	}
});