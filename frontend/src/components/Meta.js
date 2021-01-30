import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'ZombMart',
  description: 'We have all the Zombie Apocalypse supplies you will ever need.',
  keywords: 'zombie, weapons, supplies, shop, apocalypse',
}

export default Meta