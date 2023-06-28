import Card from '@/components/card/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='items-center flex flex-col m-2'>
      <h1 className='text-4xl mt-4'> Components </h1>
      <h2 className='text-2xl mt-4'> Cards </h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-4 gap-8">
        <Card 
          nome='Caio'
          descricao='Pão • Carne • Queijo • Salada • Milho'
          preco='R$18,99'
          imagem='/hamburguer2.jpg'
        />
        <Card 
          nome='Caio2'
          descricao='Pão • Carne • Queijo • Salada • Milho'
          preco='R$18,99'
          imagem='/hamburguer.jpg'
        />
        <Card 
          nome='Caio3'
          descricao='Pão • Carne • Queijo • Salada • Milho'
          preco='R$18,99'
          imagem='/hamburguer2.jpg'
        />
        <Card 
          nome='Caio4'
          descricao='Pão • Carne • Queijo • Salada • Milho'
          preco='R$18,99'
          imagem='/hamburguer.jpg'
        />
        <Card 
          nome='Caio5'
          descricao='Pão • Carne • Queijo • Salada • Milho'
          preco='R$18,99'
          imagem='/hamburguer2.jpg'
        />
      </div>
    </div>
  )
}
