import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.lg};
  max-width: 320px;
  margin: 0 auto;
`;

const Display = styled.div`
  background: ${props => props.theme.colors.background.tertiary};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.md};
  text-align: right;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

const Button = styled.button`
  background: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.text.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  grid-column: ${props => props.span ? `span ${props.span}` : 'span 1'};

  &:hover {
    background: ${props => props.theme.colors.background.primary};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const OperatorButton = styled(Button)`
  background: ${props => props.theme.colors.accent.blue};
  color: ${props => props.theme.colors.text.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  return (
    <CalculatorContainer>
      <Display>{display}</Display>
      <ButtonGrid>
        <Button onClick={() => clear()}>C</Button>
        <Button onClick={() => setDisplay(String(parseFloat(display) * -1))}>+/-</Button>
        <Button onClick={() => setDisplay(String(parseFloat(display) / 100))}>%</Button>
        <OperatorButton onClick={() => handleOperator('/')}>/</OperatorButton>

        <Button onClick={() => inputDigit('7')}>7</Button>
        <Button onClick={() => inputDigit('8')}>8</Button>
        <Button onClick={() => inputDigit('9')}>9</Button>
        <OperatorButton onClick={() => handleOperator('*')}>×</OperatorButton>

        <Button onClick={() => inputDigit('4')}>4</Button>
        <Button onClick={() => inputDigit('5')}>5</Button>
        <Button onClick={() => inputDigit('6')}>6</Button>
        <OperatorButton onClick={() => handleOperator('-')}>-</OperatorButton>

        <Button onClick={() => inputDigit('1')}>1</Button>
        <Button onClick={() => inputDigit('2')}>2</Button>
        <Button onClick={() => inputDigit('3')}>3</Button>
        <OperatorButton onClick={() => handleOperator('+')}>+</OperatorButton>

        <Button span={2} onClick={() => inputDigit('0')}>0</Button>
        <Button onClick={() => inputDecimal()}>.</Button>
        <OperatorButton onClick={() => handleOperator('=')}>=</OperatorButton>
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default Calculator;