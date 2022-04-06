import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../button';

import {render} from '@testing-library/react';

import '@testing-library/jest-dom';

it ("render the button Component",()=>{

    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
   
})

it("if render comp correct",()=>{
   const {getByTestId} = render(<Button label="Click me here" ></Button>);
   expect (getByTestId('button')).toHaveTextContent("Click me here") 
})


it("if render comp correct",()=>{
    const {getByTestId} = render(<Button label="Click me here" ></Button>);
    expect (getByTestId('button')).toHaveTextContent("Button Label") 
 })