import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Building2, ArrowRight, Home as HomeIcon, Landmark, Store, BadgeCheck, UserRound } from 'lucide-react';
import { categories } from '../data/categories';
import { featured, newlyAdded, sale, rent, commercial } from '../data/properties';
import { blogs } from '../data/blogs';
import PropertySection from '../components/properties/PropertySection';
import SectionHeading from '../components/common/SectionHeading';

export default function Home({onBidding}){
  const [tab,setTab]=useState('Buy');
  return <main>
    <section className="hero">
      <div className="hero-bg"/>
      <div className="container hero-inner">
        <h1>Want to bargain (bidding) for the best Price?</h1>
        <div className="hero-tabs">{categories.map(c=><button key={c.label} className={tab===c.label?'active':''} onClick={()=>setTab(c.label)}>{c.label==='PG/Co-Living'?'PG / Co-Living':c.label}</button>)}</div>
        <div className="search-panel">
          <h5>Search Properties {tab==='Buy'?'to Buy':tab==='Rent'?'for Rent':tab==='Plots & Lands'?'for Plots & Lands':tab==='Commercial'?'for Commercial':'for PG/Co-Living'}</h5>
          <div className="search-controls">
            <div className="input-wrap"><MapPin size={18}/><input placeholder="Search by City"/></div>
            <div className="input-wrap"><Building2 size={18}/><input placeholder="Search by City"/></div>
            <button><Search size={18}/> Search</button>
          </div>
          <div className="recent-cities"><span>New Properties Added in:</span>{['Hyderabad','Rangareddy','Yadadri Bhuvanagiri','Karimnagar','Sangareddy'].map(c=><a key={c}>{c}</a>)}</div>
        </div>
      </div>
    </section>

    <button className="farm-banner" onClick={onBidding}>
      <span>NATURE IS NOT A PLACE TO VISIT. IT IS HOME.</span>
      <strong>A Singoor Farmland & Resort</strong>
      <ArrowRight size={18}/>
    </button>

    <PropertySection title="Featured Properties" items={featured} />
    <PropertySection eyebrow="Newly Added" title="Properties" items={newlyAdded} soft />
    <PropertySection eyebrow="Sale" title="New Listed Residential Properties for Sale" items={sale} />

    <section className="section category-section"><div className="container">
      <SectionHeading eyebrow="Trending Categories" title="Explore Properties by Type"/>
      <div className="category-grid">
        {[
          ['For Sale','293 Properties','/properties-to-buy',HomeIcon],
          ['For Rent','2 Properties','/properties-for-rent',Building2],
          ['Plots & Lands','723 Properties','/plots-and-lands',Landmark],
          ['Commercial','6 Properties','/commercial-properties',Store],
        ].map(([t,n,path,Icon])=><Link className="type-card" to={path} key={t}><div className="type-icon"><Icon/></div><div><h3>{t}</h3><p>{n}</p><span>View All <ArrowRight size={14}/></span></div></Link>)}
      </div>
    </div></section>

    <PropertySection eyebrow="Rent" title="New Listed Properties for Rent" items={rent} compact />
    <PropertySection eyebrow="Commercial" title="Commercial Properties" items={commercial} />

    <section className="section services"><div className="container">
      <SectionHeading eyebrow="Our Services" title="How CMN Housing can help you"/>
      <div className="services-grid">
        {[
          ['Buy your dream home',HomeIcon,'Browse verified residential property options and shortlist your preferred homes.'],
          ['Easily Sell your home',BadgeCheck,'Post your property, connect with interested buyers and manage enquiries.'],
          ['Rent your home you love',Building2,'Explore rental properties and connect directly with property owners.'],
          ['Be partner with CMN Housing',UserRound,'Join the platform ecosystem and expand your real-estate reach.'],
        ].map(([t,Icon,d])=><div className="service" key={t}><div className="service-icon"><Icon/></div><h3>{t}</h3><p>{d}</p><a>Learn More <ArrowRight size={14}/></a></div>)}
      </div>
    </div></section>

    <section className="section blog-section"><div className="container">
      <SectionHeading eyebrow="Blog" title="Latest News & Articles"/>
      <div className="blog-grid">{blogs.map((b,i)=><article className="blog-card" key={b.title}><img src={b.img} alt=""/><div className="blog-body"><small>Real Estate</small><h3>{b.title}</h3><p>{b.text}</p><Link to="/blog">Read More <ArrowRight size={15}/></Link></div></article>)}</div>
      <div className="center"><Link to="/blog" className="outline-btn">View All</Link></div>
    </div></section>
  </main>
}
