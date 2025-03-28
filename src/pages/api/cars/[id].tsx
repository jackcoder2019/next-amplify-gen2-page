//import Head from "next/head";
//import { useRouter } from 'next/router';
//import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../../amplify/data/resource";
//import { Amplify } from 'aws-amplify'
//import amplifyConfig from "../../../../amplify_outputs.json";
import type { NextApiRequest, NextApiResponse } from 'next'
import { runWithAmplifyServerContext, reqResBasedClient} from '../../..//utils/amplifyServerUtils'
//Amplify.configure(amplifyConfig, {ssr: true});
//const client = generateClient<Schema>();
import { stringify } from 'querystring';

type ResponseData = {
  rentalCars: Schema['RentalCar']['type'];
};



export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  //let query = stringify(request.query).split('=')[1];
  //response.end(`Post: ${query}`)
  //const query_id = `${query}`;
  //stringify(query).split('=')[1];
  //let q_id_str = `${q_id}`
  //Console.log(q_id)
  /*
  const router = useRouter();
  const query = router.query;
  const query_id = stringify(query).split('=')[1];
 */
  const query = stringify(request.query).split('=')[1];
  const rentalCars = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      const { data: rentalCar } = await reqResBasedClient.models.RentalCar.get(contextSpec, 
        {id : query});
        //{id : "a03c5d75-60f6-404f-8e43-46251f9ca11c"});
      return rentalCar;
    },
  });
  //response.status(200).send({rentalCars});
  if (rentalCars) response.status(200).json({rentalCars});
}
