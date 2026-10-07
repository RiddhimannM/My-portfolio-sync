import { WorkExperience, ProjectItem, EducationItem, AchievementItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Riddhimann Mukherjee',
  initials: 'RM.',
  role: 'Senior QA Engineer at Navya Care',
  shortRole: 'Senior QA Engineer',
  company: 'Navya Care',
  email: 'riddhim6@gmail.com',
  workEmail: 'riddhimann@navya.care',
  phone: '7003943965',
  location: '50/1, Park Avenue, Modern Park, Santoshpur, Kolkata, India',
  headshotUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRoZ2rms0tCKWAubF5kAW7OcqnY93xgKIPcagf8wIWZS_bn_DkRiBtLSnEveAUYcJkZ_lF43kZMOrfebJa2DMRtxZOD0CxLewxa2vJx96wgXcvYgam6MnZ1gZuBQLxkzyDjNk2TjW5tlu0TXX71N_mpXemC7ZzjenizXbBGP7qEV94EfvwoqQpkKR6Hha95BkgjJWEYsIbwFqTEnyw6Ievf9dMTJtmoIuQ5H7f2yr9ydk4T4kFTgBQ7BY9TkxPnjhXTjI',
  bioSummary: "I specialize in Healthcare Technologies, leveraging Python automation, AI-driven testing strategies, and robust script writing to deliver high-quality software for Cancer Research and patient care. My core expertise includes Automation Testing, Python, AWS, and Selenium to ensure scalable, reliable, and efficient QA solutions.",
  extendedBio: "I'm currently working as a Senior QA Engineer specializing in healthcare technologies. I've been involved in testing and releasing software solutions for cancer research and patient care. I understand the human impact of our work, and I thrive to make a positive impact in the healthcare industry. With strong communication and teamwork skills, I work with diverse teams to achieve our shared goals effectively.",
  industryFocus: 'Healthcare Technology',
  linkedInUrl: 'https://www.linkedin.com/in/rm-0110/',
};

export const CORE_SKILLS = [
  'Automation Testing',
  'Manual Testing',
  'Python',
  'AWS',
  'Apps Script',
  'Selenium',
  'API Testing',
  'Postman',
  'Jenkins CI/CD',
  'CloudWatch',
  'Canary Deployments',
  'UAT & Regression'
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: 'Senior QA Engineer',
    company: 'Navya Care INC.',
    period: '02/2024 - Present',
    location: 'Bangalore, India',
    notes: 'Promoted to this role in the 2024 Appraisal cycle',
    badge: 'Current Role',
    achievements: [
      'Understanding and working with multiple AWS Lambda functions with their latency and error monitoring.',
      'data analytics with small scale scripts running on Google Colab with Pandas, Numpy and Requests libraries.',
      'Automated tasks using Github Actions and Postman Schedule.',
      'Fundamental hands-on experience on Playwright and handling Automation repositories with Claude.'
    ],
    technologies: ['AWS Lambda', 'Python & Pandas', 'Playwright', 'Claude AI', 'GitHub Actions', 'Postman Schedule', 'Selenium']
  },
  {
    role: 'SDET',
    company: 'Navya Care INC.',
    period: '02/2023 - 01/2024',
    location: 'Bangalore, India',
    notes: 'Recognized as an outstanding asset to Navya\'s Technical team in 2023',
    badge: 'Awarded Asset 2023',
    achievements: [
      'An outstanding asset to Navya’s Technical team in 2023.',
      'Contributing to the UAT and ensuring overall stability of our software solutions in the pre-production and production setup.',
      'QA/Automation Testing using Selenium and Python.',
      'API endpoint testing using Postman (GET, POST, PUT).',
      'Supporting production issues through AWS CloudWatch logs and Canary.',
      'Monitoring CI/CD pipelines in Jenkins and developing custom automated deployment trigger scripts.'
    ],
    technologies: ['Selenium', 'Python', 'Postman', 'AWS', 'Jenkins', 'REST APIs', 'Canary', 'Git']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'jenkins-trigger',
    title: 'Remote Deployment job trigger for Jenkins',
    period: '01/2024',
    category: 'Automation',
    description: 'This script allows users to input branch names and triggers all Jenkins deployment jobs simultaneously, streamlining the deployment process where multiple repositories are involved.',
    impact: 'Reduced cross-service deployment coordination time by over 75% across multi-repo microservices.',
    technologies: ['Python', 'Jenkins REST API', 'Multithreading', 'CI/CD Automation', 'Bash'],
    demoType: 'jenkins',
    codeSnippet: `def trigger_parallel_builds(branch_name, repos):
    threads = []
    for repo in repos:
        t = threading.Thread(target=trigger_jenkins_job, args=(repo, branch_name))
        threads.append(t)
        t.start()
    for t in threads:
        t.join()
    print("All microservice builds dispatched successfully.")`
  },
  {
    id: 'cancer-api-chain',
    title: 'API chaining to get the Treatment Options for Stage IV Breast Cancer',
    period: '12/2023',
    category: 'API & NLP',
    description: 'This project uses two APIs that expand an abridged treatment regimen into a language that is understood by patients. Translates dense clinical oncological protocols into clear, structured, compassionate guidance for patients and families.',
    impact: 'Directly powers clinical oncology reports delivering personalized treatment options for Stage IV Breast Cancer patients.',
    technologies: ['Python', 'REST API Chaining', 'Postman', 'Oncology NLP', 'JSON Schema Validation'],
    demoType: 'api-chain',
    codeSnippet: `async function fetchExpandedCancerRegimen(clinicalCode) {
    const rawRegimen = await api.get('/oncology/regimen/' + clinicalCode);
    const expandedPlainLanguage = await api.post('/nlp/patient-friendly-expand', {
        protocol: rawRegimen.data.protocol,
        stage: 'Stage IV Breast Cancer'
    });
    return expandedPlainLanguage.data;
}`
  },
  {
    id: 'cloudwatch-insights',
    title: 'AWS CloudWatch Insights query to monitor failure logs in production setup',
    period: '12/2023',
    category: 'Monitoring & DevOps',
    description: 'Based on the support issues and negative feedback from other teams, I have set up a CloudWatch insights dashboard in AWS that monitors any failure logs in a given span of time, ensuring the application’s overall health and effectiveness.',
    impact: 'Decreased incident detection time (MTTD) from hours to under 3 minutes with automated failure cluster alerts.',
    technologies: ['AWS CloudWatch', 'Logs Insights', 'Canary Metrics', 'Production Monitoring', 'KQL / Query Syntax'],
    demoType: 'cloudwatch',
    codeSnippet: `fields @timestamp, @message, @logStream, status_code
| filter @message like /ERROR|Exception|500|Timeout/
| stats count(*) as errorCount by bin(5m), status_code
| sort errorCount desc`
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.Tech in Biotechnology',
    institution: 'VIT, Vellore',
    period: '09/2021 - 07/2023',
    grade: 'CGPA: 8.13',
    accentColor: '#0058bc', // Primary blue
    keyProjects: [
      'Comparing DESEQ2 and GSEA for gene expression analysis in Melanoma.',
      'in-silico approaches to find an immunogenic binding site for Dengue virus.'
    ]
  },
  {
    degree: 'B.TECH in Biotechnology',
    institution: 'BIT Kolkata',
    period: '05/2017 - 05/2021',
    grade: 'CGPA: 9.15',
    accentColor: '#006e28', // Secondary green
    keyProjects: [
      'Protein folding models to determine the structural behaviors of prion polypeptides across different mammalian species.'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'msu-research',
    title: 'Selected as a Research Volunteer at Michigan State University',
    subtitle: 'Worked as a remote research volunteer for 6 months under Dr. Laura Harris, director of training at MSU-D2L.',
    description: 'I helped identify epigenetic regulations (via DNA Methylation profiling analysis) associated with Lung Cancer across various patient biopsy samples and cell lines through Gene Set Enrichment Analysis (GSEA) for enrichment, identification and validation.',
    icon: 'flask',
    highlight: 'Bioinformatics & Cancer Genomics'
  },
  {
    id: 'gate-bt',
    title: 'Qualified GATE Biotechnology (2021)',
    subtitle: 'Graduate Aptitude Test in Engineering (GATE-BT)',
    description: '',
    tag: 'GATE-BT 2021',
    icon: 'badge',
    highlight: 'Qualified'
  }
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'English', proficiency: 'Full Professional Proficiency' },
  { name: 'Hindi', proficiency: 'Full Professional Proficiency' },
  { name: 'Bengali', proficiency: 'Native or Bilingual Proficiency' },
  { name: 'German', proficiency: 'Elementary Proficiency' }
];

export const INTERESTS = ['Music', 'Football', 'Computational Biology', 'QA Automation'];
