const logos = [
  new URL("/src/assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("/src/assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("/src/assets/LogoBanner/logo3.svg", import.meta.url).href,
  new URL("/src/assets/LogoBanner/logo4.svg", import.meta.url).href,
   new URL("/src/assets/LogoBanner/logo1.svg", import.meta.url).href,
   new URL("/src/assets/LogoBanner/logo2.svg", import.meta.url).href,
   new URL("/src/assets/LogoBanner/logo3.svg", import.meta.url).href,
   new URL("/src/assets/LogoBanner/logo4.svg", import.meta.url).href,
  
];

const features = [{
  img : new URL ('/src/assets/features/thumbs-up.svg', import.meta.url).href,
  heading: "Full-Stack Development",
  description: "We build powerful web apps using the latest tech like React, Node.js, and PostgreSQL — from frontend UI to backend logic."
},{
  img : new URL ('/src/assets/features/branch.svg', import.meta.url).href,
  heading: "UI/UX Design",
  description: "Clean, modern, user-centered designs that keep your customers engaged and your brand looking sharp."
},{
  img : new URL ('/src/assets/features/flag.svg', import.meta.url).href,
  heading: "Cloud & DevOps",
  description: "We deploy your projects with Docker, CI/CD, and scalable cloud infrastructure on AWS or GCP — so you can grow without limits."
},{
  img : new URL ('/src/assets/features/globe.svg', import.meta.url).href,
  heading: "E-Commerce Solutions",
  description: "Launch high-converting eCommerce stores with custom features, payment integrations, and blazing-fast performance."
},{
  img : new URL ('/src/assets/features/graphic-circle.svg', import.meta.url).href,
  heading: "Maintenance & Scaling",
  description: "Post-launch support, updates, and performance optimizations to keep your app running smooth as you scale."
},{
  img : new URL ('/src/assets/features/hash.svg', import.meta.url).href,
  heading: "API Integration & Automation",
  description: "Connect your app to third-party services, automate workflows, and boost efficiency with robust API integrations."
}];

const pricings = [{
  darkMode: false,
  plan: 'Starter Plan',
  planicon: new URL('/src/assets/pricing/team-plan.svg', import.meta.url).href,
  planPrice: 1999,
  bullets:[
    "1 custom landing page",
    "Basic UI/UX design",
    "Responsive layout",
    "SEO-ready structure",
    "5 days delivery"
  ],
  callToAction: "Start Free Trail"
},{
  darkMode: true,
  plan: 'Pro Plan',
  planicon: new URL('/src/assets/pricing/individual-plan.svg', import.meta.url).href,
  planPrice: 999,
  bullets:[
    "Full website up to 5 pages",
    "Custom UI/UX design",
    "Contact form + integrations",
    "Mobile-first responsive design",
    "10 days delivery"
  ],
  callToAction: "Start Free Trail"
},{
  darkMode: false,
  plan: 'Enterprise',
  planicon: new URL('/src/assets/pricing/enterprise-plan.svg', import.meta.url).href,
  planPrice: "Custom",
  bullets:[
    "Full-stack  with dashboard",
    "Advanced UI/UX & animations",
    "API & third-party integrations",
    "Performance optimization",
    "Priority support"
  ],
  callToAction: "Start Free Trail"
},]

const FAQS = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We provide a comprehensive range of digital solutions to help businesses grow and thrive online. Our services include full-stack web development, custom mobile app development, modern UI/UX design, eCommerce store creation, branding and identity design, and post-launch support. Whether you're a startup looking for a brand-new product or an established business wanting a redesign, we tailor our solutions to meet your specific needs and goals."
  },
  {
    id: 2,
    question: "How long does it take to complete a web development project?",
    answer: "The timeline for a web development project varies depending on the scope, features, and complexity. Typically, a standard website with 4–6 pages can take 2 to 4 weeks, while larger custom web applications can take 6 to 12 weeks or more. We begin with a discovery phase, then move into design, development, testing, and finally deployment. We also maintain regular communication throughout to ensure alignment with your expectations."
  },
  {
    id: 3,
    question: "What technologies do you use for development?",
    answer: "We use the latest and most reliable technologies in the industry to build high-performing digital products. Our stack includes React, Next.js, and Vue.js for the frontend; Node.js, Express, and NestJS for the backend; and MongoDB and PostgreSQL for databases. For UI/UX, we rely on tools like Figma and Adobe XD. We also work with WordPress and headless CMS platforms for content-driven websites. Our tech choices are always driven by project requirements and scalability goals."
  },
  {
    id: 4,
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, absolutely. Launching a website or app is just the beginning. We offer ongoing support and maintenance services to ensure your platform remains secure, updated, and high-performing. This includes regular software updates, bug fixes, uptime monitoring, security patching, content updates, and performance optimization. Our support plans are flexible and can be tailored to suit your business needs, ensuring peace of mind long after the launch."
  },
  {
    id: 5,
    question: "Can you redesign our existing website or app?",
    answer: "Definitely. We specialize in transforming outdated or underperforming digital platforms into modern, user-friendly experiences. Our redesign process starts with a thorough audit of your current website or app to understand pain points and opportunities. From there, we craft a strategy focused on improved usability, visual appeal, performance, and alignment with your brand. Whether it’s a full visual overhaul or just UX improvements, we aim to deliver measurable results."
  },
  {
    id: 6,
    question: "How do we get started with your services?",
    answer: "Getting started is easy! Simply reach out to us through our website's contact form or via email. We'll schedule a free initial consultation to learn more about your business goals, project vision, and technical needs. Based on that, we’ll prepare a tailored proposal with a clear roadmap, timeline, and pricing structure. From discovery to delivery, we ensure a smooth and transparent collaboration every step of the way."
  }
];



export { logos ,features, pricings, FAQS };