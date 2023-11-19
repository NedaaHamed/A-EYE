import { Background } from ".";

export default {
  title: "Components/Background",
  component: Background,
  argTypes: {
    property1: {
      options: ["variant-1", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-1",
  },
};
