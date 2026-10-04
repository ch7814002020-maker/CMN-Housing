import React from 'react';
import PageHero from '../components/common/PageHero';

export default function StaticPage({title}){return <main><PageHero title={title}/><section className="section"><div className="container legal"><h2>{title}</h2><p>This page is included to match the public navigation and frontend routing. Replace this placeholder with your approved legal copy before production deployment.</p></div></section></main>}
