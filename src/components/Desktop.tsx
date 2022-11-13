import windowsten from './Icons/windowsten.jpg';
import { useRef } from 'react';
import './Styling.css';
import MenuTaskBar from './MenuBar';
import AppIcon from './AppIcon';
export default function Desktop() {

  const mystyle = {
    backgroundImage: `url(${windowsten})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
  };
 
  return (
    <div style={mystyle} >
      <AppIcon />
      <MenuTaskBar />
    </div>

  );
}
