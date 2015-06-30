
import React from 'react'

class Index extends React.Component {

  render () {
    let cdn = this.props.cdn

    return (
      <div className='flex flex-wrap mxn2 py3'>
        {this.props.themes.map(function(theme, i) {
          return (
            <div key={i}
              className='col-6 md-col-4 border-box px2 mb4'>
              <a href={theme.url}
                className='block color-inherit'>
                <img src={cdn + theme.image}
                  className='border' />
                <h3 className='m0'>
                  {theme.title}
                </h3>
                <div>
                  {theme.description}
                </div>
              </a>
            </div>
          )
        })}
      </div>
    )
  }

}

export default Index

