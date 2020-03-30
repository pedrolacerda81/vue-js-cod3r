const admin = require('./admin')

module.exports = app => {
    const appApi = app.api

    app.post('/signup', appApi.user.save)
    app.post('/signin', appApi.auth.signIn)
    app.post('/validateToken', appApi.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(appApi.user.save))
        .get(admin(appApi.user.get))

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(appApi.user.save))
        .get(admin(appApi.user.getById))

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .post(admin(appApi.category.save))
        .get(admin(appApi.category.get))

    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(appApi.category.getTree)

    // Cuidado com a ordem! URL mais especificas devem vir antes

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .put(admin(appApi.category.save))
        .get(appApi.category.getById)
        .delete(admin(appApi.category.remove))

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .post(admin(appApi.article.save))
        .get(admin(appApi.article.get))

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .put(admin(appApi.article.save))
        .get(appApi.article.getById)
        .delete(admin(appApi.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(appApi.article.getByCategory)

    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(appApi.stat.get)
}