import BaseEntity from "./BaseEntity";

export default class Heart extends BaseEntity {
  paint(): void {
    const { ctx, radius } = this;
  
    const scale = radius / 256;
  
    ctx.beginPath();
  
    ctx.save();
    ctx.translate(0, 0);
    ctx.scale(scale, scale);
  
    const centerX = 256;
    const centerY = 256;
    
    ctx.moveTo(462.3 - centerX, 62.6 - centerY);
    ctx.bezierCurveTo(
      407.5 - centerX, 15.9 - centerY, 
      326 - centerX, 24.3 - centerY, 
      275.7 - centerX, 76.2 - centerY
    );
    ctx.lineTo(256 - centerX, 96.5 - centerY);
    ctx.lineTo(236.3 - centerX, 76.2 - centerY);
    
    ctx.bezierCurveTo(
      186.1 - centerX, 24.3 - centerY, 
      104.5 - centerX, 15.9 - centerY, 
      49.7 - centerX, 62.6 - centerY
    );
    
    ctx.bezierCurveTo(
      -13.1 - centerX, 116.2 - centerY, 
      -16.4 - centerX, 212.4 - centerY, 
      39.8 - centerX, 270.5 - centerY
    );
    
    ctx.lineTo(233.3 - centerX, 470.3 - centerY);
    
    ctx.bezierCurveTo(
      239.5 - centerX, 476.75 - centerY, 
      249.25 - centerX, 480 - centerY, 
      256 - centerX, 480 - centerY
    );
    
    ctx.bezierCurveTo(
      262.75 - centerX, 480 - centerY, 
      272.5 - centerX, 476.75 - centerY, 
      278.7 - centerX, 470.3 - centerY
    );
    
    ctx.lineTo(472.2 - centerX, 270.5 - centerY);
    
    ctx.bezierCurveTo(
      528.5 - centerX, 212.4 - centerY, 
      525.2 - centerX, 116.2 - centerY, 
      462.3 - centerX, 62.6 - centerY
    );
    
    ctx.closePath();
    ctx.restore();
  }
}
