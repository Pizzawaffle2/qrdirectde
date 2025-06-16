"use client";
import { FloatingBackground, GradientBackground } from "@/components/ui/floating-background";
import { Button } from "@/components/ui/button";
import { RippleButton } from "@/components/ui/ripple-button";
import { Card } from "@/components/ui/card";
import { HeroBadge, HeroBadgeWithIcon } from "@/components/ui/hero-badge";
import { StatCard, GradientStatCard } from "@/components/ui/stat-card";
import { 
  QrCode, 
  Sparkles, 
  BarChart3, 
  Users, 
  Calendar, 
  Link, 
  ArrowRight,
  Zap,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <FloatingBackground className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <HeroBadgeWithIcon 
              icon={<Sparkles className="h-4 w-4" />} 
              variant="teal"
            >
              Creator-First Design System
            </HeroBadgeWithIcon>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              QR Direct
              <span className="bg-clip-text text-transparent bg-[var(--creator-accent)]"> Platform</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              A comprehensive QR code generation and management platform with advanced customization, analytics, and team collaboration features.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <RippleButton size="lg" variant="gradient">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </RippleButton>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful tools for creating, managing, and tracking QR codes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="QR Code Generation" 
              value="Advanced" 
              icon={<QrCode className="h-6 w-6" />}
              description="Create custom QR codes with extensive styling options"
            />

            <StatCard 
              title="Dynamic QR Codes" 
              value="Flexible" 
              icon={<Zap className="h-6 w-6" />}
              description="Change destination without regenerating QR code"
            />

            <StatCard 
              title="Analytics Dashboard" 
              value="Real-time" 
              icon={<BarChart3 className="h-6 w-6" />}
              description="Track scans, geographic data, and device information"
            />

            <StatCard 
              title="Team Collaboration" 
              value="Seamless" 
              icon={<Users className="h-6 w-6" />}
              description="Work together with role-based permissions"
            />
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-12 md:py-24">
          <GradientBackground className="rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Advanced Features</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Take your QR codes to the next level with these powerful features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="glass" className="border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Calendar Design</h3>
                    <p className="text-white/80">
                      Create beautiful calendars with event scheduling, optimized for printing
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="glass" className="border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 text-white">
                    <Link className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Link-in-bio Page</h3>
                    <p className="text-white/80">
                      Design and host your own link-in-bio pages with our WYSIWYG editor
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </GradientBackground>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our platform is helping creators worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GradientStatCard 
              title="QR Codes Generated" 
              value="1M+" 
              icon={<QrCode className="h-6 w-6" />}
              trend={{ value: 25, isPositive: true }}
              variant="teal"
            />

            <GradientStatCard 
              title="Active Users" 
              value="50K+" 
              icon={<Users className="h-6 w-6" />}
              trend={{ value: 18, isPositive: true }}
              variant="sage"
            />

            <GradientStatCard 
              title="Scans Tracked" 
              value="10M+" 
              icon={<BarChart3 className="h-6 w-6" />}
              trend={{ value: 32, isPositive: true }}
              variant="ochre"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
          <Card variant="hover" className="p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <HeroBadge variant="ochre">
                Get Started Today
              </HeroBadge>

              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to create amazing QR codes?
              </h2>

              <p className="text-muted-foreground">
                Join thousands of creators who are already using QR Direct to enhance their projects.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <RippleButton size="lg">
                  Sign Up Free
                </RippleButton>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Star className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">QR Direct</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} QR Direct. All rights reserved.
          </div>
        </div>
      </footer>
    </FloatingBackground>
  );
}
