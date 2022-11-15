import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ImageMedia = ({ onFileUpload }) =>  {
  const [fileUrl, setFileUrl] = React.useState("https://i.imgur.com/uXlCmgT.gif");
  const [file, setFile] = React.useState();
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
      <input className="uploadFileButton" type="file" onChange={onChange}/>
      <CardContent>
        <CardMedia
          component="img"
          alt="green iguana"
          src={fileUrl}
        />
      </CardContent>
      
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