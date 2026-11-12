import { useDispatch,useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import Navbar from "./Navbar";
import "./ProductList.css";
const img=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`;
const categories=[
 {name:"Air Purifying Plants",plants:[
  {id:1,name:"Snake Plant",price:18,image:img("photo-1593691509543-c55fb32e5cee")},{id:2,name:"Peace Lily",price:22,image:img("photo-1593691509543-c55fb32e5cee")},{id:3,name:"Spider Plant",price:16,image:img("photo-1501004318641-b39e6451bec6")},{id:4,name:"Rubber Plant",price:28,image:img("photo-1545241047-6083a3684587")},{id:5,name:"Boston Fern",price:20,image:img("photo-1531058020387-3be344556be6")},{id:6,name:"Aloe Vera",price:14,image:img("photo-1509423350716-97f2360af8e4")} ]},
 {name:"Aromatic Plants",plants:[
  {id:7,name:"Lavender",price:19,image:img("photo-1497250681960-ef046c08a56e")},{id:8,name:"Rosemary",price:15,image:img("photo-1485955900006-10f4d324d411")},{id:9,name:"Mint",price:10,image:img("photo-1509423350716-97f2360af8e4")},{id:10,name:"Basil",price:12,image:img("photo-1585320806297-9794b3e4eeae")},{id:11,name:"Jasmine",price:24,image:img("photo-1487412912498-0447578fcca8")},{id:12,name:"Lemon Balm",price:13,image:img("photo-1485955900006-10f4d324d411")} ]},
 {name:"Low Maintenance Plants",plants:[
  {id:13,name:"ZZ Plant",price:26,image:img("photo-1463154545680-d59320fd685d")},{id:14,name:"Pothos",price:17,image:img("photo-1501004318641-b39e6451bec6")},{id:15,name:"Jade Plant",price:21,image:img("photo-1459411621453-7b03977f4bfc")},{id:16,name:"Chinese Evergreen",price:25,image:img("photo-1497250681960-ef046c08a56e")},{id:17,name:"Monstera",price:32,image:img("photo-1545241047-6083a3684587")},{id:18,name:"Cast Iron Plant",price:23,image:img("photo-1531058020387-3be344556be6")} ]}
];
export default function ProductList(){const dispatch=useDispatch();const items=useSelector(s=>s.cart.items);const added=id=>items.some(i=>i.id===id);return <div className="page"><Navbar/><main className="content"><h1 className="section-title">Our Houseplants</h1>{categories.map(c=><section key={c.name}><h2 className="category-title">{c.name}</h2><div className="product-grid">{c.plants.map(p=><article className="product-card" key={p.id}><img src={p.image} alt={p.name}/><h3>{p.name}</h3><p className="price">${p.price.toFixed(2)}</p><button className="action-button add" disabled={added(p.id)} onClick={()=>dispatch(addItem(p))}>{added(p.id)?"Added to Cart":"Add to Cart"}</button></article>)}</div></section>)}</main></div>}