//Conteúdo: Scalar types {ID, String, Boolean, Float, Int}, Type Query e arrays


const { gql, ApolloServer } = require('apollo-server')

//Type Query
const typeDefs = gql`
    type Query {
        id: ID
        name: String
        idade: Int
        altura: Float
        ativo: Boolean
        tecnologias: [String!]!
    }
`
//O array não pode ser nulo, porém pode ser um array vazio, e obriga ser um array apenas de string

const resolvers = {
    Query:{
        name() {
            return "Erick";
        },
        idade(){
            return 18;
        },
        altura(){
            return 1.77;
        },
        ativo(){
            return true;
        },
        id(){
            return 12324
        },
        tecnologias(){ return ["Css", "JavaScript", "React"] } 
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()