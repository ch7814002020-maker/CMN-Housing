import { imagePool } from './images';

export const featured = [
  ['SAI S SKANDA ENCLAVE PREMIER PLOTS', 'MAKTHA MADHARAM, KADTHAL - SRISAILAM HIGHWAY, Hyderabad', '15 K', 2701, 'Plots', true],
  ['Bharathi Heights - 2 BHK Flat for Sale', 'Pocharam, Hyderabad', '52 Lac', 2277, 'Buy', true],
  ['Shree Swastik Vihar – Premium Plots for Sale in Indore', 'Sinhasa Dhar Road, Indore', '66 Lac', 2964, 'Plots', false],
  ['ANR Pride – 2 & 3 BHK Luxury Gated Apartments', 'Housing Board Colony, Karimnagar', '4.999 K', 3220, 'Buy', true],
  ['Mahaveer Crystal Garden 3 & 4 BHK Flats', 'Attapur, Hyderabad', '1.435 Cr - 4.676 Cr', 1927, 'Buy', true],
  ['Praakriti Villas | Luxury Gated in Beeramguda', 'Rameshwaram Banda, Hyderabad', '1.25 Cr', 5915, 'Buy', false],
  ['Bhavanika Residency – Modern 2 & 3 BHK Apartments', 'Katta Rampur, Karimnagar', '51.31 Lac - 78.10 Lac', 1562, 'Buy', true],
  ['Haven Riverside Villas - Luxury 4 BHK Gated Community', 'Kismatpur (Rajendra Nagar), Hyderabad', '6.5 Cr - 9.36 Cr', 1654, 'Buy', true],
  ['Fortune Water Front - Luxury Apartments by Haven', 'Kukatpally, Hyderabad', '1.425 Cr - 2.19 Cr', 2065, 'Buy', true],
  ['Skyline Luxury 3BHK Residences Near Manyata Tech Park', 'Rechanahalli, Bangalore', '2.12 Cr', 672, 'Buy', true],
].map((x,i)=>({ id:i+1,title:x[0],place:x[1],price:x[2],views:x[3],status:x[4],rera:x[5],type:x[4]==='Plots'?'Plot':i===7?'Villa':'Apartment',img:imagePool[i%imagePool.length]}));

export const newlyAdded = [
  ['HMDA plots in Tukkuguda Hyderabad','Tukkuguda, Exit 14 Inside ORR - Hyderabad, Hyderabad','72.96 Lac',17,'Plots',false],
  ['HMDA approved plots for sale in Hyderabad near Mansanpally','Ameerpet near Mansanpally Hyderabad, Hyderabad','43.16 Lac',22,'Plots',true],
  ['Plots For Sale in Kondurg','Kondurg, Rangareddy','20000 K',32,'Plots',true],
  ['Flats For Sale in Kukatpally','Kukatpally, Hyderabad','15 Cr',26,'Buy',false],
  ['Plots for sale in Vikarabad','Vikarabad, Vikarabad','30 Lac',28,'Plots',false],
  ['2 & 3 BHK flat for Sale @ Ameenpur, Chandanagar','Ameenpur, Hyderabad','56.25 Lac',172,'Buy',false],
  ['HMDA & RERA FINAL APPROVED open plots for sale','Maheshwaram, Hyderabad','44 Lac',37,'Plots',true],
  ['Vasudaika Henley Woods – Premium Villa Plots','Gollor - Hyderabad, ORR Exit 15 pedda golkonda, Hyderabad','72.50 Lac',75,'Plots',true],
  ['320 Squire Yard Open Villa Plots for Sale','Gollor, Muchinthal near ORR, Hyderabad','92.80 Lac',184,'Plots',true],
  ['Poladi Sathya Residency – Premium 2 BHK Flat','Jyothinagar, Karimnagar','38 Lac',185,'Buy',false],
  ['GV INFRA PROJECTS "Swarna – HMDA Approved Premium Plots"','SHADNAGAR BANGALORE HIGH WAY, Hyderabad','26,999/- per Squire Yard',207,'Plots',true],
].map((x,i)=>({id:101+i,title:x[0],place:x[1],price:x[2],views:x[3],status:x[4],rera:x[5],type:x[4]==='Plots'?'Plot':'Apartment',img:imagePool[(i+2)%imagePool.length]}));

export const sale = [
  ...newlyAdded.filter(x=>x.status==='Buy'),
  {id:301,title:'G + 1 House for Sale',place:'Moosapet, Hyderabad, Telangana, 500018, Hyderabad',price:'60 Lac',views:222,status:'Buy',rera:false,type:'Independent House',img:imagePool[8]},
  {id:302,title:'3 × 1-BHK Flats for Sale in Chinthakunta, Karimnagar',place:'Chintakunta, Karimnagar',price:'1.50 Cr',views:236,status:'Buy',rera:false,type:'Apartment',img:imagePool[9]},
  {id:303,title:'Premium Independent House | Ready to Move',place:'Green Woods Layout, Varanasi Road - 560036, Bangalore',price:'2 Cr',views:165,status:'Buy',rera:false,type:'Independent House',img:imagePool[10]},
  ...featured.slice(8,10),
];

export const rent = [
  {id:401,title:'Spacious East-Facing 3 BHK for Rent',place:'Nadergul, Hyderabad',price:'17 K',views:1142,status:'Rent',rera:false,type:'Apartment',img:'https://cmnhousing.com/images/properties/767c23430487b6c64d45b83d5d32e9a1-20260126_193234.jpg'},
  {id:402,title:'Flat for Rent',place:'Madhapur, Hyderabad, Telangana, 500081, Hyderabad',price:'',views:1662,status:'Rent',rera:false,type:'Apartment',img:'https://cmnhousing.com/images/properties/images/9ed0a90e1be843ace29ef0c62958afd920260126_193234.jpg'},
];

export const commercial = [
  {id:501,title:'Premium Auction Property for Sale in Yadadri Bhuvanagiri',place:'Yadadri–Bhuvanagir, Hyderabad',price:'',views:145,status:'Commercial',rera:false,type:'Commercial',img:imagePool[9]},
  {id:502,title:'Commercial Plots near Future City FCDA Office',place:'Nandiwanaparthy, Hyderabad',price:'1.60 Cr',views:728,status:'Commercial',rera:false,type:'Commercial',img:imagePool[10]},
  {id:503,title:'Commercial plots for sale in Futurecity, Mirkhanpet',place:'Mirkhanpet to Nandiwanaparthy near FCDA office - Futurecity, Hyderabad',price:'1.53 Cr',views:582,status:'Commercial',rera:false,type:'Commercial',img:imagePool[9]},
  {id:504,title:'Building for Sale Jubilee Hills',place:'Jubilee Hills, Hyderabad',price:'28 Cr',views:1847,status:'Commercial',rera:false,type:'Commercial',img:imagePool[5]},
  {id:505,title:'Commercial Space for Sale',place:'Sheelanagar, Visakhapatnam',price:'6.5 K',views:1913,status:'Commercial',rera:false,type:'Commercial',img:imagePool[3]},
  {id:506,title:'G+3 Commercial building for Sale',place:'Shadnagar, Rangareddy',price:'1.6 Cr',views:1492,status:'Commercial',rera:false,type:'Commercial',img:imagePool[10]},
];

export const allProperties = [...featured,...newlyAdded,...sale,...rent,...commercial];
