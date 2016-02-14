
import React from 'react'

const ThemeCard = ({ theme }) => {
  const link = `http://basscss.com/${theme}`
  const title = theme.replace(/^themes\//, '')
  return (
    <div>
      <a href={link} className='ifx'
        title='View Theme'>
        <div className='ifx-inner'>
          <iframe src={link}
            tabIndex='-1'
            frameBorder='no'></iframe>
        </div>
      </a>
      <h3 className='h4 caps mb0'>
        <a href={link}
          className='color-inherit text-decoration-none'>
          {title}
        </a>
      </h3>
    </div>
  )
}

export default ThemeCard

