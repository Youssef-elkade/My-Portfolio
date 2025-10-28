import { useTheme } from '@/hooks/use-theme'

export function AnimatedBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 animate-float text-primary/40 font-mono text-sm font-medium">
          &lt;div&gt;
        </div>
        <div 
          className="absolute top-1/3 right-16 animate-float text-primary/30 font-mono text-base font-semibold" 
          style={{animationDelay: '2s'}}
        >
          {theme === 'dark' ? '{ purple }' : '{ blue }'}
        </div>
        <div 
          className="absolute bottom-1/3 left-16 animate-float text-primary/35 font-mono text-sm font-medium" 
          style={{animationDelay: '4s'}}
        >
          return();
        </div>
        <div 
          className="absolute bottom-20 right-20 animate-float text-primary/45 font-mono text-xs font-medium" 
          style={{animationDelay: '1s'}}
        >
          export default
        </div>
        <div 
          className="absolute top-1/2 left-1/4 animate-float text-primary/25 font-mono text-lg font-bold" 
          style={{animationDelay: '3s'}}
        >
          const
        </div>
        
        {/* Geometric Shapes */}
        <div 
          className="absolute top-1/4 right-1/3 w-20 h-20 border border-primary/20 rotate-45 animate-float"
          style={{animationDelay: '0.5s'}}
        ></div>
        <div 
          className="absolute top-2/3 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-float" 
          style={{animationDelay: '2.5s'}}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-primary rounded-lg animate-float opacity-60" 
          style={{animationDelay: '1.5s'}}
        ></div>
        <div 
          className="absolute top-3/4 left-1/2 w-8 h-8 border-2 border-primary/30 rounded-full animate-float" 
          style={{animationDelay: '3.5s'}}
        ></div>
        
        {/* Additional Elements */}
        <div 
          className="absolute top-1/6 left-2/3 w-24 h-1 bg-gradient-primary animate-float opacity-40" 
          style={{animationDelay: '2.8s'}}
        ></div>
        <div 
          className="absolute bottom-1/6 left-1/6 w-1 h-24 bg-gradient-primary animate-float opacity-40" 
          style={{animationDelay: '4.2s'}}
        ></div>
      </div>
    </div>
  )
}