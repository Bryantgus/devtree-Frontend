import DevTreeInput from '../components/DevTreeInput'
import { social } from '../data/social'
import { useState } from 'react'
import { isValidUrl } from '../utils'
import { toast } from 'sonner'

export default function LinkTreeView() {
  
  const [devTreeLinks, setDevTreeLinks] =  useState(social)

  const handleUrlChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = devTreeLinks.map( link => link.name === e.target.name ? {...link, url:e.target.value} : link)
    setDevTreeLinks(updatedLink)
  }

  const handleEnableLink = (socialNetwork: string) => {
    console.log(isValidUrl(socialNetwork));
    
    const updatedLinks = devTreeLinks.map(link => {
      if(link.name === socialNetwork) {
        if(isValidUrl(socialNetwork)) {
          return {...link, enabled: !link.enabled}
        } else {
          toast.error('URL no valida')
        }
      }
      return link
    })
    setDevTreeLinks(updatedLinks)    
  }

  return (
    <>
      <div className='space-y-5'>
        {devTreeLinks.map( item => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChanges={handleUrlChanges}
            handleEnableLink={handleEnableLink}
             />
        ))}

      </div>
    </>
  )
}
