import { useState } from "react";
import ToggleButton from "./ToggleButton";

const defaultRecord: Record<string, boolean> = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
  f: false,
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

export default function MemoSheet() {
  const [name, setName] = useState("");
  const [alphabetRecord, setAlphabetRecord] = useState(defaultRecord);

  function doToggle(code: string) {
    return function () {
      setAlphabetRecord((prev) => {
        return {
          ...prev,
          [code]: !prev[code],
        };
      });
    };
  }

  return (
    <div className="flex flex-col gap-y-4 p-3 bg-slate-800">
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
              <ToggleButton active={active} toggle={doToggle(code)}>
                {code}
              </ToggleButton>
            ))}
        </div>
      </div>
      <div>
        <div className="mb-2">Number:</div>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-4">
          {Object.entries(alphabetRecord)
            .filter(([code]) => code.match("[0-9]"))
            .map(([code, active]) => (
              <ToggleButton active={active} toggle={doToggle(code)}>
                {code}
              </ToggleButton>
            ))}
        </div>
      </div>
    </div>
  );
}
