Template.UserForm.helpers({

});

Template.UserForm.events({
    'submit': function (event) {
        event.preventDefault();
        var first_name = event.target.first_name.value;
        var last_name = event.target.last_name.value;
        var password = event.target.password.value;
        var email = event.target.email.value;

        var user = {
            first_name: first_name,
            last_name: last_name,
            password: password,
            email: email
        }

        event.target.first_name.value = "";
        event.target.last_name.value = "";
        event.target.password.value = "";
        event.target.email.value = "";
        console.log("User: ", user);
    }
});