// import React, { Component } from 'react';

// import "./style.css"

// class CardNota extends Component {
//     constructor(props) {
//         super()
//     }

//     render() {
//         return (
//             <section className="card-nota">
//                 <header>
//                     <h3>{this.props.titulo}</h3>
//                 </header>
//                 <p>{this.props.text}</p>
//                 <button> <img src="" alt="" /> </button>
//             </section>
//         );
//     }
// }

// export default CardNota;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const card = (props) => (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary">
//         {props.titulo}
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         {props.text}
//       </Typography>
//         <CardActions>
//             <Button size="small">Excluir</Button>
//         </CardActions>
//     </CardContent>
//   </React.Fragment>
// );

// export default function CardNota(props) {
//     console.log(props);
//     return (
//         <Box item sx={{ minWidth: 275 }}>
//           <Card props={props} variant="outlined">{card}</Card>
//         </Box>
//     );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
