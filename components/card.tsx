import { cn } from "@/lib/utils";

type CardVariant = "default" | "subtle" | "outlined" | "ghost";
type CardSize = "sm" | "md" | "lg";

type CardProps = React.PropsWithChildren<{
    variant?: CardVariant;
    size?: CardSize;
    interactive?: boolean;
    className?: string;
}>;

export function Card({
    variant = "subtle",
    size = "md",
    interactive = false,
    className = "",
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-lg transition",
                variant === "subtle" &&
                    "bg-white border border-slate-200 shadow-sm",
                variant === "default" && "bg-white shadow-md",
                variant === "outlined" && "border border-slate-200",
                variant === "ghost" && "bg-transparent",

                size === "sm" && "p-4",
                size === "md" && "p-6",
                size === "lg" && "p-8",

                interactive &&
                    "cursor-pointer hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-500",

                className,
            )}
            {...props}
        />
    );
}
