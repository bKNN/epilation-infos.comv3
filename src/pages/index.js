import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Accueil</Link> 
    <Link to="/centre-d-epilation/">Centre d'épilation</Link> 
    <Link to="/creme-epilation/">Crème d'épilation</Link> 
    <Link to="/epilateur/">Epilateur</Link> 
    <Link to="/epilation_visage/">Epilation visage</Link> 
    <Link to="/epilation-au-laser/">Epilation au laser</Link> 
    <Link to="/epilation-bikini/">Epilation bikini</Link> 
    <Link to="/epilation-caramel/">Epilation caramel</Link> 
    <Link to="/epilation-definitive-laser/">Epilation definitive laser</Link> 
    <Link to="/epilation-definitive/">Epilation definitive</Link> 
    <Link to="/epilation-dos/">Epilation dos</Link> 
    <Link to="/epilation-duvet/">Epilation duvet</Link> 
    <Link to="/epilation-electrique-definitive/">Epilation électrique définitive</Link> 
    <Link to="/epilation-electrolyse/">Epilation électrolyse</Link> 
    <Link to="/epilation-integrale/">Epilation intégrale</Link> 
    <Link to="/epilation-intime/">Epilation intime</Link> 
    <Link to="/epilation-jambe/">Epilation jambe</Link> 
    <Link to="/epilation-jambes/">Epilation jambes</Link> 
    <Link to="/epilation-lampe-flash/">Epilation lampe flash</Link> 
    <Link to="/epilation-laser/">Epilation laser</Link> 
    <Link to="/epilation-lazer/">Epilation lazer</Link> 
    <Link to="/epilation-lumiere-pulsee/">Epilation lumière pulsée</Link> 
    <Link to="/epilation-maillot/">Epilation maillot</Link> 
    <Link to="/epilation-masculine/">Epilation masculine</Link> 
    <Link to="/epilation-permanente/">Epilation permanente</Link> 
    <Link to="/epilation-sourcil/">Epilation sourcil</Link> 
    <Link to="/epilation-sourcils/">Epilation sourcils</Link> 
    <Link to="/epilation-torse/">Epilation torse</Link> 
    <Link to="/epilation-visage/">Epilation visage</Link> 
    <Link to="/tarif-epilation/">Tarif épilation</Link> 
  </Layout>
)

export default IndexPage
