import {Query, Resolver} from 'type-graphql'

@Resolver()
export class PingResolver {
    @Query(() => String)//arrow function
    ping() {
        return "Pong!";
    }
}