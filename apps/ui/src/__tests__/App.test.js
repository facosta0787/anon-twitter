import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'

describe('App', () => {
  it('Renders tweet button', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/tweet !/i)
    expect(linkElement).toBeInTheDocument()
  })
})
