import { Fab } from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { useSelectedPages } from "../state-management/hooks/useSelectedPages";
import axios from "axios";

const endpoint = import.meta.env.VITE_API_URL;

export const MyCreateButton = () => {
  const { selectedPages, updatePage } = useSelectedPages();

  const handleOnClick = async () => {
    const res = await axios.post(endpoint + "extract", {
      pages: selectedPages,
    });
    updatePage(true, false, 0);
    alert(res.data.DownloadPath);
  };

  return (
    <div>
      <Fab
        disabled={selectedPages?.length ? false : true}
        variant="extended"
        size="small"
        color="primary"
        onClick={handleOnClick}
      >
        <FilePresentIcon sx={{ mr: 1 }} />
        Create PDF
      </Fab>
    </div>
  );
};
