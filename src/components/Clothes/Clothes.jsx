import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import './Clothes.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FlashOnIcon from '@mui/icons-material/FlashOn';
const url="http://localhost:8000/product/getallproducts"
const Clothes=(props)=>{
    const[details,setDetails]=useState([])
    useEffect(()=>{
        axios.get(url).then(res=>{
            console.log(res)
            setDetails(res.data)
        }).catch(err=>{
            console.log(err)
        })
     },[])
     return(
         <>
         {details.map((detail,index)=>(
         <div className='ff mx-2' key={detail._id+index} ><Card className="ff" >
      <CardMedia
        component="img"
        height="140"
        image={detail.productImage}
        alt="green iguana"
        className='imo'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <center> {detail.name}</center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>{detail.stock}</center>
        </Typography>
        <Typography>
          <center>Price: {detail.price}</center> 
        </Typography>
        <Typography variant="body2" className='my-2' color="text.secondary">
        <center>{detail.details}</center>
        </Typography>
        <Typography variant="body2" className='my-2' color="text.secondary">
        <center> Material : {detail.material}</center>
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<FlashOnIcon/>} varient="contained" color='success'>Buy Now</Button>
        <Button size="small" startIcon ={<ShoppingCartIcon/>} color='primary'>Add to Cart</Button>
      </CardActions>
    </Card>
    </div>))} 
</>
     )
}
export default Clothes;