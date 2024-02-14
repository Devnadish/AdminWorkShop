import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-secondary/10 dark:bg-secondary ", className)}
      {...props} />)
  );
}

export { Skeleton }
