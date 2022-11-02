import * as React from 'react';
import Card from '@mui/material/Card';
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
    <Card >
      <input className="uploadFileButton" type="file" onChange={onChange}/>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        src={fileUrl}
      />
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