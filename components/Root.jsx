
import React from 'react'
import css from 'basscss.github.io/css/base.css'
import Head from 'basscss.github.io/components/Head.jsx'
import Container from 'basscss.github.io/components/Container.jsx'
import Header from 'basscss.github.io/components/PageHeader.jsx'
import Footer from 'basscss.github.io/components/Footer.jsx'
import ga from 'basscss.github.io/data/ga'
import { CarbonAd } from 'blk'
import Index from './Index.jsx'

class Root extends React.Component {

  render () {
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
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }

}

export default Root

