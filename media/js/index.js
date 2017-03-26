

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomDist(min, max, iterations) {
  let total = 0;

  for (let i = iterations - 1; i >= 0; i--) {
    total += random(min, max);
  }

  return total / iterations;
}

function loop(val, min, max) {
  const p = max - min + 1;
  let mod = (val - min) % p;

  if (mod < 0) {
    mod += p;
  }

  return min + mod;

}




function initPi(p) {
  const s = p.style;
  s.top = randomDist(0, 100, 3) + '%';
  s.left = randomDist(0, 100, 4) + '%';
  s.color = color();

}

let color = (() => {
  const colors = [
      '#f00', // Red
      '#800000', // Dark red
      '#c0c0c0', // Light gray
      '#808080', // Dark gray
      '#008000', // Green
      '#808000', // Olive
      '#0f0', // Green
      '#800080', // Dark magenta
      '#000080', // Dark blue,
      '#a6caf0', // Skye blue
      '#c0dcc0', // Money green
      '#008080' // Dark cyan
    ],
    l = colors.length;
  let i = 0;

  return function() {
    i = loop(++i, 0, colors.length);
    return colors[i];
  };
})();

// const body = document.querySelector('body');
const body = document.getElementById('body');
const pi = document.createElement('div');
// const blogs=document.getElementsByClassName('blog')[0];
// blogs.onclick=function(){
//   console.log(1)
// }

pi.className = 'pi';




for (let i = 50 - 1; i >= 0; i--) {
// var myName={0:'css',1:'html',2:'js'};
var myName={0:'唐',1:'海',2:'宸'};
var count=Math.floor(Math.random()*3);
pi.innerHTML = myName[count];

  const p = pi.cloneNode(true);
  initPi(p);
  pi.style.cursor='pointer';
  p.style.animationDelay = -(Math.random() * 3) + 's';


  body.appendChild(p);
}

document.querySelectorAll('.pi').forEach((pi) => {
  pi.addEventListener('animationiteration', (e) => {
    initPi(e.target);
  });
});








class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.canvas.width =260;
    this.canvas.height = 100;
    this.canvas.onclick=function(){
      let bodys=body.style;
      bodys.opacity=0;
      bodys.transition='all 1s';
      setTimeout(function(){
      bodys.display='none';
      },1000)
      this.style.display='none';
    }
    Object.assign(this.canvas.style, {
    position:"absolute",
    left:"60%",
    opacity:'.8',
    top:'50px',
    borderRadius:"10px",
    zIndex:'888',
    boxShadow:"10px 10px 30px rgba(0,0,0,0.1)"
  });
    requestAnimationFrame(()=>this.update());
  }
  update() {
    let g = this.canvas.getContext('2d');
    for(let y = 0; y< this.canvas.height; y+=10){
      const grad = g.createLinearGradient(0,y+5, 0, y-7);
      grad.addColorStop(0,"#3cbaff");
      grad.addColorStop(1,"white");
      g.fillStyle = grad;
      g.beginPath();
      for(let x = 0;x<=this.canvas.width; x+=16){
       let middleOffset = (x/this.canvas.width);
        middleOffset *=1-middleOffset;
        middleOffset = Math.pow(4*middleOffset,2);
        let yOffset =(y/this.canvas.height);
        yOffset *=1-yOffset;
        yOffset = Math.pow(2*yOffset,1);
       g.lineTo(x, y-14*middleOffset*yOffset*(1.3+0.2*Math.sin(Date.now()/100+x/30+y/13)));
    }
      g.lineTo(this.canvas.width+10,y+60);
      g.lineTo(-100,y+60);
     g.fill();
    }
    requestAnimationFrame(()=>this.update());
  }
}
const a = new App();




