import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, MapPin, Bed, Bath, Square, Car, Check, UserRound } from 'lucide-react';
import { allProperties, featured } from '../data/properties';
import { imagePool } from '../data/images';

export default function PropertyDetails(){
  const {id}=useParams();
  const p=allProperties.find(x=>String(x.id)===id)||featured[1];
  return <main><div className="breadcrumb-bar"><div className="container"><Link to="/">Home</Link><ChevronRight size={14}/><span>Property Details</span></div></div>
    <div className="container property-detail">
      <div className="detail-main">
        <div className="detail-head"><div><h1>{p.title}</h1><p><MapPin size={16}/>{p.place}</p></div><div className="detail-price"><strong>{p.price||'Price on Request'}</strong><span>{p.type}</span></div></div>
        <div className="gallery"><div className="gallery-main"><img src={p.img} alt=""/></div><div className="gallery-side"><img src={imagePool[(p.id+1)%imagePool.length]} alt=""/><img src={imagePool[(p.id+3)%imagePool.length]} alt=""/></div><span className="photo-count">8 Photos</span></div>
        <div className="detail-box"><h2>Property Details</h2><div className="detail-facts">
          {[['Property Id',`CMNRS${String(p.id).padStart(8,'0')}`],['Property Status',p.status==='Rent'?'Rent':'Sale'],['Property Type',p.type],['Available From','October 2026'],['Age of Property','Newly Constructed'],['Posted By','Owner'],['Views',p.views],['Rera Id',p.rera?'P02400004765':'—']].map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}
        </div></div>
        <div className="detail-box"><h2>More Details</h2><div className="amenity-grid">
          {[[Bed,'No. of Bed Rooms','3'],[Bath,'No. of Bath Rooms','3'],[Square,'Built up Area','1850 sq.ft'],[Car,'Car Parking','Yes']].map(([Icon,k,v])=><div key={k}><Icon/><span>{k}</span><b>{v}</b></div>)}
        </div><p className="detail-copy">This frontend recreation mirrors the public property-detail layout and interaction pattern. Replace the demo listing data or connect your own API when backend integration is ready.</p></div>
        <div className="detail-box"><h2>Amenities</h2><div className="amenities">{['CCTV','Lift','Regular Water Supply','Gym','Kids Area','Garden','Rain Water Harvesting','Water Storage','Vaastu Compliant','InterCom','Fire Safety','Security Staff','Power Backup','Swimming Pool','Pet Allowed'].map(a=><span key={a}><Check size={14}/>{a}</span>)}</div></div>
      </div>
      <aside className="owner-card"><h3>Contact Owner</h3><div className="owner-avatar"><UserRound/></div><strong>Property Owner</strong><p>99xxxxxxxx</p><button className="primary-btn">Get Phone Number</button><button className="whatsapp-btn">Send Message</button></aside>
    </div>
  </main>
}
