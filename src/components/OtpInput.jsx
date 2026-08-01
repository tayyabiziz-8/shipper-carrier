import { useRef, useState, useEffect } from "react";

export default function OtpInput({ length = 6, onComplete, error, reset }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    if (reset) setValues(Array(length).fill(""));
  }, [reset, length]);

  const focusInput = (index) => {
    inputsRef.current[index]?.focus();
  };

  const handleChange = (index, raw) => {
    const digit = raw.replace(/\D/g, "").slice(-1);
    const next = [...values];
    next[index] = digit;
    setValues(next);

    if (digit && index < length - 1) {
      focusInput(index + 1);
    }
    if (next.every((d) => d !== "")) {
      onComplete?.(next.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    e.preventDefault();
    const next = Array(length).fill("");
    pasted.split("").forEach((d, i) => (next[i] = d));
    setValues(next);
    const lastIndex = Math.min(pasted.length, length) - 1;
    focusInput(lastIndex >= 0 ? lastIndex : 0);
    if (pasted.length === length) onComplete?.(pasted);
  };

  return (
    <div className={`flex justify-center gap-2.5 ${error ? "animate-shake" : ""}`}>
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1} of ${length}`}
          className={`h-14 w-12 rounded-lg border bg-gray-50 text-center text-lg font-semibold text-ink-900 focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
            error ? "border-red-400" : "border-gray-200"
          }`}
        />
      ))}
    </div>
  );
}
