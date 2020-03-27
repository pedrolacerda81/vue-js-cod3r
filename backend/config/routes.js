module.exports = app => {
    const appApi = app.api

    app.post('/signup', appApi.user.save)
    app.post('/signin', appApi.auth.signIn)
    app.post('/validateToken', appApi.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(appApi.user.save)
        .get(appApi.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(appApi.user.save)
        .get(appApi.user.getById)

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .post(appApi.category.save)
        .get(appApi.category.get)

    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(appApi.category.getTree)

    // Cuidado com a ordem! URL mais especificas devem vir antes

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .put(appApi.category.save)
        .get(appApi.category.getById)
        .delete(appApi.category.remove)

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .post(appApi.article.save)
        .get(appApi.article.get)

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .put(appApi.article.save)
        .get(appApi.article.getById)
        .delete(appApi.article.remove)

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(appApi.article.getByCategory)
}