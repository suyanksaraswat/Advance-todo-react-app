import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TodoInput></TodoInput>, div)
})

it("renders TodoInput correctly", () => {
	const {getByTestId} = render(<TodoInput></TodoInput>)
	expect(getByTestId('todoinput')).toHaveTextContent("Add New TodoPrioritylowestlowmediumhighemergencyDescriptionResponsibleSuyankAbhinavAshwiniDue DateAdd Todo")
})

it("matches snapshot", () => {
	const tree = renderer.create(<TodoInput></TodoInput>).toJSON();
	expect(tree).toMatchSnapshot();
})
