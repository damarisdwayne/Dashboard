import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker';

type User = {
    name: string
    email: string
    created_at: string
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: { //gera dados em massa
            user: Factory.extend({
                name(i: number){
                    return `User ${i + 1}`
                },

                email(){
                    return faker.internet.email().toLowerCase()
                },

                createdAt(){
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server) { //dados fake para aplicação
            server.createList('user', 10)
        },

        routes() {
            this.namespace = 'api'
            this.timing = 750

            this.get('/users')
            this.post('/users')

            this.namespace = '' //reseta o endpoint para que possamos criar a apasta api em pages
            this.passthrough()
        }
    })

    return server
}