Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: '404',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('home', {
        path: '/'
    });
    this.route('about');
    this.route('imprint');
});
