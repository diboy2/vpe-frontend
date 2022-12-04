import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ImageMedia = ({ toggle }) =>  {
  const [fileUrl, setFileUrl] = React.useState("");
  const [file, setFile] = React.useState();
  const fileInputRef= React.useRef();
  const onChange = (event) => {
    const testFile = event.target.files[0];
    setFile(testFile);
    setFileUrl(URL.createObjectURL(testFile));
  };
  const onClick = () => {
    onFileUpload(file);
  };
  const onImageUpload = async (file) => {
    const uri = await uploadImage("/api/upload/image",file);
    setImages([
        ...images,
        {
            uri,
            text: file.name
        }
    ]);
  };
  const onVideoUpload = async (file) => {
      const uri = await uploadImage("/api/upload/image",file);
      setImages([
          ...images,
          {
              uri,
              text: file.name
          }
      ]);
  };
  return (
    <Grid item xs={7} sx={{ display: "flex", flexDirection: "column"}}>
      <Paper elevation={3} square={true}>
        <input className="uploadFileButton" ref={fileInputRef} 
          type="file" onChange={onChange} hidden={true}
          accept="image/*"/>
      <CardActionArea onClick={()=>fileInputRef.current.click()}>
          {
            fileUrl ? 
            <CardMedia
              component="img"
              alt="Upload Image"
              src={fileUrl}
              sx={{ padding: "16px", width: "100%", backgroundColor: "lightsteelblue", height: "300px" }}
            /> :
            <CardContent sx={{ padding: "16px", width: "100%", height: "300px", backgroundColor: "lightsteelblue" }}>
              <Paper square={true} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Upload Image
                </Typography>
              </Paper>
            </CardContent>
          }
      </CardActionArea>
      <Paper elevation={3} square={true} >
        <CardActions >
            <Button 
                size="small" 
                variant="contained"
            >
                Upload Image
            </Button>
            
        </CardActions>
      </ Paper>
      </Paper>
    </Grid> 
  );
}

export default ImageMedia