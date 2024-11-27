import React from "react";

const Ping = () => {
  return (
    <div className={"relative"}>
      <div className={"absolute -left-4 top-1"}>
        <span className={"flex size-[11px]"}>
          <span
            className={
              "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"
            }
          />
          <span
            className={
              "relative inline-flex h-full w-full rounded-full bg-primary"
            }
          />
        </span>
      </div>
    </div>
  );
};
export default Ping;
