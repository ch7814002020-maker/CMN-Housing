import React from 'react';
import SectionHeading from '../common/SectionHeading';
import PropertyCard from './PropertyCard';

export default function PropertySection({eyebrow,title,items,soft=false,compact=false}){
  return <section className={`section property-section ${soft?'soft':''}`}><div className="container"><SectionHeading eyebrow={eyebrow} title={title}/><div className={`property-row ${compact?'compact':''}`}>{items.map(p=><PropertyCard p={p} key={p.id}/>)}</div></div></section>
}
