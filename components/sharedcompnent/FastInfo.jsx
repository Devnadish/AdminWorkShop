    const FastInfo=({title,data})=>{
        return (
          <div
            variant="outline"
            className="bg-secondary text-secondary-foreground px-2 rounded py-1  flex flex-col items-center justify-center gap-1 text-[.7rem]"
          >
            <p>{title}</p>
            <p>{data || "?"}</p>
          </div>
        );
      }

export default FastInfo