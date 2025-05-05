//Conteúdo: Object Type e Consulta
const { gql, ApolloServer } = require('apollo-server');

const usuarios = [
    { id: 1, name: "Raphael", idade: 18, salario: 1500.00, ativo: true, perfil: 2 },
        { id: 2, name: "Carla", idade: 25, salario: 3200.50, ativo: false, perfil: 1},
        { id: 3, name: "João", idade: 30, salario: 4000.00, ativo: true, perfil: 1 },
        { id: 4, name: "Mariana", idade: 22, salario: 2500.75, ativo: true, perfil: 1 },
        { id: 5, name: "Eduardo", idade: 35, salario: 5000.00, ativo: false, perfil: 2 }
]

const perfis = [
    {id: 1, name: "Cliente"},
    {id: 2, name: "Vendedor"}
]

const typeDefs = gql`

      type Produto {
        id: ID
        name: String
        valor: Float
      } 

    type Usuario {
        id: ID
        name: String
        idade: Int
        salario: Float
        ativo: Boolean
        perfil: Perfil
    }

    type Perfil {
        id: Int
        name: String
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
        usuario(id: Int): Usuario
        perfis: [Perfil]
    }
`

const resolvers = {
    Usuario:{
        perfil(obj){
            console.log(obj)
            return perfis.find((perfil) => perfil.id == obj.perfil)
        }
    },

    Query:{
       usuarios(){
        return usuarios
       },
    //    produtos(){
    //     return[
    //         { id: 101, name: "Notebook", valor: 3500.00 },
    //         { id: 102, name: "Smartphone", valor: 2200.50 },
    //         { id: 103, name: "Teclado Mecânico", valor: 450.00 },
    //         { id: 104, name: "Monitor 24''", valor: 899.99 },
    //         { id: 105, name: "Mouse Gamer", valor: 299.90 },
    
    //     ]
    //    },
       usuario(_, args){
        return usuarios.find((usuario) => usuario.id == args.id)
       },
       perfis(){
        return perfis
       }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()