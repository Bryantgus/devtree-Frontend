import DevTreeInput from '../components/DevTreeInput'
import { social } from '../data/social'
import { useEffect, useState } from 'react'
import { isValidUrl } from '../utils'
import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfile } from '../api/DevTreeApi'
import { User, SocialNetwork } from '../types'

export default function LinkTreeView() {
  
  const [devTreeLinks, setDevTreeLinks] =  useState(social)
  const queryClient = useQueryClient()
  const user : User = queryClient.getQueryData(['user'])!

  const { mutate} = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      toast.success('Actualizado Correctamente')
    }
  })


  const handleUrlChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = devTreeLinks.map( link => link.name === e.target.name ? {...link, url:e.target.value} : link)
    setDevTreeLinks(updatedLink)

   
  }


  const handleEnableLink = (socialNetwork: string) => {
    const updatedLinks = devTreeLinks.map(link => {
      if(link.name === socialNetwork) {
        if(isValidUrl(link.url)) {
          return {...link, enabled: !link.enabled}
        } else {
          toast.error('URL no Valida')
        }
      }
      return link
    })
    setDevTreeLinks(updatedLinks)    
    queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLinks),
      }
    })
  }

  useEffect(()=> {
    const updateData = devTreeLinks.map( item => {
      const userLink = JSON.parse(user.links).find((link : SocialNetwork) => link.name === item.name)
      if (userLink) {
        return {
          ...item, url: userLink.url, enabled: userLink.enabled
        }
      }
      return item
    })
    setDevTreeLinks(updateData)
  },[])
  return (
    <>
    <button className='bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold mb-2 cursor-pointer'
            onClick={() => mutate(user)}
            >Guardar Cambios</button>
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
