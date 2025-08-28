import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import textStyles from "./textStyles";
const config = defineConfig({
  theme: {
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);
