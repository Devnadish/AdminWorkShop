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
                <TooltipContent>
                    <p>{tool}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default Ttip
