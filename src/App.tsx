import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Differentials } from "@/components/sections/Differentials";
import { Categories } from "@/components/sections/Categories";
import { Professionals } from "@/components/sections/Professionals";
import { Stores } from "@/components/sections/Stores";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function App() {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <Differentials />
      <Categories />
      <Professionals />
      <Stores />
      <FinalCTA />
      <FloatingWhatsApp />
    </Layout>
  );
}
