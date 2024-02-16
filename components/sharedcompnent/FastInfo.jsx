    const FastInfo=({title,data,direction="flex-col" ,bgColor="bg-tranperent",gap="gap-3",w="w-full"})=>{
        return (
          <div
            variant="outline"
            className={`${bgColor}  ${w} text-secondary-foreground px-2 rounded py-1  flex ${direction} items-center justify-start ${gap} text-[.7rem]`}
          >
            <p>{title}</p>
            <p>{data || "?"}</p>
          </div>
        );
      }

export default FastInfo