import { Box } from "@mui/material";
import "./App.css";
import PdfView from "./component/PdfView";
import UploadForm from "./component/UploadForm";
import SelectedPagesProvider from "./state-management/SelectedPagesProvider";
import { MyCreateButton } from "./component/MyCreateButton";
import FilenameProvider from "./state-management/FilenameProvider";
import { useFilename } from "./state-management/hooks/useFilename";

function App() {
  const { filename } = useFilename();
  return (
    <FilenameProvider>
      <SelectedPagesProvider>
        <Box>
          <UploadForm />
          <PdfView />
        </Box>
      </SelectedPagesProvider>
    </FilenameProvider>
  );
}

export default App;
