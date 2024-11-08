import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Toast = forwardRef(function Toast({ onReset }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onReset}
      className="rounded animate-bounce bg-green-400 h-20 w-60 z-40 bottom-20 -right-3/4"
      open
    >
      <div className=" flex items-center p-2 justify-start space-x-2">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 64.00 64.00"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#16d035"
          strokeWidth="3"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="32" cy="32" r="24"></circle>
            <polyline points="44 24 28 40 20 32"></polyline>
          </g>
        </svg>
        <p className="text-white">Project added</p>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Toast;
