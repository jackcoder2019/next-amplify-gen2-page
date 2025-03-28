//import { Amplify } from 'aws-amplify'
import { ThemeProvider, Divider} from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react'
import {signOut} from "aws-amplify/auth"

import {CarRentalNavBar}  from '../ui-components';

export default function Layout({ children }) {

  async function handleSignOut() {
    await signOut()
  }
  const navbarOverrides = {
    "image38601372" : {
      src: "https://img.icons8.com/?size=100&id=15126&format=png&color=000000"
    },
    "image3860799" : {
      src: "avatar1.png",
    }, 
    "Frame 321" : {
      justifyContent: "left",
    },
    "Button" : {
      children: "Sign Out",
      onClick: handleSignOut,
    }
  }

  return (
    <Authenticator>
    <ThemeProvider>
      <CarRentalNavBar overrides = {navbarOverrides} width="1440px" />      
      <Divider/>
      <main>{children}</main>
    </ThemeProvider>
    </Authenticator>
  )
}