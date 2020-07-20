import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Header></Header>, div)
})

it("renders TodoInput correctly 1", () => {
	const {getByTestId} = render(<Header length='2'></Header>)
	expect(getByTestId('header')).toHaveTextContent("Todo Count: 2")
})

it("renders TodoInput correctly 2", () => {
	const {getByTestId} = render(<Header length='10'></Header>)
	expect(getByTestId('header')).toHaveTextContent("Todo Count: 10")
})

it("matches snapshot 1", () => {
	const tree = renderer.create(<Header length='10'></Header>).toJSON();
	expect(tree).toMatchSnapshot();
})

it("matches snapshot 2", () => {
	const tree = renderer.create(<Header length='2'></Header>).toJSON();
	expect(tree).toMatchSnapshot();
})
