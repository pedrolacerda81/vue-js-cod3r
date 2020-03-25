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

    app.route('/categories/:id')
        .put(appApi.category.save)
        .get(appApi.category.getById)
        .delete(appApi.category.remove)
}