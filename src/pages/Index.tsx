import Navbar from "@/components/portfolio/Navbar";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import QualitiesSection from "@/components/portfolio/QualitiesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <QualitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
