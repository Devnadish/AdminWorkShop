    const FastInfo=({title,data,direction="flex-col" ,bgColor="bg-tranperent"})=>{
        return (
          <div
            variant="outline"
            className={`${bgColor}  w-full text-secondary-foreground px-2 rounded py-1  flex ${direction} items-center justify-start gap-3 text-[.7rem]`}
          >
            <p>{title}</p>
            <p>{data || "?"}</p>
          </div>
        );
      }

export default FastInfo