import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, Search, Building2 } from 'lucide-react';
import { featured, sale, newlyAdded, rent, commercial } from '../data/properties';
import PropertyCard from '../components/properties/PropertyCard';
import { matchesBudget } from '../utils/budget';

export default function ListingPage({title,status}){
  const [keyword,setKeyword]=useState('');
  const [city,setCity]=useState('');
  const [type,setType]=useState('');
  const [budget,setBudget]=useState('');
  const pool=status==='Buy'? [...featured,...sale,...newlyAdded.filter(p=>p.status==='Buy')] : status==='Rent'?rent : status==='Commercial'?commercial : status==='Plots'?newlyAdded.filter(p=>p.status==='Plots') : [];
  const filtered=useMemo(()=>pool.filter(p=>{
    const q=(keyword+' '+city).trim().toLowerCase();
    const text=(p.title+' '+p.place).toLowerCase();
    return (!q||text.includes(q)) && (!type||p.type===type) && matchesBudget(p.price, budget);
  }),[keyword,city,type,budget,status]);
  return <main className="listing-page">
    <div className="breadcrumb-bar"><div className="container"><Link to="/">Home</Link><ChevronRight size={14}/><span>{title}</span></div></div>
    <div className="container listing-layout">
      <aside className="filter-card"><div className="filter-title"><SlidersHorizontal size={18}/><h3>Advanced Search</h3></div><h4>Filter</h4>
        <label><span>Keyword</span><input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="Search property"/></label>
        <label><span>City</span><select value={city} onChange={e=>setCity(e.target.value)}><option value="">Select City</option><option>Hyderabad</option><option>Karimnagar</option><option>Rangareddy</option><option>Bangalore</option></select></label>
        <label><span>Property Type</span><select value={type} onChange={e=>setType(e.target.value)}><option value="">Select Type</option><option>Apartment</option><option>Villa</option><option>Plot</option><option>Independent House</option><option>Commercial</option></select></label>
        <label><span>Budget</span><select value={budget} onChange={e=>setBudget(e.target.value)}><option value="">Any Budget</option><option value="below-25">Below 25 Lac</option><option value="25-50">25 - 50 Lac</option><option value="50-100">50 Lac - 1 Cr</option><option value="above-100">Above 1 Cr</option></select></label>
        <button className="filter-search"><Search size={17}/> Search</button>
        <div className="filter-divider"></div><h4>Categories</h4>
        {[['Apartment',125],['Builder Floor',5],['Indipendent House',20],['Villa',20],['Residential for Sale',170],['Residential for Rent',2],['Plots & Lands',664],['Commercial Properties',5],['PG-CoLiving',0]].map(([n,c])=><a className="filter-link" key={n}>{n}<span>({c})</span></a>)}
      </aside>
      <section className="results"><div className="results-head"><h1>{filtered.length} {title}</h1><select><option>Sort by: Latest</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div>
        <div className="listing-grid">{filtered.map(p=><PropertyCard key={p.id} p={p}/>)}</div>
        {!filtered.length&&<div className="empty"><Building2 size={42}/><h3>No properties found</h3><p>Try changing your filters.</p></div>}
      </section>
    </div>
  </main>
}
