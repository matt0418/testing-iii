// Test away
import React from 'react'
import Dashboard from './Dashboard'
import renderer from 'react-test-renderer'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

describe('<Dashboard />', () => {
    it('Dashboard renders without crashing', () => {
        render(<Dashboard />)
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard></Dashboard>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})