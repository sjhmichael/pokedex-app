import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 14 14"
    fill="#currentColor"
    {...props}
  >
    <path
      fill="#currentColor"
      d="M5.667.166c-.823 0-1.5.678-1.5 1.5 0 .176.037.342.094.5h-2.5l-.079.407-1.5 7.5-.015.046v1.047h11v-1.047l-.015-.046-1.5-7.5-.079-.407h-2.5c.06-.16.092-.33.094-.5 0-.822-.678-1.5-1.5-1.5Zm0 1c.281 0 .5.219.5.5 0 .282-.219.5-.5.5a.494.494 0 0 1-.5-.5c0-.281.219-.5.5-.5Zm-3.094 2h6.188l1.406 7h-9l1.406-7Z"
    />
  </svg>
);
export default SvgComponent;
