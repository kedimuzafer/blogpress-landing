import { Hero } from './hero'
import { Features } from './features'
import { CTA } from './cta'
import { FloatingHeader } from './floating-header'
import { ModernFooter } from './modern-footer'
import { Automation } from './automation'

export function LandingPage() {
  return (
    <div className="dark min-h-screen bg-black">
      <FloatingHeader />
      <Hero />
      <Features />
      <Automation />
      <CTA />
      <ModernFooter />
    </div>
  )
}

export { Hero, Features, CTA, FloatingHeader, ModernFooter, Automation }
