import 'reflect-metadata';
import {connect} from './config/typeorm';
import {startServer} from './app';

async function principal(){
    connect();
    const app = await startServer();
    app.listen(5000);
    console.log("Server on port", 5000);
}

principal();