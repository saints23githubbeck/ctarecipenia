// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// // import CircularProgress, {  circularProgressClasses,} from '@mui/material/CircularProgress';
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 15,

//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//   },
// }));

// export default function CustomizedProgressBars() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <div style={{margin:"5px 0 5px 15px", display:'flex', justifyContent:'space-between'}}>
//         <p>Acne Law</p>
//         <p>156</p>
//       </div>
//      <BorderLinearProgress variant="determinate" value={45} />
    
//      <div style={{margin:"5px 0 5px 15px", display:'flex', justifyContent:'space-between'}}>
//         <p>Default</p>
//         <p>156</p>
//       </div>
//      <BorderLinearProgress variant="determinate" value={50} />
    
//      <div style={{margin:"5px 0 5px 15px", display:'flex', justifyContent:'space-between'}}>
//         <p>Acne Dental</p>
//         <p>156</p>
//       </div>
//      <BorderLinearProgress variant="determinate" value={72} />
    
//      <div style={{margin:"5px 0 5px 15px", display:'flex', justifyContent:'space-between'}}>
//         <p>Default</p>
//         <p>156</p>
//       </div>
//      <BorderLinearProgress variant="determinate" value={50} />
//     </Box>
//   );
// }