import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ReactComponent as DeleteSVG} from "../../assets/img/icons/delete.svg"

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} > </Box>
);

export default function CardNota(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.titulo}
        </Typography>
        <Typography variant="h5" component="div">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={this.props.deletarNota}>Excluir <DeleteSVG /> </Button>
      </CardActions>
    </Card>
  );
}
