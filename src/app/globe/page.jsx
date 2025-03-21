import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import js from "simple-icons/icons/javascript";
import nextjs from "simple-icons/icons/nextdotjs";

const icons = [js, nextjs].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

const IconCloud = () => {
  return (
    <Cloud>
      {icons}
      <a>hello world</a>
      <a
        href="https://emojipedia.org/globe-showing-americas/"
        target="_blank"
        rel="noopener"
      >
        <img
          height="42"
          width="42"
          alt="A globe"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
        />
      </a>
    </Cloud>
  );
};
