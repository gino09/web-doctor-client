import '../styles/globals.css'
import '../styles/w3.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from 'react'
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import { ProtectRoute } from "../auth/auth-service"

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          setUser(null);
          return null;
        }
        const user = await res.json();
        console.log(user)
        setUser(user);
      });
    }

    setUser(user)
  }, [])
  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser
      }}
    >
      <ProtectRoute>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProtectRoute>
    </AppContext.Provider>
  )
}

export default MyApp