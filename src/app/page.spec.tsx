import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Testing Home component', () => {

  it('should render docs in the document', () => {
    render(<Home />) // ARRANGE
    const myElement = screen.getByText('Docs') // ACT
    expect(myElement).toBeInTheDocument() // ASSERT
  })

    it('should have the text information in the document', () => {
      render(<Home />) // ARRANGE
      const myElement = screen.getByText(/information/i) // ACT
      expect(myElement).toBeInTheDocument() // ASSERT
    })

})
