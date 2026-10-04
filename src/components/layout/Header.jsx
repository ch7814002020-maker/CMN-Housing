import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, UserRound, Menu, X } from 'lucide-react';
import { categories } from '../../data/categories';
import Logo from '../common/Logo';

export default function Header({onAuth,mobileOpen,setMobileOpen}){
  return <>
    <div className="topbar"><div className="container topbar-inner"><span></span><a href="tel:+918185024365"><Phone size={14}/> +91 81850 24365</a></div></div>
    <header className="header"><div className="container header-inner">
      <Link to="/" className="brand-link"><Logo/></Link>
      <nav className={`nav ${mobileOpen?'open':''}`}>
        {categories.map(c=><NavLink key={c.path} to={c.path} onClick={()=>setMobileOpen(false)}>{c.label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <button className="signin" onClick={onAuth}><UserRound size={17}/> Sign In</button>
        <button className="post-property">Post Property Free</button>
        <button className="menu-btn" onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen?<X/>:<Menu/>}</button>
      </div>
    </div></header>
  </>
}
