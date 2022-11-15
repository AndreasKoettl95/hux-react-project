import React, {useState} from 'react';
import './AppCalculator.css';

export const AppCalculator = () => {

    const [formula, setFormula] = useState("");

    const onButtonClicked = (value: string) => {
        setFormula(formula + value);
    }

    const onSolveButtonClicked = () => {
        // I know calling eval is wrong. :)
        // eslint-disable-next-line no-eval
        setFormula(eval(formula));
    }

    const onClearButtonClicked = () => {
        setFormula("");
    }

    return (
        <div className="calculator-content">
            <input value={formula} />
            <div className="calculator-content-grid">
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("7")}}>7</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("8")}}>8</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("9")}}>9</button>
                <button className="calculator-content-operation-button" onClick={() => {onButtonClicked("/")}}>/</button>

                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("4")}}>4</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("5")}}>5</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("6")}}>6</button>
                <button className="calculator-content-operation-button" onClick={() => {onButtonClicked("*")}}>*</button>

                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("1")}}>1</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("2")}}>2</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("3")}}>3</button>
                <button className="calculator-content-operation-button" onClick={() => {onButtonClicked("-")}}>-</button>

                <button className="calculator-content-operation-button" onClick={onClearButtonClicked}>C</button>
                <button className="calculator-content-number-button" onClick={() => {onButtonClicked("0")}}>0</button>
                <button className="calculator-content-solve-button" onClick={onSolveButtonClicked}>=</button>
                <button className="calculator-content-operation-button" onClick={() => {onButtonClicked("+")}}>+</button>
            </div>
        </div>
    );
}
