import CredCard from '@/components/cred-card'
import {HOW_GO_ABOUT_CRED } from "@/constants";

import React from 'react'

const Credmethod = () => {
  return (
    <div>
        <CredCard title={HOW_GO_ABOUT_CRED.title} point={HOW_GO_ABOUT_CRED.points} image={HOW_GO_ABOUT_CRED.image}/>
    </div>
  )
}

export default Credmethod