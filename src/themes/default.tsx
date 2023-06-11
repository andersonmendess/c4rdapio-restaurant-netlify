import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    primary: "#693FF3",
  },

  components: {
    Text: {
      baseStyle: {
        color: "#000000",
        fontSize: "md",
      },
      variants: {
        title: {
          fontWeight: "bold",
          fontSize: "2xl",
        },
        span: {
          fontWeight: "normal",
          fontSize: "sm",
        },
      },
    },
    Button: {
      baseStyle: {
        bg: "#f2f2f2",
      },
      variants: {
        purple: {
          bg: "#f2f2f2",
          color: "white",
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          bg: "white",
          boxShadow: "0 0 0px 1px white",
          _checked: {
            bg: "#693ff3",
          },
        },
      },
    },
    ButtonStyles: {
      baseStyle: {
        bg: "#f2f2f2",
        color: "white",
      },
      variants: {
        purple: {
          bg: "#f2f2f2",
          color: "white",
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          border: "none",
          borderColor: "",
          bg: "#E4E4E4",
          ":focus": {
            borderColor: "#E4E4E4",
            bg: "#E4E4E4",
          },
        },
      },
      variants: {
        filled: {
          field: {
            border: "none",
            borderColor: "#E4E4E4",
            bg: "#E4E4E4",
            _focus: {
              borderWidth: 0,
              borderColor: "#E4E4E4",
              boxShadow: "none",
              bg: "#E4E4E4",
            },
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        border: "none",
        borderColor: "#E4E4E4",
        bg: "#E4E4E4",
        ":focus": {
          borderColor: "#E4E4E4",
          bg: "#E4E4E4",
        },
      },
      variants: {
        filled: {
          border: "none",
          borderColor: "#E4E4E4",
          bg: "#E4E4E4",
          _focus: {
            borderWidth: 0,
            borderColor: "#E4E4E4",
            boxShadow: "none",
            bg: "#E4E4E4",
          },
        },
      },
    },

    Input: {
      baseStyle: {
        field: {
          border: "none",
          borderColor: "green",
          bg: "#E4E4E4",
          ":focus": {
            borderWidth: 0,
            borderColor: "#E4E4E4",
            boxShadow: "none",
            bg: "none",
          },
        },
      },
      variants: {
        filled: {
          field: {
            border: "none",
            borderColor: "#E4E4E4",
            bg: "#E4E4E4",
            _focus: {
              borderWidth: 0,
              borderColor: "#E4E4E4",
              boxShadow: "none",
              bg: "#E4E4E4",
            },
          },
        },
      },
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
};

export default extendTheme(theme);
