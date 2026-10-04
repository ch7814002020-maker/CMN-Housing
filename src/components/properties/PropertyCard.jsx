import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Eye } from 'lucide-react';

export default function PropertyCard({p}){
  return <Link to={`/property/${p.id}`} className="property-card">
    <div className="property-img"><img src={p.img} alt={p.title}/><span className="status-badge">{p.status==='Buy'?'For Sale':p.status==='Plots'?'For Sale':p.status}</span>{p.rera&&<span className="rera-badge">Rera</span>}<button className="heart" onClick={e=>e.preventDefault()}><Heart size={17}/></button></div>
    <div className="property-info"><h3>{p.title}</h3><p className="property-location"><MapPin size={14}/>{p.place}</p><div className="price-row"><strong>{p.price || 'Price on Request'}</strong><span><Eye size={14}/> Views: {p.views}</span></div></div>
  </Link>
}
