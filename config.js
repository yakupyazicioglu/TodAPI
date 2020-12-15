const config = {
    databaseURL: "mongodb+srv://hazelnut:Yy112358@toddatas.bhbik.mongodb.net/todapp?retryWrites=true&w=majority",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    port: process.env.PORT || 3003,
}

module.exports = config;