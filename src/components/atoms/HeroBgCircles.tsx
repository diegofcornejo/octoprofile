import Image from "next/image";
import { css } from "@emotion/react";
import { FC } from "react";

const HeroBgCircles: FC = () => {
  return (
    <div
      className="container"
      css={css`
        top: 0;
        position: absolute;
        z-index: -1;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          transform: translateX(295px) translateY(-295px);
        `}
      >
        <Image
          src="/circles.svg"
          alt="circles"
          width={828}
          height={861}
          priority
        />
      </div>
    </div>
  );
};

export { HeroBgCircles };
