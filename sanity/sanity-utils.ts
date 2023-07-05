import { createClient, groq } from "next-sanity";
import { Details } from "@/types/Details";
import { Images } from "@/types/Images";

import clientConfig from './config/client-config'

export async function getDetails() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "details"] {
      "selectedPackage": detailsField.selectedPackage,
      "selectedCar": detailsField.selectedCar,
      "price": detailsField.price
    }`
  );
}


export async function getImages(){
  return createClient(clientConfig).fetch(
    groq`*[_type == "images"] {
      title,
      slug,
      "image": image.asset->url,
      url,
    }`
  )
}

