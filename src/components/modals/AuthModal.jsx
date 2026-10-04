import React, { useState } from 'react';
import { X } from 'lucide-react';
import Logo from '../common/Logo';

export default function AuthModal({onClose}){
  const [mode,setMode]=useState('signin');
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="auth-modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-x" onClick={onClose}><X/></button><Logo/><h2>{mode==='signin'?'Sign In':'Create Account'}</h2>{mode==='signup'&&<><input placeholder="Name"/><input placeholder="Email Id"/></>}<input placeholder="Mobile Number"/>{mode==='signup'&&<><input type="password" placeholder="Password"/><input type="password" placeholder="Confirm Password"/></>}<button className="primary-btn full">{mode==='signin'?'Continue':'Sign Up'}</button>{mode==='signin'&&<><div className="or"><span></span>or<span></span></div><p className="terms-note">By clicking you agree to Terms and Conditions</p></>}<p className="auth-switch">{mode==='signin'?'New to CMN Housing?':'Already Registered?'} <button onClick={()=>setMode(mode==='signin'?'signup':'signin')}>{mode==='signin'?'Sign Up':'Sign In Now'}</button></p></div></div>
}
