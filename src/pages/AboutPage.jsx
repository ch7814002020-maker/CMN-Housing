import React from 'react';
import PageHero from '../components/common/PageHero';
import { imagePool } from '../data/images';

export default function AboutPage(){return <main><PageHero title="About Us"/><section className="section"><div className="container about-grid"><div><span className="orange-kicker">CMN HOUSING</span><h2>Property discovery with transparent bargaining</h2><p>CMN Housing is a real-estate marketplace focused on helping users discover, post, compare and negotiate property opportunities across residential, rental, plot and commercial categories.</p><p>The frontend clone preserves the public information architecture and interaction patterns while remaining independent from the original backend.</p></div><div className="about-image"><img src={imagePool[0]} alt=""/></div></div></section></main>}
