// common client side startup functions
"use client";
import { Amplify } from "aws-amplify";
//import { generateClient } from "aws-amplify/data";
//import type { Schema } from "../../amplify/data/resource";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs, {ssr: true});
//const client = generateClient<Schema>();

export default function ConfigureAmplifyClientSide() {
  return null;
}