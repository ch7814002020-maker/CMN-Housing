import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { blogs } from '../data/blogs';

export default function BlogPage(){return <main><PageHero title="Blog"/><section className="section"><div className="container blog-grid blog-page-grid">{[...blogs,...blogs].map((b,i)=><article className="blog-card" key={i}><img src={b.img} alt=""/><div className="blog-body"><small>Real Estate</small><h3>{b.title}</h3><p>{b.text}</p><a>Read More <ArrowRight size={15}/></a></div></article>)}</div></section></main>}
