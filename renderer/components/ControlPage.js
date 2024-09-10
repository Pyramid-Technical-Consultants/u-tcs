import React from "react"
import Head from "next/head"
import packageJson from "../../package.json"
import useMode from "../hooks/useMode"
import useUser from "../hooks/useUser"
import styled from "styled-components"

import "@blueprintjs/core/lib/css/blueprint.css"

const ControlPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border-radius: 0;
  box-shadow: none !important;
  overflow: auto;
`

const ControlPage = ({ children, className }) => {
  const { user } = useUser()
  const [mode] = useMode()

  return (
    <>
      <Head>
        <title>
          {mode?.label} {packageJson.description} ({user?.email})
        </title>
      </Head>
      <ControlPageContainer
        className={
          "bp5-card " + (!mode?.clinical ? "bp5-dark" : "") + " " + className
        }
      >
        {children}
      </ControlPageContainer>
    </>
  )
}

export default ControlPage
