import logo from './logo.svg';
import './App.css';
import { Input } from 'reactstrap'
import NumberFormat, { NumberFormatValues } from 'react-number-format';
function App() {
  // var numArr = [2,4,5,6,8,9];
  var numArr = [0,1,2,4,5,7,8,9];

  function mapNumber3digits(initValue,result){
    var resultArr = []
  for(let i=0;i< numArr.length;i++){
    for(let j=0;j< numArr.length;j++){
      for(let m=0;m< numArr.length;m++){
        if(numArr[i]+numArr[j]+numArr[m]+initValue === result){
          console.log('num',`${numArr[i]}${numArr[j]}${numArr[m]}`)
           resultArr.push(`${numArr[i]}${numArr[j]}${numArr[m]}`)
        }
      }

    }

  }
  return resultArr
  }
  function mapNumber4digits(initValue,result){
    var resultArr = []
  for(let i=0;i< numArr.length;i++){
    for(let j=0;j< numArr.length;j++){
      for(let m=0;m< numArr.length;m++){
        for(let n=0;n< numArr.length;n++){
        if(numArr[i]+numArr[j]+numArr[m]+numArr[n]+initValue === result){
          console.log('num',`${numArr[i]}${numArr[j]}${numArr[m]}`)
           resultArr.push(`${numArr[i]}${numArr[j]}${numArr[m]}${numArr[n]}`)
        }
      }
      }

    }

  }
  return resultArr
  }
  return (
    <div style={{padding:'20px'}}>
    <h1>ทะเบียนรถ</h1>
    
    <hr/>
   
<h2> 2 ขอ</h2>
    <div>
  (24)
{mapNumber3digits(10,24).map((item)=>{
      return <p style={{fontSize:'18px'}}>2ขอ {item} </p>
    })}

    {mapNumber4digits(10,24).map((item)=>{
      return <p style={{fontSize:'18px'}}>2ขอ {item} </p>
    })}
</div>
<div>
  (45)
{mapNumber3digits(10,45).map((item)=>{
      return <p style={{fontSize:'18px'}}>2ขอ {item} </p>
    })}

    {mapNumber4digits(10,45).map((item)=>{
      return <p style={{fontSize:'18px'}}>2ขอ {item} </p>
    })}
</div>
    </div>
  );
}

export default App;
