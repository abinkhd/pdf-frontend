import { Fab } from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { useSelectedPages } from "../state-management/hooks/useSelectedPages";

const Buttonstyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  marginBottom: "2px",
};

export const MyCreateButton = () => {
  const { selectedPages } = useSelectedPages();

  const handleOnClick = () => {
    console.log(selectedPages);
  };

  return (
    <div>
      <Fab
        disabled={selectedPages?.length ? false : true}
        variant="extended"
        size="small"
        color="primary"
        style={Buttonstyle}
        onClick={handleOnClick}
      >
        <FilePresentIcon sx={{ mr: 1 }} />
        Create PDF
      </Fab>
    </div>
  );
};
