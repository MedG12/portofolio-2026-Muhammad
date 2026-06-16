import React from 'react';
import ProjectTile from '../components/ui/ProjectTile';

// AI Interview Images
import aiInterviewCover from '../assets/cover-ai-interview-page.png';
import aiInterviewSecond from '../assets/second-ai-interview.png';

// GerobakGO Images
import gerobakGoCover from '../assets/cover-GerobakGo.png';
import gerobakGoSecond from '../assets/second-GerobakGO.png';

// Siaga Bunda Images
import siagaBundaCover from '../assets/cover-siaga-bunda.png';
import siagaBundaSecond from '../assets/second-siaga-bunda.jpg';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <ProjectTile
        title="AI Interview"
        tagline="An automated, AI-driven platform for secure mass interviews."
        problem="Mass interview assessments are costly, time-consuming, and highly vulnerable to basic cheating methods that traditional systems fail to detect"
        solution="We provide an automated interview assessment platform equipped with advanced eye-tracking, speaker diarization, and people detection to eliminate fraud and streamline the hiring process."
        techStack={['FastAPI', 'MediaPipe', 'Faster-Whisper', 'Gemini LLM']}
        githubUrl="https://github.com/acoramadan/Interview-Assesment-System"
        theme="light"
        images={[
          { src: aiInterviewCover, caption: "Automated Assessment Dashboard" },
          { src: aiInterviewSecond, caption: "Selected as Best Capstone at Asah Lead by Dicoding" }
        ]}
      />

      <ProjectTile
        title="GerobakGO"
        tagline="A real-time tracking platform connecting customers with mobile vendors.."
        problem="Customers often struggle to locate their favorite mobile vendors, while small street vendors find it difficult to track and reach potential customers effectively."
        solution="Our platform offers a real-time location tracker that seamlessly connects hungry customers with nearby mobile vendors, boosting street food sales and simplifying the buying experience."
        techStack={['Flutter', 'Firebase', 'Laravel', 'MySQL', 'Redis']}
        githubUrl="https://github.com/MedG12/gerobakgo_flutter"
        theme="dark"
        reversed
        images={[
          { src: gerobakGoCover, caption: "Merchant Tracking Interface" },
          { src: gerobakGoSecond, caption: "Proudly Leading the Talent Behind the GrobakGo App" }
        ]}
      />

      <ProjectTile
        title="Siaga Bunda"
        tagline="Companion for a Healthy Pregnancy."
        problem="High maternal mortality rates in Indonesia are worsened by a lack of accessible, verified health information and supportive community platforms for pregnant women."
        solution="We empower expectant mothers with a unified platform featuring an interactive pregnancy tracker, precise due-date tools, verified health insights, and a community forum to reduce health risks."
        techStack={['php', 'oracle db', 'tailwind css', 'ajax']}
        githubUrl="https://github.com/SIAGA-BUNDA/siaga-bunda"
        theme="parchment"
        images={[
          { src: siagaBundaCover, caption: "Pregnancy Health Tracker" },
          { src: siagaBundaSecond, caption: "Bridging Technology and Reality: Field Research at Posyandu" }
        ]}
      />
    </section>
  );
};

export default ProjectsSection;
