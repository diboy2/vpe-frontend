import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { uploadFile } from '../../util/save';
import { useVPEContext } from "../../context/VPEContext";

const FileMedia = ({ fileTypeToggle, fileUrl, setFileUrl }) =>  {
  const { action: { addImage, addVideo } } = useVPEContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [file, setFile] = React.useState();
  const fileInputRef= React.useRef();
  const onChange = (event) => {
    const testFile = event.target.files[0];
    setFile(testFile);
    setFileUrl(URL.createObjectURL(testFile));
  };
  const onFileUpload = async () => {
    setIsLoading(true);
    if (fileTypeToggle === "image") {
      const uri = await uploadFile("/api/upload/image",file);
      addImage({ uri, text: file.name });     
    } else {
      const uri = await uploadFile("/api/upload/video",file);
      addVideo({ uri, text: file.name });     
    }
    setFileUrl("");
    setIsLoading(false);
  };
  return (
    
    <Grid item xs={7} sx={{ display: "flex", flexDirection: "column"}}>
      <Paper elevation={3} square={true}>
        <input className="uploadFileButton" ref={fileInputRef} 
          type="file" onChange={onChange} hidden={true}
          accept={`${fileTypeToggle}/*`}/>
        <CardActionArea onClick={()=>fileInputRef.current.click()}>
            {
              fileUrl && !isLoading ? 
              
              <CardMedia
                component={`${fileTypeToggle === "video" ? fileTypeToggle : "img"}`}
                alt="Upload Image or Video"
                controls={true}
                src={fileUrl}
                sx={{ display: "flex", alignItems: "center", padding: "16px", width: "100%", backgroundColor: "lightsteelblue", height: "300px" }}
              />:

              <CardContent sx={{ padding: "16px", width: "100%", height: "300px", backgroundColor: "lightsteelblue" }}>
                <Paper square={true} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                  {
                    isLoading ? 
                    <CircularProgress /> :
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      { fileTypeToggle === "image" ? "Select Image" : "Select Video" }
                    </Typography>
                  }
                  
                </Paper>
              </CardContent>
            }
        </CardActionArea>
        <CardActions sx={{ paddingTop: "12px", display: "flex", flexDirection: "row-reverse" }} >
          <Button 
              size="large"
              disabled={!fileUrl || isLoading}
              variant="contained"
              onClick={() => onFileUpload()}
          >
            { fileTypeToggle === "image" ? "Store Image" : "Store Video" }
          </Button>
        </CardActions>
      </Paper>
    </Grid> 
    
  );
}

export default FileMedia