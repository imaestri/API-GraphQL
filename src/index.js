import startServer from './startServer'
import typeDefs from './graphQL/typeDefs'
import resolvers from './graphQL/resolvers'


startServer({ typeDefs, resolvers })

