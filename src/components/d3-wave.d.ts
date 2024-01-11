declare module 'd3-wave' {

  export function wave(): WaveFunction
 
 
  interface WaveFunction {
 
     (): ImageData
 
     width(width: number): WaveFunction
 
     height(height: number): WaveFunction
 
     amplitude(amplitude: number): WaveFunction
 
     speed(speed: number): WaveFunction
 
  }
 
 }