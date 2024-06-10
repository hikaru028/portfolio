import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
// #979DAE
type Props = {}

const Cta = (props: Props) => {
  return (
    <section className='py-24 w-full h-full bg-cta_bg dark:bg-none dark:bg-[#464F66] bg-no-repeat bg-cover'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center w-full'>
                <h2 className='h2 w-full text-center mb-8'>
                    Prepared to turn your ideas into reality? <br />I&apos;m here to support you.
                </h2>
                <Link href='/contact'>
                    <Button className='shadow-lg hover:shadow-none'>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta
