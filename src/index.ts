import "reflect-metadata";
import express from 'express';
import "dotenv/config";
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './UserResolver';
import { CoursesResolver } from './CoursesResolver';
import { createConnection } from "typeorm";
import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import { User } from "./entity/User";
import { createAccessToken, createRefreshToken } from "./auth";
import { sendRefreshToken } from "./sendRefreshToken";
import cors from 'cors';

const ALLOW_ORIGIN = process.env.ORIGIN_URL || 'http://localhost:3000';

(async () => {
  const app = express();
  app.use(cors({
    credentials: true,
    origin: ALLOW_ORIGIN
  }));
  app.use(cookieParser());
  app.get('/', (_, res) => {
    res.send('Hello world testing!');
  });

  app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.jid;
    if(!token){
      return res.send({ok: false, accessToken: ''});
    }
    let payload:any = null;
    try{
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch(err){
      console.log(err);
      return res.send({ok: false, accessToken: ''});
    }

    // refresh_token is valid and we can send back the access_token
    const user = await User.findOne({id: payload.userId});
    if(!user){
      return res.send({ok: false, accessToken: ''});
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ok: true, accessToken: createAccessToken(user)});

  })

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, CoursesResolver]
    }),
    context: ({ req, res }) =>({ res, req }) 
  });

  apolloServer.applyMiddleware({app, cors:false});

  app.listen(4000, () => {
    console.log('express app running on port 4000');
  });
})();