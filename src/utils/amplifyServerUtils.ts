import { type Schema } from '../../amplify/data/resource';
import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { generateServerClientUsingReqRes } from '@aws-amplify/adapter-nextjs/api';
import amplifyConfig from '../../amplify_outputs.json';
export const { runWithAmplifyServerContext } = createServerRunner({
  config: amplifyConfig
});
export const reqResBasedClient = generateServerClientUsingReqRes<Schema>({
  config: amplifyConfig
});

/*
export const {
  runWithAmplifyServerContext,
  createAuthRouteHandlers,
} = createServerRunner({
  config: outputs,
  runtimeOptions: {
    cookies: {
      domain: '.localhost', // making cookies available to all subdomains
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    }
  }
});

*/

