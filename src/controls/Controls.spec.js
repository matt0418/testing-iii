import React from 'react'
import Controls from './Controls'
import renderer from 'react-test-renderer'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'


describe('<Controls />', () => {
    it('Controls renders without crashing', () => {
        render(<Controls />)
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Controls></Controls>)
        expect(tree.toJSON()).toMatchSnapshot()
    })

    describe('buttons', () => {
        it('should render lock and close gate with false props for locked and closed', () => {
            const { getByText } = render(<Controls locked={false} closed={false}/>)
            const lockMessge = getByText(/lock gate/i)
            const openMessage = getByText(/close gate/i)
            expect(lockMessge && openMessage).toBeVisible()
        })
        it('should render lock and close gate with false props for locked and closed', () => {
            const { getByText } = render(<Controls locked={true} closed={true}/>)
            const lockMessge = getByText(/unlock gate/i)
            const openMessage = getByText(/open gate/i)
            expect(lockMessge && openMessage).toBeVisible()
        })
    })

})