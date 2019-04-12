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
    <Link to="/">Accueil</Link><br />
    <Link to="/centre-d-epilation/">Centre d'épilation</Link><br />
    <Link to="/creme-epilation/">Crème d'épilation</Link><br />
    <Link to="/epilateur/">Epilateur</Link><br />
    <Link to="/epilation_visage/">Epilation visage</Link><br />
    <Link to="/epilation-au-laser/">Epilation au laser</Link><br />
    <Link to="/epilation-bikini/">Epilation bikini</Link><br />
    <Link to="/epilation-caramel/">Epilation caramel</Link><br />
    <Link to="/epilation-definitive-laser/">Epilation definitive laser</Link><br />
    <Link to="/epilation-definitive/">Epilation definitive</Link><br />
    <Link to="/epilation-dos/">Epilation dos</Link><br />
    <Link to="/epilation-duvet/">Epilation duvet</Link><br />
    <Link to="/epilation-electrique-definitive/">Epilation électrique définitive</Link><br />
    <Link to="/epilation-electrolyse/">Epilation électrolyse</Link><br />
    <Link to="/epilation-integrale/">Epilation intégrale</Link><br />
    <Link to="/epilation-intime/">Epilation intime</Link><br />
    <Link to="/epilation-jambe/">Epilation jambe</Link><br />
    <Link to="/epilation-jambes/">Epilation jambes</Link><br />
    <Link to="/epilation-lampe-flash/">Epilation lampe flash</Link><br />
    <Link to="/epilation-laser/">Epilation laser</Link><br />
    <Link to="/epilation-lazer/">Epilation lazer</Link><br />
    <Link to="/epilation-lumiere-pulsee/">Epilation lumière pulsée</Link><br />
    <Link to="/epilation-maillot/">Epilation maillot</Link><br />
    <Link to="/epilation-masculine/">Epilation masculine</Link><br />
    <Link to="/epilation-permanente/">Epilation permanente</Link><br />
    <Link to="/epilation-sourcil/">Epilation sourcil</Link><br />
    <Link to="/epilation-sourcils/">Epilation sourcils</Link><br />
    <Link to="/epilation-torse/">Epilation torse</Link><br />
    <Link to="/epilation-visage/">Epilation visage</Link><br />
    <Link to="/tarif-epilation/">Tarif épilation</Link> 
  </Layout>
)

export default IndexPage
