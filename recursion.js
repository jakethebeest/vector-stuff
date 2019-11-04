function V(t,len,stage){
  if(stage>0){
  
   

    t.rotate(150,len);
     V(t,len/2,stage-1);
   t.rotate(-210,len);
     t.rotate(210,len);
     
    V(t,len/2,stage-1);
    t.rotate(30,len);
  }  
  

}

function triforce(t,len,stage){
  //stroke(100,100*stage,100);
  if(stage>0){
    t.rotate(0,len);
    t.srotate(120);
  
    triforce(t,len/2,stage-1);
      t.rotate(0,len);
    t.srotate(120)
    
    triforce(t,len/2,stage-1);
     t.rotate(0,len);
    t.srotate(120);
    
    triforce(t,len/2,stage-1);
 
  
  }
 else{
 //  t.rotate(30,len);
//   t.rotate(-90,len);
  // t.rotate(150,len);    
  }
}

function curve2(t,len,stage,stagech){
  
 if(stage==0){
  
    t.rotate(0+90,len);
  
   t.rotate(60+90,len);
   t.rotate(-60+90,len);
   t.rotate(0+90,len); 
      
 
  
   
 }
 else{
 //t.srotate(0);
   curve2(t,len/3,stage-1);
  t.srotate(60);
   curve2(t,len/3,stage-1);
   t.srotate(-120);
   curve2(t,len/3,stage-1);
t.srotate(60);
   curve2(t,len/3,stage-1);
   

 }
  
}