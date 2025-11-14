/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', 
  theme: {
   extend:{
     keyframes: {
       
        neonPulse: {
          '0%,100%': { textShadow: '0 0 6px rgba(0,255,200,1), 0 0 18px rgba(0,255,200,0.75)' },
          '50%':    { textShadow: '0 0 10px rgba(0,255,200,1), 0 0 30px rgba(0,255,200,0.85), 0 0 60px rgba(0,160,255,0.5)' }
        }
      },
      animation: {
        'neon-pulse': 'neonPulse 1.8s ease-in-out infinite'
      }
    
  
   },
    
  },
  
  plugins: [],
  
}

