import './App.css'

function App() {
  return (
    <div className="bg-[#0a0e14] text-slate-100 min-h-screen font-sans antialiased scroll-smooth">

      {/* NAVBAR */}
      <nav className="bg-[#11161d]/80 backdrop-blur-md border-b border-[#1c2128] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <strong className="text-lg font-medium tracking-wide text-[#e6a94a] font-mono">
          &lt;PaulPadilla/&gt;
        </strong>
        <div className="hidden sm:block text-sm font-medium">
          <a href="#sobre-mi" className="mx-3 text-slate-300 hover:text-[#e6a94a] transition-colors">Sobre mí</a>
          <a href="#proyectos" className="mx-3 text-slate-300 hover:text-[#e6a94a] transition-colors">Proyectos</a>
          <a href="#skills" className="mx-3 text-slate-300 hover:text-[#e6a94a] transition-colors">Habilidades</a>
        </div>
        <a
          href="https://wa.me/51916496423?text=Hola%20Paul%2C%20vi%20tu%20portafolio%20y%20quisiera%20conversar%20sobre%20una%20oportunidad"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e6a94a] hover:bg-[#d99a3a] text-[#1a1206] text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Contactar
        </a>
      </nav>

      {/* HERO */}
      <header id="sobre-mi" className="max-w-4xl mx-auto px-6 py-20 flex flex-col sm:flex-row items-center gap-10">

        {/* Foto */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 rounded-full border-2 border-[#e6a94a] overflow-hidden bg-[#1c2128] flex items-center justify-center">
            {/* Reemplaza esta imagen por tu foto real, ej: /foto-paul.jpg */}
            <img
              src="/foto-paul.jpg"
              alt="Paul Padilla"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <div className="hidden w-full h-full items-center justify-center text-[#4a5361] text-5xl">
              👤
            </div>
          </div>
          <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#3fae67] border-4 border-[#0a0e14]"></span>
        </div>

        {/* Copy */}
        <div className="text-center sm:text-left">
          <span className="inline-block bg-[#3fae67]/15 border border-[#3fae67] text-[#6ecb8e] text-xs px-3 py-1 rounded-full mb-3">
            ● Disponible para Backend / .NET
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
            Hola, soy <span className="text-[#e6a94a]">Paul Padilla</span>
          </h1>
          <p className="mt-2 text-lg text-slate-300 font-medium">
            Desarrollador .NET con visión en infraestructura
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-md">
            Migración a .NET 9, arquitectura backend con Entity Framework y automatización
            inteligente de procesos de TI.
          </p>
          <div className="mt-6 flex gap-3 justify-center sm:justify-start">
            <a
              href="#proyectos"
              className="bg-[#e6a94a] hover:bg-[#d99a3a] text-[#1a1206] font-medium text-sm px-5 py-2.5 rounded-lg transition-all"
            >
              Ver casos de estudio
            </a>
            <a
              href="https://wa.me/51916496423?text=Hola%20Paul%2C%20vi%20tu%20portafolio%20y%20quisiera%20conversar%20sobre%20una%20oportunidad"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2d3541] hover:border-[#e6a94a] text-slate-200 font-medium text-sm px-5 py-2.5 rounded-lg transition-all"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="bg-[#11161d] border-y border-[#1c2128] py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center px-6">
          <div>
            <p className="text-xl font-semibold text-slate-50">+180</p>
            <p className="text-[11px] text-slate-500 mt-1">Servidores monitoreados</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-[#4dc3b4]">~20</p>
            <p className="text-[11px] text-slate-500 mt-1">Módulos ERP migrados</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-50">+250</p>
            <p className="text-[11px] text-slate-500 mt-1">Usuarios atendidos TI</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-[#4dc3b4]">B2</p>
            <p className="text-[11px] text-slate-500 mt-1">Inglés profesional</p>
          </div>
        </div>
      </section>

      {/* CASOS DE ESTUDIO */}
      <section id="proyectos" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold text-slate-100 mb-8 text-center sm:text-left">
          Casos de estudio
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">

          <div className="bg-[#11161d] border border-[#1c2128] rounded-2xl p-6 text-left hover:border-[#2d3541] transition-all">
            <span className="inline-block bg-[#e6a94a]/15 text-[#e6a94a] text-[10px] font-medium px-2.5 py-1 rounded mb-3">
              Backend y modernización
            </span>
            <h3 className="text-base font-semibold text-slate-100">API puente y migración ERP</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Migración de reportes en C# a .NET 9 sin detener operaciones críticas del negocio.
            </p>
            <div className="mt-4 bg-[#0a0e14] rounded-lg p-3 text-xs leading-relaxed space-y-1">
              <p><span className="text-[#6ecb8e] font-medium">Problema:</span> <span className="text-slate-300">Incompatibilidad al migrar a .NET 9.</span></p>
              <p><span className="text-[#e6a94a] font-medium">Solución:</span> <span className="text-slate-300">API REST intermedia con Swagger.</span></p>
              <p><span className="text-[#4dc3b4] font-medium">Impacto:</span> <span className="text-slate-300">Migración gradual, cero downtime.</span></p>
            </div>
          </div>

          <div className="bg-[#11161d] border border-[#1c2128] rounded-2xl p-6 text-left hover:border-[#2d3541] transition-all">
            <span className="inline-block bg-[#4dc3b4]/15 text-[#4dc3b4] text-[10px] font-medium px-2.5 py-1 rounded mb-3">
              Infraestructura y monitoreo
            </span>
            <h3 className="text-base font-semibold text-slate-100">Monitoreo proactivo (180 nodos)</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Sistema de telemetría en tiempo real para servidores remotos.
            </p>
            <div className="mt-4 bg-[#0a0e14] rounded-lg p-3 text-xs leading-relaxed space-y-1">
              <p><span className="text-[#6ecb8e] font-medium">Problema:</span> <span className="text-slate-300">Detección reactiva por llamada telefónica.</span></p>
              <p><span className="text-[#e6a94a] font-medium">Solución:</span> <span className="text-slate-300">Agentes automatizados en PowerShell y Python.</span></p>
              <p><span className="text-[#4dc3b4] font-medium">Impacto:</span> <span className="text-slate-300">Detección temprana en tiempo real.</span></p>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#11161d] border-y border-[#1c2128] py-16 text-center">
        <h2 className="text-xl font-semibold text-slate-100">Habilidades técnicas</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto px-6">
          {["C# / .NET 9", "Entity Framework", "SQL Server", "Angular", "Scrum + Jira", "Git", "PowerShell / Python", "Active Directory"].map((skill) => (
            <span
              key={skill}
              className="bg-[#0a0e14] border border-[#1c2128] text-slate-300 font-medium px-4 py-2 rounded-xl text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* TERMINAL */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold text-slate-100 mb-6">Terminal interactiva</h2>
        <div className="bg-[#0a0e14] border border-[#1c2128] rounded-xl overflow-hidden">
          <div className="bg-[#11161d] px-4 py-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2504f]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#e0a63f]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#3fae67]"></span>
            <span className="text-slate-500 text-[11px] font-mono ml-2">paulpadilla@portfolio:~</span>
          </div>
          <div className="p-4 font-mono text-xs leading-7">
            <p className="text-[#6ecb8e]">guest@paulpadilla:~$ <span className="text-slate-100">skills</span></p>
            <p className="text-slate-300">► Backend: C#, .NET 9, EF Core, SQL Server</p>
            <p className="text-slate-300">► Infra: PowerShell, Active Directory, Docker, Git</p>
            <p className="text-[#6ecb8e]">guest@paulpadilla:~$ <span className="text-[#e6a94a]">_</span></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1c2128] py-6 text-center text-xs text-slate-500">
        © 2026 Paul Padilla Quevedo — Diseñado para destacar en procesos de selección técnico
      </footer>

    </div>
  )
}

export default App
