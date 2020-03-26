module.exports = app => {
    const appApi = app.api

    app.route('/users')
        .post(appApi.user.save)
        .get(appApi.user.get)

    app.route('/users/:id')
        .put(appApi.user.save)
        .get(appApi.user.getById)

    app.route('/categories')
        .post(appApi.category.save)
        .get(appApi.category.get)

    app.route('/categories/tree')
        .get(appApi.category.getTree)

    // Cuidado com a ordem! URL mais especificas devem vir antes

    app.route('/categories/:id')
        .put(appApi.category.save)
        .get(appApi.category.getById)
        .delete(appApi.category.remove)

    app.route('/articles')
        .post(appApi.article.save)
        .get(appApi.article.get)

    app.route('/articles/:id')
        .put(appApi.article.save)
        .get(appApi.article.getById)
        .delete(appApi.article.remove)

    app.route('/categories/:id/articles')
        .get(appApi.article.getByCategory)
}