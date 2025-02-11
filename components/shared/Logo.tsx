import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center justify-center gap-0 text-3xl leading-8 font-semibold gradient-text'>
            <Image src='/assets/images/logo.png' alt='logo' width={40} height={40} />
            <p className=''>PicassoX</p>
        </div>
    )
}

const LogoSheet = () => {
    return (
        <div className='flex items-center justify-start gap-0 text-2xl leading-6 font-semibold gradient-text'>
            <Image src='/assets/images/logo.png' alt='logo' width={32} height={32} />
            <p className=''>PicassoX</p>
        </div>
    )
}

export { Logo, LogoSheet }