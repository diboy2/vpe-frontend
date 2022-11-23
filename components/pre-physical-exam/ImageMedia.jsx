import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
    <Card height="100%"  sx={{ flex: 1, display: "flex", flexDirection: "column", width:"100%"}} >
      <input className="uploadFileButton" ref={fileInputRef} type="file" onChange={onChange} hidden/>
      <CardActionArea onClick={()=>fileInputRef.current.click()}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300px"
          src={fileUrl}
          sx={{ padding: "16px", width: "100%"}}
        />
      </CardActionArea>
      
      <CardActions>
        <Stack spacing={2} direction="row-reverse">
            <Button 
              size="small" 
              variant="contained"
              onClick={onClick}
            >
              Upload
            </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default ImageMedia