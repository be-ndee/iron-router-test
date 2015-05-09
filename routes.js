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

Router.route('/items/:_id', function () {
    var names = ['foo', 'bar', 'bla', 'blubb'];
    var name = 'default';
    if (0 <= this.params._id && this.params._id < names.length) {
        name = names[this.params._id];
    }
    this.render('items', {
        data: {
            name: name
        }
    });
});