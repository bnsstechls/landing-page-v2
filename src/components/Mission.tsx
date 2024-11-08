import { cn } from "@/lib/utils"
import GridPattern from "./ui/grid-pattern"
import TextRevealByWord from "./ui/text-reveal"

const Mission = () => {
    return (
        <div id="mission" className="bg-[#111111] w-full py-24 lg:py-32 relative overflow-hidden">
            <div className="container max-w-[600px]">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text mb-16">
                    Our Mission
                </h2>
                <div>
                    <TextRevealByWord text="At LogiSetu, we aim to digitally transform India's logistics ecosystem by providing a unified, end-to-end transportation pipeline. We leverage real-time government data and AI-powered optimization to streamline load matching, route planning, and vehicle tracking—making logistics easier, faster, and more profitable for operators."
                        className="text-2xl leading-relaxed"
                    />
                </div>
            </div>
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </div>
    )
}

export default Mission