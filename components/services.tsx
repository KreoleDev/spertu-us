type Service = {
  index: string
  id: string
  eyebrow: string
  title: string
  desc: string
  image: string
}

const services: Service[] = [
  {
    index: "01",
    id: "mobile",
    eyebrow: "Mobile Development",
    title: "Native apps people love to use",
    desc: "Fast, fluid, and reliable native and cross-platform applications for iOS and Android.",
    image: "/sections/mobile.png",
  },
  {
    index: "02",
    id: "web",
    eyebrow: "Web Development",
    title: "Modern web experiences built for speed",
    desc: "Accessible, scalable, high-performance websites and web apps from front end to back end.",
    image: "/sections/web.png",
  },
  {
    index: "03",
    id: "cloud",
    eyebrow: "Cloud Services",
    title: "Infrastructure ready to scale",
    desc: "Secure cloud-native architecture, optimized for cost and ready to grow with you.",
    image: "/sections/cloud.png",
  },
  {
    index: "04",
    id: "custom-software",
    eyebrow: "Custom Software",
    title: "Solutions built around your business",
    desc: "Tailored systems designed around your processes, goals, and the way your team works.",
    image: "/sections/custom.png",
  },
  {
    index: "05",
    id: "data-apis",
    eyebrow: "Data & APIs",
    title: "Integrations that connect everything",
    desc: "Reliable data pipelines and well-documented APIs that bring all of your systems together.",
    image: "/sections/data.png",
  },
  {
    index: "06",
    id: "maintenance-support",
    eyebrow: "Maintenance & Support",
    title: "We take care of the product after launch",
    desc: "Continuous monitoring, updates, and dedicated support to keep everything running smoothly.",
    image: "/sections/support.png",
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={`service-${service.id}`}
      className="group relative min-h-[29rem] overflow-hidden rounded-[1.5rem] bg-card shadow-2xl shadow-black/25 ring-1 ring-white/10 sm:min-h-[34rem] sm:rounded-[2rem] md:min-h-[40rem]"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image || "/placeholder.svg"}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/64 sm:via-transparent sm:to-black/58" />

      <div className="relative z-10 flex min-h-[29rem] flex-col justify-between p-5 text-white sm:min-h-[34rem] sm:p-6 md:min-h-[40rem] md:p-8">
        <p className="w-fit rounded-full bg-white/18 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-black/15 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
          {service.eyebrow}
        </p>

        <div className="max-w-xl">
          <h2 className="text-balance text-2xl font-bold leading-tight tracking-normal text-white drop-shadow-2xl sm:text-3xl md:text-5xl">
            {service.title}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-white/88 drop-shadow-xl sm:mt-4 sm:text-base md:text-lg">
            {service.desc}
          </p>
        </div>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-background px-4 py-12 sm:px-6 sm:py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
