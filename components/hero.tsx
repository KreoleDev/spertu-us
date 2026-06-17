const stats = [
  { title: "Ponta a Ponta", desc: "Entrega de produto" },
  { title: "Cloud-Native", desc: "Arquitetura em primeiro lugar" },
  { title: "Multiplataforma", desc: "Mobile & web" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="relative min-h-[68svh] w-full flex-1 overflow-hidden sm:min-h-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      </div>

      <div className="border-y border-border bg-background/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 py-6 sm:grid-cols-3 sm:gap-8 sm:px-6 sm:py-8">
          {stats.map((stat) => (
            <div key={stat.title}>
              <h2 className="text-lg font-bold text-primary sm:text-2xl">
                {stat.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
