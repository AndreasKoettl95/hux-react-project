import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Desktop} from "./Desktop";

export const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Desktop></Desktop>
        </DndProvider>
    );
}
