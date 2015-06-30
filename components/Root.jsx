
import React from 'react'
import css from 'basscss.github.io/css/base.css'
import Head from 'basscss.github.io/components/Head.jsx'
import Container from 'basscss.github.io/components/Container.jsx'
import Header from 'basscss.github.io/components/PageHeader.jsx'
import Footer from 'basscss.github.io/components/Footer.jsx'
import { CarbonAd } from 'blk'
import Index from './Index.jsx'

class Root extends React.Component {

  render () {
    //<head>
    //      <meta charSet='utf-8' />
    //      <title>{this.props.title}</title>
    //      <meta name='viewport' content='width=device-width,initial-scale=1' />
    //      <style dangerouslySetInnerHTML={{ __html: css }} />
    //</head>
    return (
      <html>
        <Head {...this.props} />
        <body>
          <Container wide>
            <Header {...this.props} />
            <div className='clearfix'>
              <CarbonAd />
            </div>
            <Index {...this.props} />
          </Container>
          <Footer {...this.props} wide />
        </body>
      </html>
    )
  }

}

export default Root

