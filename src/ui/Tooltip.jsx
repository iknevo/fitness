import { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute top-1/2 -translate-y-1/2  bg-gray-500 text-gray-100 font-semibold px-2 py-1 rounded-2xl -right-24 z-50`}
          aria-label={text}
        >
          {text}
        </div>
      )}
    </div>
  );
}
