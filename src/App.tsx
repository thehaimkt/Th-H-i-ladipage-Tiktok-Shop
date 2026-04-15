/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketOpportunity from "./components/MarketOpportunity";
import PainPoints from "./components/PainPoints";
import Solution from "./components/Solution";
import Benefits from "./components/Benefits";
import ProductSelection from "./components/ProductSelection";
import DeploymentModels from "./components/DeploymentModels";
import ImplementationTools from "./components/ImplementationTools";
import Touchpoints from "./components/Touchpoints";
import SocialProof from "./components/SocialProof";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MarketOpportunity />
        <PainPoints />
        <Solution />
        <Benefits />
        <ProductSelection />
        <DeploymentModels />
        <ImplementationTools />
        <Touchpoints />
        <SocialProof />
        <LeadForm />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-32 text-center bg-surface relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-8 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-primary mb-8 leading-tight"
            >
              Đừng chỉ đăng video theo cảm hứng. Hãy bắt đầu với một hệ thống TikTok Shop rõ ràng hơn.
            </motion.h2>
            <div className="flex justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="signature-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl" 
                href="#contact-form"
              >
                BẮT ĐẦU NGAY
              </motion.a>
            </div>
          </div>
          {/* Decorative editorial typography background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-primary/5 -z-10 whitespace-nowrap select-none">
            MKT ECOSYSTEM
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

