// Test away!
import React from 'react'
import Display from './Display'
import renderer from 'react-test-renderer'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('<Display />', () => {
    it('Dashboard renders without crashing', () => {
        render(<Display />)
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Display></Display>)
        expect(tree.toJSON()).toMatchSnapshot()
    })

    describe('Display Panel', () => {
        it('closed turns red with true prop, and turns back to green with false prop', () => {
            const { getByText, rerender } = render(<Display closed={true}/>)
            const message = getByText(/closed/i)
            expect(message).toHaveClass('led red-led')

            rerender(<Display closed={false}/>)
            const newMessage = getByText(/open/i)
            expect(newMessage).toHaveClass('led green-led')
        })

        it('should render open and unlocked with false props', () => {
            const { getByText } = render(<Display closed={false}/>)
            const openMessage = getByText(/open/i)
            const unlockedMessage = getByText(/unlocked/i)
            expect(openMessage && unlockedMessage).toBeInTheDocument()
        })
        it('should render closed and locked with true props', () => {
            const { getByText } = render(<Display closed={true}/>)
            const closedMessage = getByText(/closed/i)
            const lockedMessage = getByText(/locked/i)
            expect(closedMessage && lockedMessage).toBeInTheDocument()
        })
    })
})
