"use client";

import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import '@aws-amplify/ui-react/styles.css'
import { Inter } from "next/font/google";
import { useState, useEffect, ReactElement } from "react";
import { generateClient } from "aws-amplify/data";
//import type { Schema } from "../../amplify/data/resource";
import {savedCars} from "../../amplify/data/Cars"
import { ThemeProvider, Divider} from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css";
//import {signOut} from "aws-amplify/auth"
import {AddCar, CarRentalCard}  from '../ui-components';
import {CarReviewCard, CarRentalNavBar}  from '../ui-components';
//import {SignInButton} from '../components/SignInButton';
import {Car} from "../../types/Car"
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs, {ssr: true});
//const client = generateClient<Schema>();

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const Page: NextPageWithLayout = () => {
 // return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
  /*
  Bugatti
  https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;
  */
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const addCarOverrides = {
      "TextField38601446" : {
        onChange : (event:any) => {
          setName (event.target.value);
        } 
      },
    "TextField38601447" : {
      onChange : (event:any) => {
        setPrice (event.target.value);
      } 
    },
    "TextField38601471" : {
      onChange : (event:any) => {
        setDescription (event.target.value);
      } 
    },
    "TextField38601445" : {
      onChange : (event:any) => {
        setImageUrl (event.target.value);
      } 
    },
    /*
    "Button" : {
      onClick : () => {
        client.models.RentalCar.create({
          name: name,
          price: price,
          description: description,
          imageUrl: imageUrl,
        });
      } 
    },
    */
  }

  const carRentalCardOverrides = {
    "image" : {
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;"
    },
    "$99 USD": {
      
    }
  }

  // Use the Layout component to wrap every page
  return (
/*
    <SignInButton/>
    <div>
      <Authenticator>
        <ThemeProvider >
          <CarRentalNavBar overrides = {navbarOverrides} width="1440px" />      
          <Divider/>
          <AddCar overrides = {addCarOverrides}/>
          <ul>{rentalCars.map(rentalCar => <li key={rentalCar.id}><Link href={`/cars/${rentalCar.id}`}>${rentalCar.name}</Link></li>)}</ul> 
      </ThemeProvider>
      </Authenticator>
  </div>
  */
 <div>
      <Divider/>
      <ul>{savedCars.map(savedCar => <li key={savedCar.id}><Link href={`/cars/${savedCar.id}`}>{savedCar.name}: {savedCar.description}</Link></li>)}</ul>

  </div>
    /*  <ul>{rentalCars.map(rentalCar => <li key={rentalCar.id}><Link href={`/api/cars/${rentalCar.id}`}>${rentalCar.name}</Link></li>)}</ul> 
      <Link href='api/hello'> Hello from server </Link>
    */
  /*    <AddCar overrides = {addCarOverrides}/>
    <ul>{savedCars.map(savedCar => <li key={savedCar.id}><Link href={`/cars/${savedCar.id}`}>{savedCar.name} </Link></li>)}</ul> 

  {rentalCars.map(rentalCar=> <CarRentalCard overrides = { 
    {
      "image" : { src: rentalCar.imageUrl,},
      
      "$99 USD" : {children: `${"$"}${rentalCar.price}`,},
      "4bds 3 ba 2,530 sqft - Active" : {children: rentalCar.id,},
      "832 34th Ave, Seattle, WA 98122" : {children: rentalCar.description,},
      "Button" : { onClick : () => { client.models.RentalCar.delete({id : rentalCar.id});}, },
      
    }}/>)} 
    */
  );
 
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page;
