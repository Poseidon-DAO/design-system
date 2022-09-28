import {
  ChakraProvider,
  extendTheme,
  ThemeProviderProps,
} from "@chakra-ui/react";

const colors = {
  primary: {
    900: "#4923fc",
    800: "#153e75",
    700: "#2a69ac",
  },
  secondary: {
    900: "#f20a70",
    800: "#f386cd",
    700: "#a291bf",
  },
};

const theme = extendTheme({ colors });

export interface ThemedProvider extends React.HTMLAttributes<HTMLElement> {
  theme?: Partial<ThemeProviderProps>;
}

export default function ThemeProvider(props: ThemedProvider) {
  return <ChakraProvider theme={theme}> {props.children} </ChakraProvider>;
}
