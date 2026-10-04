import React from 'react';

export default function SectionHeading({eyebrow,title}){return <div className="section-heading">{eyebrow&&<span>{eyebrow}</span>}<h2>{title}</h2></div>}
