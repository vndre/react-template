import { render, screen } from '@test-utils'
import { Welcome } from './Welcome'

describe('Welcome component', () => {
  it('has text', () => {
    render(<Welcome />)
    expect(screen.getByText('hi'))
  })
})
