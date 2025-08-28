import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  roboto: {
    description: "Stye Default untuk semua jenis konten",
    value: {
      fontFamily: "Roboto",
    },
  },
  robotoMono: {
    description: "Untuk Landing Page",
    value: {
      fontFamily: "Roboto Mono",
    },
  },
});
export default textStyles;
