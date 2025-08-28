import { Roboto, Roboto_Mono } from "next/font/google";
import { Tooltip } from "./ui/tooltip";
import { Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <div>
      <Tooltip content="Header Ini">
        <h1>Header</h1>
      </Tooltip>
      <Text textStyle="RobotoMono">Shifyan Almustafid</Text>
      <h2>Hello World</h2>
    </div>
  );
}
