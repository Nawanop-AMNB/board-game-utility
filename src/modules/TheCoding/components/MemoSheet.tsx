import {
  Dispatch,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import ToggleButton from "./ToggleButton";

const defaultAlphabetRecord: Record<string, boolean> = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
  f: false,
};
const defaultNumberRecord: Record<string, boolean> = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
};

type MemoSheetHandle = { reset: () => void };

const MemoSheetWithRef: ForwardRefRenderFunction<MemoSheetHandle, unknown> = (
  _,
  ref
) => {
  const [name, setName] = useState("");
  const [alphabetRecord, setAlphabetRecord] = useState(defaultAlphabetRecord);
  const [number1Record, setNumber1Record] = useState(defaultNumberRecord);
  const [number2Record, setNumber2Record] = useState(defaultNumberRecord);

  function doToggle(
    code: string,
    dispatcher: Dispatch<React.SetStateAction<Record<string, boolean>>>
  ) {
    return function () {
      dispatcher((prev) => {
        return {
          ...prev,
          [code]: !prev[code],
        };
      });
    };
  }

  function reset() {
    setAlphabetRecord(defaultAlphabetRecord);
    setNumber1Record(defaultNumberRecord);
    setNumber2Record(defaultNumberRecord);
  }

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div className="flex flex-col gap-y-4 p-3 pb-5 bg-slate-800 rounded-md rounded-tl-none">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="player-name-input">Name:</label>
        <input
          id="player-name-input"
          className="bg-transparent border border-slate-500 rounded-md text-xl p-2"
          value={name}
          onChange={({ currentTarget }) => setName(currentTarget.value)}
        />
      </div>
      <div>
        <div className="mb-2">Alphabet:</div>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-2">
          {Object.entries(alphabetRecord)
            .filter(([code]) => code.match("[a-f]"))
            .map(([code, active]) => (
              <ToggleButton
                active={active}
                toggle={doToggle(code, setAlphabetRecord)}
              >
                {code}
              </ToggleButton>
            ))}
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 gap-4">
        <div>
          <div className="mb-2">Number X-1:</div>
          <div className="grid grid-flow-row grid-cols-2 grid-rows-5">
            {Object.entries(number1Record)
              .filter(([code]) => code.match("[0-9]"))
              .map(([code, active]) => (
                <ToggleButton
                  active={active}
                  toggle={doToggle(code, setNumber1Record)}
                >
                  {code}
                </ToggleButton>
              ))}
          </div>
        </div>
        <div>
          <div className="mb-2">Number X-2:</div>
          <div className="grid grid-flow-row grid-cols-2 grid-rows-5">
            {Object.entries(number2Record)
              .filter(([code]) => code.match("[0-9]"))
              .map(([code, active]) => (
                <ToggleButton
                  active={active}
                  toggle={doToggle(code, setNumber2Record)}
                >
                  {code}
                </ToggleButton>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoSheet = forwardRef(MemoSheetWithRef);

export default MemoSheet;
