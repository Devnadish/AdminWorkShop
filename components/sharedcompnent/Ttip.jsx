import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

 function Ttip({tool,children}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="bg-yellow-200 text-black">
                    <p>{tool}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default Ttip
