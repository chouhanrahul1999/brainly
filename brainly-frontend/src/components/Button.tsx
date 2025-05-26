import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary:
    "justify-center bg-purple-600 text-white items-center cursor-pointer hover:bg-purple-800 rounded max-w-60 pl-2 transition-all duration-150 disabled:bg-purple-400 disabled:cursor-not-allowed",
  secondary:
    "bg-purple-100 text-purple-800 items-center cursor-pointer hover:bg-purple-200 rounded max-w-60 pl-2 transition-all duration-150 disabled:bg-purple-100 disabled:text-purple-400 disabled:cursor-not-allowed",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-normal flex justify-center items-center";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        variantClasses[variant] +
        " " +
        defaultStyles +
        `${fullWidth ? " w-full" : ""}`
      }
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center">
          <svg
            className="mr-3 w-5 h-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          {text}...
        </div>
      ) : (
        <>
          {startIcon && <div className="pr-2">{startIcon}</div>}
          {text}
        </>
      )}
    </button>
  );
}
