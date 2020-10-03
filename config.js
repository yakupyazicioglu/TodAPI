const config = {
    databaseURL: "mongodb+srv://hazelnut:Yy112358@mylibrary.dkpba.mongodb.net/BooksAPI?retryWrites=true&w=majority",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    port: process.env.PORT || 3000,
}

module.exports = config;