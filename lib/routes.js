FlowRouter.route('/',{
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/test',{
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});

FlowRouter.route('/suma',{
    name: 'suma',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Suma'});
    }
});

FlowRouter.route('/user',{
    name: 'user',
    action() {
        BlazeLayout.render('MainLayout', {main: 'User'});
    }
});