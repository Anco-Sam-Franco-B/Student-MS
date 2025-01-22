import express from 'express'
import axios from 'axios'
const app=express()
const PORT=process.env.PORT || 8001

app.set('view engine','ejs')

app.use(express.json())

app.get('/',(req,res)=>{
    res.render('ft')
})
app.post('/send',async (req,res)=>{
  const options = {
    method: 'POST',
    url: 'https://free-whatsapp-sender.p.rapidapi.com/send',
    headers: {
      'x-rapidapi-key': '30e59dce3bmsh990102e219d9c95p1af9e6jsnbe099479f09d',
      'x-rapidapi-host': 'free-whatsapp-sender.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      message: 'HELLO PARAS',
      receiver: '0792534515',
      id: 'The ID obtained from successful callback request',
      token: 'The Token obtained from successful callback request'
    }
  };
  
  try {
    const response = await axios.request(options);
    res.json(response.data)
  } catch (error) {
    console.error(error);
  }
})


app.listen(PORT,()=>{
    console.log(`Server is runnig at\n\http://localhost:${PORT}/`)
})
