import Image from "next/image";

export default function Card() {
    return (
        <div>
            <button>
                <div>
                    <div className="p-6">
                        <div>
                            <div className="overflow-hidden rounded-2xl bg-gray-50 max-w-lg">
                                <div className="flex flex-col items-center overflow-hidden">
                                    <Image src="/hamburguer2.jpg" width={512} height={512} alt="Hamburger" />
                                </div>
                                <div className="p-6">
                                    <div className="md:flex-row items-center justify-between sm:flex-row sm:items-center">
                                        <div className="break-normal">
                                            <h2 className="mt-2 text-lg font-semibold text-gray-800"> X-Bacon </h2>
                                            <p className="text-gray-400"> Pão • Carne • Queijo • Salada • Milho</p>
                                        </div>
                                        <span className="mt-4 inline-block rounded-full bg-orange-400 p-3 text-xl font-medium text-white hover:bg-orange-500 duration-200 min-w-full"> R$18,99 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}