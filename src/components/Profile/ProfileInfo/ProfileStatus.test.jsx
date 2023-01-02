import React from 'react';
import ProfileStatus from './ProfileStatus';
import TestRenderer, {create} from "react-test-renderer";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = TestRenderer.create(<ProfileStatus status={'mabar'}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('mabar')
    })
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'mabar'}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test(`after creation input shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status={'mabar'}/>)
        const root = component.root
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType("input")
        }).toThrow()
    })
    test('after creation span should contains correct status', () => {
        const component = create(<ProfileStatus status={'mabar'}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span")
        expect(span.children[0]).toBe('mabar')
    })
    test('input should be displayed in editMode instead span', () => {
        const component = create(<ProfileStatus status={'mabar'}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span")
        span.props.onDoubleClick()
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input")
        expect(input.props.value).toBe('mabar')
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'mabar'} updateUserStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})

