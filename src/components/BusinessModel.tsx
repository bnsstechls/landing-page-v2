import { BrainCircuit, CreditCard, Truck, IndianRupee } from "lucide-react"
import { MagicCard } from "./ui/magic-card"

export default function BusinessModel() {
    return (
        <section id="business-model" className="w-full py-24 lg:py-32 bg-black">
            <div className="container">
                <h2 className="text-4xl md:text-5xl font-medium text-center mb-3 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text">
                    Our Business Model
                </h2>
                <p className="mb-16 text-center text-zinc-400 text-md md:text-lg font-medium">
                    AI-powered Optimization with Subscription Services, Marketplace Commissions, and Financing Options.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    <MagicCard>
                        <div className="flex flex-col items-center mb-4 z-10">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                                <BrainCircuit className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-white">AI SaaS Subscription</h3>
                        </div>
                        <p className="text-center text-zinc-400 z-10">
                            AI-powered optimization for operators, providing cutting-edge solutions for route planning and load management.
                        </p>
                    </MagicCard>

                    <MagicCard>
                        <div className="flex flex-col items-center mb-4 z-10">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                                <Truck className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-white">Marketplace Commissions</h3>
                        </div>
                        <p className="text-center text-zinc-400 z-10">
                            Revenue generated from successful truckload matches, creating a win-win situation for both shippers and carriers.
                        </p>
                    </MagicCard>

                    <MagicCard>
                        <div className="flex flex-col items-center mb-4 z-10">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                                <CreditCard className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-white">Telematics & Payment Solutions</h3>
                        </div>
                        <p className="text-center text-zinc-400 z-10">
                            Subscription-based tracking and payment solutions, enhancing the transparency and efficiency in logistics operations.
                        </p>
                    </MagicCard>

                    <MagicCard>
                        <div className="flex flex-col items-center mb-4 z-10">
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 mx-auto">
                                <IndianRupee className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-white">Financing & Leasing</h3>
                        </div>
                        <p className="text-center text-zinc-400 z-10">
                            Truck financing and lease-to-own options backed by performance data, enabling growth for small and medium-sized operators.
                        </p>
                    </MagicCard>

                </div>
            </div>
        </section>
    )
}