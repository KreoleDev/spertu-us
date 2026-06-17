"use client"

import type { FormEvent } from "react"
import { useState } from "react"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <h2 className="max-w-3xl text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
        A software company built on craft, clarity, and dependable delivery.
      </h2>
    </section>
  )
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const processSteps = [
    {
      title: "You send the project",
      desc: "Share the context, the goal, and the best way to reach you.",
    },
    {
      title: "We get in touch",
      desc: "We respond to align scope, priorities, and next steps.",
    },
    {
      title: "We plan the delivery",
      desc: "We turn the idea into a clear product, design, and engineering plan.",
    },
  ]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
      <div className="rounded-[1.5rem] border border-border bg-card px-4 py-10 sm:rounded-3xl sm:px-6 sm:py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-card-foreground sm:text-4xl md:text-5xl">
            Let&apos;s build something great.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us about your project and we&apos;ll help you scope, design, and
            deliver it.
          </p>
        </div>

        <div className="mt-10 grid gap-9 sm:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <form className="grid gap-5 text-left" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-card-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="h-12 w-full rounded-2xl border border-border bg-background/80 px-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25 sm:h-14"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-medium text-card-foreground"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className="h-12 w-full rounded-2xl border border-border bg-background/80 px-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25 sm:h-14"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project-description"
                className="mb-2 block text-sm font-medium text-card-foreground"
              >
                Project description
              </label>
              <textarea
                id="project-description"
                name="projectDescription"
                rows={6}
                className="w-full resize-none rounded-2xl border border-border bg-background/80 px-4 py-3 text-base leading-relaxed text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-fit"
            >
              Send project
            </button>
            {isSubmitted && (
              <p
                role="status"
                className="text-sm font-medium text-primary"
              >
                Project sent
              </p>
            )}
          </form>

          <div className="border-t border-border pt-9 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Process
            </p>
            <h3 className="mt-4 max-w-sm text-balance text-2xl font-bold leading-tight text-card-foreground sm:text-3xl">
              From first contact to an action plan.
            </h3>

            <div className="mt-7 grid gap-6 sm:mt-8 sm:gap-7">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4"
                >
                  <div className="flex size-10 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
