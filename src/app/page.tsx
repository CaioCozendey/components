import Card from '@/components/card/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='items-center flex flex-col'>
      <h1 className='text-4xl mt-4'> Components </h1>
      <h2 className='text-2xl mt-4'> Cards </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 md:gap-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
