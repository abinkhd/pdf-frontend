import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Box, Button, Grid, Paper } from "@mui/material";
import { MyCheckbox } from "./MyCheckbox";
import { useSelectedPages } from "../state-management/hooks/useSelectedPages";
import { MyCreateButton } from "./MyCreateButton";
import { useFilename } from "../state-management/hooks/useFilename";

import axios, { AxiosError } from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const columns = { xs: 1, sm: 3, md: 4, xl: 4 };

const PdfView = () => {
  const [file, setFile] = useState<File>();
  const [numPages, setNumPages] = useState<number | undefined>();
  const [pdfDocument, setPdfDocument] = useState();
  const { filename } = useFilename();
  const filePath = "http://localhost:5000/files/uploaded/" + filename;

  // useEffect(() => {
  //   async function fetchFile() {
  //     try {
  //       const res = await axios.get("http://localhost:5000/files/" + filename);
  //       console.log(res.data);
  //       setFile(res.data);
  //     } catch (error) {
  //       console.log(error as AxiosError);
  //     }
  //   }
  //   fetchFile();
  // }, []);

  //

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  if (!filename) return;
  else
    return (
      <div className="pdfBody">
        <Document
          file={{
            url: filePath,
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Grid container columns={columns} spacing={1}>
            {Array.apply(null, Array(numPages))
              .map((_x, i) => i + 1)
              .map((page) => (
                <Grid item xs={1} className="pdfGridStyle" key={page}>
                  <MyPage page={page} />
                </Grid>
              ))}{" "}
          </Grid>
          <MyCreateButton />
        </Document>
      </div>
    );
};

export default PdfView;

export const MyPage: FunctionComponent<{ page: number }> = ({ page }) => {
  const { updatePage } = useSelectedPages();
  const reset = false;
  return (
    <Box className="pdfBoxStyle">
      <MyCheckbox
        onChange={(value: boolean) => updatePage(reset, value, page)}
      />
      <Paper elevation={5}>
        <Page
          height={100}
          width={200}
          className="pdfPageStyle"
          pageNumber={page}
        />
      </Paper>
      <p>{page}</p>
    </Box>
  );
};
