import * as NextImage from "next/image";
import "../styles/globals.css";

const Image = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <Image {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}