import React from "react"
import Head from "next/head"
import packageJson from "../../package.json"
import useMode from "../hooks/useMode"
import useUser from "../hooks/useUser"

const ControlPage = ({ children }) => {
  const { user } = useUser()
  const [mode] = useMode()

  return (
    <>
      <Head>
        <title>
          {mode?.label} {packageJson.description} ({user?.email})
        </title>
      </Head>
      <main
        className={"bp5-card " + (!mode?.clinical ? "bp5-dark" : "")}
        elevation={0}
        style={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: "1px",
          borderRadius: 0,
          boxShadow: "none",
          overflow: "auto",
        }}
      >
        {children}
      </main>
    </>
  )
}

export default ControlPage
