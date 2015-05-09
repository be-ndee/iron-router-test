Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: '404',
    loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'home'
});

Router.route('/about', {
    name: 'about',
    data: {
        name: 'Andreas Bissinger',
        year: 2015
    }
});

Router.route('/imprint', {
    name: 'imprint'
});
