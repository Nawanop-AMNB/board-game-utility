import clsx from "clsx";
import { PropsWithChildren } from "react";

export default function ToggleButton({
  active,
  toggle,
  children,
}: PropsWithChildren<{
  active: boolean;
  toggle: () => void;
}>) {
  return (
    <div className="p-2">
      <button
        className={clsx(
          "w-full h-16 text-xl border uppercase rounded-md",
          active ? "text-slate-700 border-slate-900" : "border-slate-500"
        )}
        onClick={toggle}
      >
        {children}
      </button>
    </div>
  );
}
