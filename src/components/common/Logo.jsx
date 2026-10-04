import React from 'react';

export default function Logo({inverse=false}) {
  return <div className={`logo ${inverse?'inverse':''}`}>
    <div className="logo-house"><span className="roof"></span><span className="cmn">CMN</span></div>
    <div className="logo-copy"><b>HOUSING</b><small>Common Man New Housing</small></div>
  </div>
}
