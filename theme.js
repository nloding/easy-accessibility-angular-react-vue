import { nightOwl } from "@code-surfer/themes";

export default {
  ...nightOwl,
  styles: {
    ...nightOwl.styles,
    a: {
      ...nightOwl.styles.a,
      color: 'rgb(247,140,108)',
    },
    blockquote: {
      borderLeft: '5px solid gray',
      paddingLeft: '10px',
      width: '75%',
      fontStyle: 'italic',
      fontSize: '90%',
    },
    inlineCode: {
      ...nightOwl.styles.inlineCode,
      color: 'rgb(255,203,139)'
    },
    strong: {
      ...nightOwl.styles.strong,
      color: 'rgb(247,140,108)',
    },
  },
}
