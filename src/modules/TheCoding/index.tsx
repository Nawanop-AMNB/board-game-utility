import clsx from "clsx";
import { ElementRef, useRef, useState } from "react";
import MemoSheet from "./components/MemoSheet";

type MemoSheetHandle = ElementRef<typeof MemoSheet>;

function TheCoding() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const memoSheetRefs = useRef<MemoSheetHandle[]>([]);

  function selected(index: number) {
    return function () {
      setSelectedIndex(index);
    };
  }

  function resetAll() {
    memoSheetRefs.current.forEach((handle) => handle.reset());
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          {Array.from(new Array(3)).map((_, index) => (
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
          <button className="bg-rose-800 hover:bg-rose-700 py-2 px-3 mb-2 rounded-md uppercase text-sm" onClick={resetAll}>reset</button>
        </div>
      </div>
      <div>
        {Array.from(new Array(3)).map((_, index) => {
          return (
            <div className={clsx({ hidden: index !== selectedIndex })}>
              <MemoSheet
                ref={(handle) => {
                  if (handle) {
                    memoSheetRefs.current[index] = handle;
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TheCoding;
