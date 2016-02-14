
import React from 'react'
import ThemeList from './ThemeList'

class Root extends React.Component {
  render () {

    const themes = [
      'themes/bassdock',
      'themes/basscraft',
      'themes/monobass',
      'skull',
      'themes/bkln',
      'themes/hello',
      'themes/ctrl',
    ]

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Basscss Themes</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <link href='https://npmcdn.com/basscss@8.0.0-beta5/css/basscss.min.css' rel='stylesheet' />
          <link href='base.css' rel='stylesheet' / >
        </head>
        <body className='p3 lg-px4'>
          <header className='flex flex-wrap items-center py4'>
            <div>
              <h1 className='mt0'>Basscss Themes</h1>
              <a href='//github.com/basscss/themes' className='h6 bold caps color-inherit text-decoration-none'>GitHub</a>
            </div>
            <div className='py2 ml-auto'>
              <script
                id='_carbonads_js'
                async
                type='text/javascript'
                src='http://cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=basscsscom' />
            </div>
          </header>
          <ThemeList themes={themes} />
          <footer className='h5 flex py4'>
            <a href='http://basscss.com' className='h6 caps bold py1 color-inherit text-decoration-none'>basscss.com</a>
            <a href='http://jxnblk.com' className='h6 caps bold py1 ml-auto color-inherit text-decoration-none'>Made by Jxnblk</a>
          </footer>
        </body>
      </html>
    )
  }
}

export default Root
