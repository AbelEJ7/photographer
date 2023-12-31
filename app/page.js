import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Image from 'next/image'
import { SliderData } from '@/components/SliderData'
import Instagram from '@/components/Instagram'

export default function Home() {
  return (
      <div> 
        <Hero heading='Captur Photography' 
              message='I capture moments in nature and keep them alive '/>
        <Slider slides={SliderData} />
        <Instagram />
      </div>
  )
}
