import './App.css'

function App() {
  return (
    // CONTENEDOR PRINCIPAL: Modo oscuro global, tipografía limpia y mínimo alto de pantalla
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans antialiased">
      
      {/* 1. NAVBAR / MENÚ: Fondo ultra oscuro, pegado arriba y separación perfecta */}
      <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <strong className="text-xl font-bold tracking-wider text-blue-400">PaulPadilla.xyz</strong>
        <div className="text-sm font-medium">
          <a href="#sobre-mi" className="mx-3 text-slate-300 hover:text-blue-400 transition-colors">Sobre Mí</a>
          <a href="#skills" className="mx-3 text-slate-300 hover:text-blue-400 transition-colors">Habilidades</a>
          <a href="#proyectos" className="mx-3 text-slate-300 hover:text-blue-400 transition-colors">Proyectos</a>
        </div>
      </nav>

      {/* 2. HERO / PRESENTACIÓN: Centrado, con tipografía grande y degradado moderno */}
      <header id="sobre-mi" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Hola, soy Paul Padilla
        </h1>
        <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Estudiante de Ingeniería de Sistemas enfocado en soluciones eficientes, desarrollo backend y automatización inteligente de procesos de TI.
        </p>
        <button className="mt-10 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer">
          Ver Proyectos
        </button>
      </header>

      {/* 3. SKILLS / HABILIDADES: Sección con fondo ligeramente distinto y etiquetas (pills) */}
      <section id="skills" className="bg-slate-950/40 border-y border-slate-800/60 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-200">Mis Habilidades</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto px-6">
          <span className="bg-slate-900 border border-slate-800 text-blue-400 font-medium px-4 py-2 rounded-xl text-sm shadow-sm">SQL & Databases</span>
          <span className="bg-slate-900 border border-slate-800 text-indigo-400 font-medium px-4 py-2 rounded-xl text-sm shadow-sm">C# / .NET</span>
          <span className="bg-slate-900 border border-slate-800 text-cyan-400 font-medium px-4 py-2 rounded-xl text-sm shadow-sm">React / Angular</span>
          <span className="bg-slate-900 border border-slate-800 text-emerald-400 font-medium px-4 py-2 rounded-xl text-sm shadow-sm">Scripting (Python/PowerShell)</span>
        </div>
      </section>

      {/* 4. PROYECTOS: Rejilla responsiva (Grids) para las tarjetas de tus proyectos */}
      <section id="proyectos" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-200">Proyectos Destacados</h2>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 justify-center">
          
          {/* Tarjeta de Proyecto 1 */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all text-left group">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">Backend & Automation</div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Sistema de Impresión ZPL</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">Aplicación en .NET para la generación y automatización de etiquetas de código de barras en almacén.</p>
          </div>

          {/* Tarjeta de Proyecto 2 */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all text-left group">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Database Architecture</div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Módulo de Gestión RRHH</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">Optimización de base de datos SQL y lógica backend para el control y filtrado de personal.</p>
          </div>

        </div>
      </section>

      {/* FOOTER: Cierre limpio con borde sutil */}
      <footer className="border-t border-slate-800 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        © 2026 - Diseñado y construido en React + Docker.
      </footer>

    </div>
  )
}

export default App