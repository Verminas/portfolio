"use client";

import Typewriter from "typewriter-effect";

type Props = {
  strings: string[];
};
export const TypeWritterEffect = ({ strings }: Props) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
      }}
    />
  );
};
