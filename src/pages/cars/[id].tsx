"use client"

import { useRouter } from 'next/router';
import {CarRentalCard} from "../../ui-components"
import { generateClient } from "aws-amplify/data";
import "@aws-amplify/ui-react/styles.css";
import {savedCars} from "../../../amplify/data/Cars"
import { Amplify } from 'aws-amplify'
import outputs from "../../../amplify_outputs.json";

import React, { useState, useEffect, ReactElement } from 'react'
import {Car} from "../../../types/Car"
import { stringify } from 'querystring';
import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'


Amplify.configure(outputs, {ssr: true});

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
  
const CarDetail : NextPageWithLayout = ({ savedCar }) => {
  return (
    <div>
      <CarRentalCard overrides = { 
        {
            "image" : { src: savedCar.imageUrl,},
            "$99 USD" : {children: `${"$"}${savedCar.price}`,},
            "4bds 3 ba 2,530 sqft - Active" : {children: savedCar.imageUrl,},
            "832 34th Ave, Seattle, WA 98122" : {children: savedCar.description,},
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

