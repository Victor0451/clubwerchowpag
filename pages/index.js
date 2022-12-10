import React from 'react'
import Contacto from '../components/Home/Contacto'
import HomeScreen from '../components/Home/HomeScreen'
import Nosotros from '../components/Home/Nosotros'
import Servicios from '../components/Home/Servicios'
import Sorteos from '../components/Home/Sorteos'
import Layout from '../components/Layouts/Layout'

const Index = () => {
  return (
    <Layout>
      <HomeScreen />
      <Nosotros />
      <Servicios />
      <Sorteos />
      <Contacto />
    </Layout>
  )
}

export default Index