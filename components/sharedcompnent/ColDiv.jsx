"use client";
const ColDiv = ({ children }) => {
    return (
        <div className="flex w-full flex-col items-center justify-between gap-4">
            {children}
        </div>
    );
};
