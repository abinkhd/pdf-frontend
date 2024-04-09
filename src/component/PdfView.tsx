import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Box, Grid, Paper } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfView = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File>();
  const [numPages, setNumPages] = useState<number | undefined>();
  const [pdfDocument, setPdfDocument] = useState();

  // useEffect(() => {
  //   async function fetchFileName() {
  //     try {
  //       const res = await axios.get("http://localhost:5000/get-files");
  //       console.log(res.data.data[1].pdf);
  //       setFileName(res.data.data[1].pdf);
  //     } catch (error) {}
  //   }
  //   fetchFileName();
  // }, []);

  // async function fetchFile() {
  //   try {
  //     const res = await axios.get("http://localhost:5000/files/" + fileName);
  //     console.log(res.data);
  //     setFile(res.data);
  //   } catch (error) {
  //     console.log(error as AxiosError);
  //   }
  // }
  // fetchFile();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  // function getPages() {
  //
  // }
  // getPages();
  // console.log(pageNumber);
  return (
    <div className="pdfBody">
      <Document
        file={{
          url: "http://localhost:5000/files/AbhinKrishna_ApplicationForm.pdf",
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 3, md: 4, xl: 4 }}
          marginRight={2}
          marginLeft="50px"
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Grid item xs={1} spacing={2} className="pdfGridStyle" key={page}>
                <Box className="pdfBoxStyle">
                  <p>{page}</p>
                  <Paper elevation={5}>
                    <Page
                      height={100}
                      width={200}
                      className="pdfPageStyle"
                      pageNumber={page}
                      key={page}
                    />
                  </Paper>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Document>
    </div>
  );
};

export default PdfView;
