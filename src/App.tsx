import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Desktop} from "./Desktop";
import Settings from './components/settings/settings';
import Menu from './components/menu/menu';
import './App.css';

export const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Settings />
            <Desktop></Desktop>
        </DndProvider>
    );
}