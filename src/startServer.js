import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
require('dotenv').config()

function startServer({ typeDefs, resolvers }) {

    const userDb = process.env.DB_USER;
    const userPass = process.env.DB_PASS;

    mongoose.connect(`mongodb+srv://${userDb}:${userPass}@cluster0.24uht.mongodb.net/api-graphQL?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const server = new ApolloServer({ typeDefs, resolvers })
    server.listen().then(({ url }) => console.log(` 🔥 Server started at ${url}`))
}

export default startServer;