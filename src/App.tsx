import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Desktop1} from "./components/desktop/Desktop";
import './App.css';

export const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Desktop1></Desktop1>
        </DndProvider>
    );
}