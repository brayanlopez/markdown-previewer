import { useEffect, useState } from "react";
import { marked } from "marked";
// TODO: check how to change Grid to Grid 2
//  Grid2 as
import { Grid, ThemeProvider, Typography, createTheme } from "@mui/material";

import { importMdModules } from "./utils/util";
import "./App.css";

const theme = createTheme({ typography: { fontSize: 6 } });

function App() {
  const mdModule = importMdModules();
  const [text, setText] = useState("");

  // TODO: config setup code higlighting
  // Marked can be import from marked
  // const marked = new Marked();
  marked.setOptions({ breaks: true });

  useEffect(() => {
    //TODO: check how to do this without settimeout
    setTimeout(() => setText(mdModule[0]), 100);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" textAlign="center">
        Markdown Previewer
      </Typography>
      <Grid container spacing={1} sx={{ width: "100vw" }} margin="auto">
        <Grid item xs={12} md={6}>
          <textarea
            id="editor"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
