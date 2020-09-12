import React from "react"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <header></header>
    <main>{children}</main>
  </>
)

export default Layout
