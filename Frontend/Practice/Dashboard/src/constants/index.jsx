import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import {
  GraduationCap,
  BookOpen,
  UserCheck,
  Users,
  Server,
  Shield,
  FileText,
  Briefcase,
  Building2,
  Compass,
  Cpu,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const surveys = [
  {
    icon: <BookOpen />,
    text: "Survey Administrasi Akademik",
    description:
      "Menilai tingkat kepuasan civitas akademika terhadap layanan administrasi akademik di lingkungan universitas.",
  },
  {
    icon: <UserCheck />,
    text: "Survey Bimbingan Akademik",
    description:
      "Mengukur efektivitas layanan bimbingan akademik dalam mendukung mahasiswa mencapai prestasi akademik yang optimal.",
  },
  {
    icon: <Users />,
    text: "Survey Layanan Informasi Karir dan Industri",
    description:
      "Mengevaluasi kualitas layanan informasi karir dan hubungan industri yang diberikan kepada alumni dan mahasiswa.",
  },
  {
    icon: <Server />,
    text: "Survey Layanan IT Fakultas",
    description:
      "Menilai performa dan ketersediaan layanan teknologi informasi di tingkat fakultas dan universitas.",
  },
  {
    icon: <Shield />,
    text: "Survey Layanan Keamanan & Kesehatan",
    description:
      "Mengukur kepuasan terhadap layanan keamanan, kebersihan, dan kesehatan di area kampus.",
  },
  {
    icon: <FileText />,
    text: "Survey Legalisir Dokumen",
    description:
      "Menilai ketepatan, kecepatan, dan kemudahan layanan legalisasi dokumen akademik bagi alumni.",
  },
  {
    icon: <Briefcase />,
    text: "Survey Profesionalisme ASN",
    description:
      "Mengukur tingkat profesionalisme dan kualitas kinerja ASN di lingkungan UIN Syarif Hidayatullah Jakarta.",
  },
  {
    icon: <Building2 />,
    text: "Survey Sarana dan Prasarana",
    description:
      "Menilai kelayakan, kenyamanan, dan ketersediaan sarana prasarana kampus bagi civitas akademika.",
  },
  {
    icon: <GraduationCap />,
    text: "Tracer Study (Layanan Alumni)",
    description:
      "Melacak jejak karir alumni untuk mengetahui relevansi kompetensi lulusan dengan kebutuhan dunia kerja.",
  },
  {
    icon: <Cpu />,
    text: "Survey Transformasi Digital",
    description:
      "Menilai implementasi dan dampak transformasi digital terhadap kegiatan akademik dan layanan universitas.",
  },
];

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
