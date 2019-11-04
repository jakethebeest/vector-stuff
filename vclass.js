class vectorthing{
 constructor(xs,ys){
   this.v1= new createVector(xs,ys);
  // this.v2= new createVector(xs2,ys2);
   this.var=[];
   this.var[0]=this.v1;
   this.var[1]=0;
   this.n=1;
   this.rotate1=0;
   
 }
  srotate(theta){
  //  print("theta");
    this.rotate1+=theta;
    
  }
  rotate(theta,size){
   let xt;
   let yt;
    
  //print(this.rotate1);
     theta+=this.rotate1;
//print(theta);
   //     this.rotate1=0;
    
    if(theta>=0){
      
     yt=(cos(theta)*size+this.var[this.n-1].y);
     xt=(sin(theta)*size+this.var[this.n-1].x);
   //print(yt)
    }
  
    else if(theta<=0){
      //print("ran")
     yt=cos(theta)*size+this.var[this.n-1].y;
     xt=sin(theta)*size+this.var[this.n-1].x;
    }
    else{
     // print("ran2");
    yt=size+size+this.var[this.n-1].y;
    xt= this.var[this.n-1].x;
    }
    
    this.var[this.n]=createVector(xt,yt);
  //  print(yt);
    this.n++;
    
  }
  
  
  display(){
   for(let j=1;j<this.var.length;j++){
line(this.var[j-1].x,this.var[j-1].y,this.var[j].x,this.var[j].y);
     
   }
    
  }
  jitter(){
   for(let j=1;j<this.var.length;j++){
    this.var[j-1].x+=random(-1,1);
     this.var[j-1].y+=random(-1,1);
   }
  }
}