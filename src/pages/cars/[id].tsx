"use client"

import { useRouter } from 'next/router';
import {CarRentalCard} from "../../ui-components"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
//import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
//import { getCurrentUser } from 'aws-amplify/auth/server';
//import {savedCars} from "../../../amplify/data/Cars"
import { Amplify } from 'aws-amplify'
import outputs from "../../../amplify_outputs.json";

import React, { useState, useEffect, ReactElement } from 'react'
import {Car} from "../../../types/Car"
import { stringify } from 'querystring';
import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'

type ResponseData = {
  rentalCars: Car;
};

Amplify.configure(outputs, {ssr: true});

const client = generateClient<Schema>();


const CarDetail : NextPageWithLayout = () => {

/*  Todo: can we use get function to get the item? 
  const data = client.models.RentalCar.get({
        id: `${query_id}`,
      });
*/
  const router = useRouter();
  const [data, setData] = useState<ResponseData>();
  useEffect(() => {
    const query = router.query;
    const query_id = stringify(query).split('=')[1];
    const api_str = `/api/cars/${query_id}`;
  
    const fetchData = async () => {
      const response = await fetch( `${api_str}`);//"/api/cars/41598742-1b9c-4771-80ed-40706b692100")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    }
 
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <div>
      <CarRentalCard overrides = {{
          "image" : { src: data.rentalCars.imageUrl,},
          "$99 USD" : {children: `${"$"}${data.rentalCars.price}`,},
          "4bds 3 ba 2,530 sqft - Active" : {children: data.rentalCars.imageUrl,},
          "832 34th Ave, Seattle, WA 98122" : {children: data.rentalCars.description,},
           "Button" : { onClick : () => { 
              client.models.RentalCar.delete({id : data.rentalCars.id});
              router.push("/");
            }, },      
    }}/>
    </div>
  );
};
CarDetail.getLayout = function getLayout(page: ReactElement) {
    return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default CarDetail;

/* use server-side query

const CarDetail : NextPageWithLayout = () => {
  const router = useRouter();
  const query = router.query;
  const query_id = stringify(query).split('=')[1];
  let api_str=`/api/cars/${query_id}`;
  const [data, setData] = useState<ResponseData>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch( `${api_str}`);//"/api/cars/41598742-1b9c-4771-80ed-40706b692100")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    }
 
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <div>
      <CarRentalCard overrides = {{
          "image" : { src: data.rentalCars.imageUrl,},
          "$99 USD" : {children: `${"$"}${data.rentalCars.price}`,},
          "4bds 3 ba 2,530 sqft - Active" : {children: data.rentalCars.imageUrl,},
          "832 34th Ave, Seattle, WA 98122" : {children: data.rentalCars.description,},
           "Button" : { onClick : () => { 
              client.models.RentalCar.delete({id : data.rentalCars.id});
              router.push("/");
            }, },      
    }}/>
    </div>
  );
};
*/
/*
return (
  <div>
    <p>Query: {JSON.stringify(query)}</p>
  </div>
);
*/

/*
<p>{data.rentalCars.id}</p>  </div>

   <div>
      <ul>{rentalCars.map(rentalCar => <li key={rentalCar.id}><Link href={`/cars/${rentalCar.id}`}>${rentalCar.name}</Link></li>)}</ul> 
    </div>
 
        <CarRentalCard overrides = { 
        {
            "image" : { src: rentalCar.imageUrl,},
            "$99 USD" : {children: `${"$"}${rentalCar.price}`,},
            "4bds 3 ba 2,530 sqft - Active" : {children: rentalCar.id,},
            "832 34th Ave, Seattle, WA 98122" : {children: rentalCar.description,},
        }}/>

export async function getStaticProps(params) {

    const ret = await runWithAmplifyServerContext({
      nextServerContext: null,
      operation: (contextSpec) => client.models.RentalCar.get(contextSpec, {key: 'id'} )
    });
  
    return {
      props: { rentalCar: ret.json() },
    };
    
    const savedCar =  savedCars.find((p) => p.id === params.id);
  return {
    props: { savedCar},
  };
}
*/
/* savedCars == ok */
/*
export async function getStaticPaths() {
  const paths = savedCars.map((savedCar) => ({
    params: { id: savedCar.id },
  }))   
  return { paths, fallback: false }
}
  
interface CarProps {
  savedCar: Car;
}  
export const getStaticProps: GetStaticProps<CarProps> = async ({ params }) => {
  const savedCar = savedCars.find((p) => p.id === params?.id);
    
  if (!savedCar) {
    return { notFound: true };
  }
    
  return {
    props: { savedCar },
  };
};
  
const CarDetail = ({ savedCar }) => {

  return (
    <div>
        <Authenticator>
        <CarRentalCard overrides = { 
        {
            "image" : { src: savedCar.imageUrl,},
            "$99 USD" : {children: `${"$"}${savedCar.price}`,},
            "4bds 3 ba 2,530 sqft - Active" : {children: savedCar.id,},
            "832 34th Ave, Seattle, WA 98122" : {children: savedCar.description,},
    }}/>
        </Authenticator>
    </div>
  );
};

export default CarDetail;
*/