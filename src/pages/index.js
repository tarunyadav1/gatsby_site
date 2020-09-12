import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

export default function Home() {
  return (
    <Layout>
      <div>Hello from Tarun Yadav</div>

      <Link to="/about">More about me</Link>
    </Layout>
  )
}
