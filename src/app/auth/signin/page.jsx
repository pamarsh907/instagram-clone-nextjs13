import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from "../../components/header";

export default function SignIn(providers) {
  return (
    <>
      <Header/>
      <div>
        <img           
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image" 
        />
      </div>
    </>

  )
}


export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}