import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const ImageMedia = ({ onFileUpload }) =>  {
  const [fileUrl, setFileUrl] = React.useState("https://i.imgur.com/uXlCmgT.gif");
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

  return (
    <Grid item xs={7} sx={{ display: "flex", flexDirection: "column"}}>
      <Paper elevation={3} square={true}>

      
      <input className="uploadFileButton" ref={fileInputRef} 
        type="file" onChange={onChange} hidden={true}
        accept="image/*"/>
      <CardActionArea onClick={()=>fileInputRef.current.click()}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300px"
          src={fileUrl}
          sx={{ padding: "16px", width: "100%", backgroundColor: "lightsteelblue"}}
        />
      </CardActionArea>
      <CardActions sx={{ display: "flex", flexDirection: "row-reverse"}}>
          <Button 
              size="small" 
              variant="contained"
          >
              Upload Image
          </Button>
      </CardActions>
      </Paper>
    </Grid> 
  );
}

export default ImageMedia