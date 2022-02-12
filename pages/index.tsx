import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
    <Hero/>
    <Nav/>
    </>
  )
}

export default Home
