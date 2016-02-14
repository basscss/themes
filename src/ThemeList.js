
import React from 'react'
import ThemeCard from './ThemeCard'

const ThemeList = ({ themes }) => (
  <main className='flex flex-wrap justify-start mxn3'>
    {themes.map(theme => (
      <div key={theme}
        className='col-12 sm-col-6 lg-col-4 xl-col-3 p3'>
        <ThemeCard theme={theme} />
      </div>
    ))}
  </main>
)

export default ThemeList

