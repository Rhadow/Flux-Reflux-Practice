'use strict';

jest.dontMock('../src/app/components/Input.js');

describe('Input Component', function() {
	var Input = require('../src/app/components/Input.js'),
	    React = require('react/addons'),
	    appActions = require('../src/app/actions/appActions.js'),
	    TestUtils = React.addons.TestUtils,
	    tree,
	    inputElements,
	    nameElement,
	    ageElement,
	    submitElement;

	tree = TestUtils.renderIntoDocument(
		/* jshint ignore:start */
		<Input />
		/* jshint ignore:end */
	);

	inputElements = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'input');
	nameElement = inputElements[0];
	ageElement = inputElements[1];
	submitElement = inputElements[2];

	beforeEach(function() {
		nameElement.getDOMNode().value = '';
		ageElement.getDOMNode().value = '';
		appActions.addUser.mockClear();
	});

	it('should keep user\'s input if the input format is wrong', function() {
		nameElement.getDOMNode().value = 'Tester';
		TestUtils.Simulate.click(submitElement);
		expect(nameElement.getDOMNode().value).toEqual('Tester');
		expect(ageElement.getDOMNode().value).toBeFalsy();
	});

	it('should clear user\'s input if the input formats are correct', function() {
		nameElement.getDOMNode().value = 'Tester';
		ageElement.getDOMNode().value = 27;
		TestUtils.Simulate.click(submitElement);
		expect(nameElement.getDOMNode().value).toEqual('');
		expect(ageElement.getDOMNode().value).toEqual('');
	});

	it('should send add user action with correct data when the inputs format are correct', function() {
		nameElement.getDOMNode().value = 'Tester';
		ageElement.getDOMNode().value = 27;
		TestUtils.Simulate.click(submitElement);
		expect(appActions.addUser).toBeCalledWith({
			name: 'Tester',
			age: 27
		});
	});
	
	it('should not send add user action when the inputs format are wrong', function() {
		nameElement.getDOMNode().value = 'Tester';
		ageElement.getDOMNode().value = 'wrong input';
		TestUtils.Simulate.click(submitElement);
		expect(appActions.addUser).not.toBeCalled();
	});
});