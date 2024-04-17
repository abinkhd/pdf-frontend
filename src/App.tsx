import { Box } from "@mui/material";
import "./App.css";
import PdfView from "./component/PdfView";
import UploadForm from "./component/UploadForm";
import SelectedPagesProvider from "./state-management/SelectedPagesProvider";
import { MyCreateButton } from "./component/MyCreateButton";

function App() {
  return (
    <SelectedPagesProvider>
      <Box>
        <UploadForm />
        <PdfView />
      </Box>
    </SelectedPagesProvider>
  );
}

export default App;
