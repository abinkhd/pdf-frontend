import { Box } from "@mui/material";
import "./App.css";
import PdfView from "./component/PdfView";
import UploadForm from "./component/UploadForm";
import SelectedPagesProvider from "./state-management/SelectedPagesProvider";
import FilenameProvider from "./state-management/FilenameProvider";
import Header from "./component/common/Header";

function App() {
  return (
    <FilenameProvider>
      <SelectedPagesProvider>
        <Header />
        <Box>
          <UploadForm />
          <PdfView />
        </Box>
      </SelectedPagesProvider>
    </FilenameProvider>
  );
}

export default App;
