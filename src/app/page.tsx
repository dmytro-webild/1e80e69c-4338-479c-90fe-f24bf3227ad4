"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Award, Target, Zap, CheckCircle, TrendingUp, Star, Users, Heart, Clock } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="fluid"
      cardStyle="outline"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Rewired"
          navItems={[
            { name: "About", id: "about" },
            { name: "Approach", id: "features" },
            { name: "Results", id: "testimonials" },
            { name: "Start", id: "contact" }
          ]}
          bottomLeftText="Transformation Begins Within"
          bottomRightText="hello@rewired.coach"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Rewire Your Identity Build Unshakeable Discipline"
          description="Most online entrepreneurs outgrow their old self faster than they can rebuild. We help you kill limiting patterns, architect powerful habits, and align your internal world with your external ambitions—so success feels effortless, not exhausting."
          background={{ variant: "fluid" }}
          tag="Transformation Coaching"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Your Transformation", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "1", imageSrc: "http://img.b2bpic.net/free-vector/flat-world-mental-health-day-sale-banner-template_23-2149667252.jpg", imageAlt: "Transformation journey" },
            { id: "2", imageSrc: "http://img.b2bpic.net/free-vector/flat-world-mental-health-day-sale-banner-template_23-2149667252.jpg", imageAlt: "Identity shift" },
            { id: "3", imageSrc: "http://img.b2bpic.net/free-vector/flat-world-mental-health-day-sale-banner-template_23-2149667252.jpg", imageAlt: "Discipline mastery" },
            { id: "4", imageSrc: "http://img.b2bpic.net/free-vector/flat-world-mental-health-day-sale-banner-template_23-2149667252.jpg", imageAlt: "Aligned success" },
            { id: "5", imageSrc: "http://img.b2bpic.net/free-vector/flat-world-mental-health-day-sale-banner-template_23-2149667252.jpg", imageAlt: "Internal alignment" },
            { id: "6", imageSrc: "http://img.b2bpic.net/free-vector/flat-world-mental-health-day-sale-banner-template_23-2149667252.jpg", imageAlt: "Sustainable growth" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Built by Someone Who Walked This Path"
          description="We don't teach theory. Our founder spent 8 years as a struggling entrepreneur before orchestrating a complete identity rebuild. Now, we've coached 500+ ambitious founders through the same transformation."
          tag="Our Story"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Eliminated Self-Sabotage",              description: "Identify and dismantle the belief systems keeping you stuck in the old identity",              icon: Target
            },
            {
              title: "Architected Unshakeable Discipline",              description: "Build habits that compound daily, turning consistency into your competitive edge",              icon: Zap
            },
            {
              title: "Achieved Internal Alignment",              description: "Sync your values, behaviors, and ambitions so growth feels natural and sustainable",              icon: CheckCircle
            },
            {
              title: "Scaled Without Burnout",              description: "Grow your business while maintaining mental clarity and emotional resilience",              icon: TrendingUp
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/man-doing-some-business-deal-with-client_329181-10302.jpg"
          imageAlt="Coaching founder"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[{ text: "See Our Approach", href: "#features" }]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          title="The Three Pillars of Transformation"
          description="Every high-performer who achieves sustainable success masters these interconnected disciplines"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Our Framework"
          tagIcon={Shield}
          tagAnimation="slide-up"
          features={[
            {
              id: "identity",              label: "Identity",              title: "Rewire the Core Belief System",              items: [
                "Kill self-limiting identity markers",                "Install empowering belief structures",                "Anchor new identity at cellular level",                "Eliminate imposter syndrome patterns"
              ],
              buttons: [{ text: "Explore", href: "#" }]
            },
            {
              id: "discipline",              label: "Discipline",              title: "Build Systems That Stick",              items: [
                "Design friction-free daily routines",                "Engineer environmental accountability",                "Create compound habit stacking",                "Track metrics that matter most"
              ],
              buttons: [{ text: "Explore", href: "#" }]
            },
            {
              id: "alignment",              label: "Alignment",              title: "Sync Internal and External",              items: [
                "Bridge values-behavior gap",                "Architect congruent life design",                "Eliminate cognitive dissonance",                "Create sustainable velocity"
              ],
              buttons: [{ text: "Explore", href: "#" }]
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Trusted by Scaling Entrepreneurs"
          description="See how founders just like you broke through plateaus and built sustainable empires"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Real Results"
          tagIcon={Star}
          tagAnimation="slide-up"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              handle: "@sarahbuilds",              testimonial: "I was making six figures but constantly sabotaging myself. This rewired my entire relationship with success. Now I run my business from clarity instead of fear.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-celebrating-his-success-after-presenting-project-proposal-his-multiethnic-partners_181624-33367.jpg",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Marcus Johnson",              handle: "@marcusgrows",              testimonial: "The discipline architecture changed everything. I went from chaotic execution to systematic growth. Revenue is up 3x, stress is down 80%.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/content-beautiful-businesswoman-standing-window_1262-1778.jpg",              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",              name: "Elena Rodriguez",              handle: "@elenavision",              testimonial: "I finally understand why I kept hitting the same ceiling. The identity work unlocked patterns I didn't even know existed. Transformation feels inevitable now.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1670.jpg",              imageAlt: "Elena Rodriguez"
            },
            {
              id: "4",              name: "James Liu",              handle: "@jameslaunches",              testimonial: "Alignment coaching gave me permission to build my way instead of copying everyone else's path. My business now reflects my actual values.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg",              imageAlt: "James Liu"
            },
            {
              id: "5",              name: "Priya Kapoor",              handle: "@priyascales",              testimonial: "The habit stacking system eliminated decision fatigue completely. I'm executing with more consistency than ever before.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-holding-camera_23-2149267806.jpg",              imageAlt: "Priya Kapoor"
            },
            {
              id: "6",              name: "David Mitchell",              handle: "@davidmagnifies",              testimonial: "This isn't just coaching—it's identity architecture. I've rebuilt myself from the foundation up. Everything flows easier now.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-executive-with-crossed-arms-workplace_1139-205.jpg",              imageAlt: "David Mitchell"
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Measurable Transformation"
          description="The results speak louder than words ever could"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Proof"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Users, title: "Entrepreneurs Transformed", value: "500+" },
            { id: "2", icon: Zap, title: "Revenue Growth Average", value: "3.2x" },
            { id: "3", icon: Heart, title: "Stress Reduction", value: "76%" },
            { id: "4", icon: Clock, title: "Consistency Improvement", value: "94%" }
          ]}
          animationType="scale-rotate"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Begin Now"
          title="Ready to Rebuild?"
          description="The transformation begins with a single decision. Schedule your clarity call to discuss your specific situation and get a personalized roadmap."
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Schedule Call"
          termsText="We respect your privacy. We'll reach out within 24 hours to schedule your call."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Rewired"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
