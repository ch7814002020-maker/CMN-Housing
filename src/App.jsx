import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AuthModal from './components/modals/AuthModal';
import BiddingModal from './components/modals/BiddingModal';
import Home from './pages/Home';
import ListingPage from './pages/ListingPage';
import PropertyDetails from './pages/PropertyDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import StaticPage from './pages/StaticPage';

export default function App(){
  const [authOpen,setAuthOpen]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const [announceOpen,setAnnounceOpen]=useState(false);
  return <div className="app-shell">
    <Header onAuth={()=>setAuthOpen(true)} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
    <Routes>
      <Route path="/" element={<Home onBidding={()=>setAnnounceOpen(true)}/>}/>
      <Route path="/properties-to-buy" element={<ListingPage title="Properties to Buy" status="Buy"/>}/>
      <Route path="/properties-for-rent" element={<ListingPage title="Properties for Rent" status="Rent"/>}/>
      <Route path="/plots-and-lands" element={<ListingPage title="Plots & Lands" status="Plots"/>}/>
      <Route path="/commercial-properties" element={<ListingPage title="Commercial Properties" status="Commercial"/>}/>
      <Route path="/pg-coliving" element={<ListingPage title="PG / Co-Living" status="PG"/>}/>
      <Route path="/property/:id" element={<PropertyDetails/>}/>
      <Route path="/about-us" element={<AboutPage/>}/>
      <Route path="/contact-us" element={<ContactPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/terms-conditions" element={<StaticPage title="Terms & Conditions"/>}/>
      <Route path="/privacy-policy" element={<StaticPage title="Privacy Policy"/>}/>
    </Routes>
    <Footer onBidding={()=>setAnnounceOpen(true)}/>
    {authOpen && <AuthModal onClose={()=>setAuthOpen(false)}/>} 
    {announceOpen && <BiddingModal onClose={()=>setAnnounceOpen(false)}/>} 
  </div>
}
