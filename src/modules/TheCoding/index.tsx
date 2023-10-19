import { useState } from "react";
import MemoSheet from "./components/MemoSheet";
import clsx from "clsx";

function TheCoding() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function selected(index: number) {
    return function () {
      setSelectedIndex(index);
    };
  }
  return (
    <div>
      <div className="flex">
        {Array.from(new Array(4)).map((_, index) => (
          <>
            <div
              className={clsx(
                "p-2 w-16 text-center bg-slate-800",
                index === selectedIndex
                  ? "opacity-100 rounded-t-md"
                  : "opacity-50"
              )}
              role="button"
              onClick={selected(index)}
            >
              #{index + 1}
            </div>
          </>
        ))}
      </div>
      <div>
        {Array.from(new Array(4)).map((_, index) => (
          <div className={clsx({ hidden: index !== selectedIndex })}>
            <MemoSheet />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheCoding;
