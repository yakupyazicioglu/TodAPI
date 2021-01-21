const config = {
    databaseURL: "mongodb+srv://hazelnut:Yy112358@toddatas.bhbik.mongodb.net/todapp?retryWrites=true&w=majority",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    port: process.env.PORT || 4000,
}

module.exports = config;