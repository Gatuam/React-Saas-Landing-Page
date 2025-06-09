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
    "Full-stack web app with dashboard",
    "Advanced UI/UX & animations",
    "API & third-party integrations",
    "Performance optimization",
    "Priority support"
  ],
  callToAction: "Start Free Trail"
},]

export { logos ,features, pricings };