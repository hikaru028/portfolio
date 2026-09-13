import { GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";
import { profile, experience, education, skills } from "@/data/profile";
// Compatibility exports for the original tab components. Career data lives in one place.
export const personalData = [
  { icon: <User size={20} />, text: profile.name },
  { icon: <Phone size={20} />, text: profile.phone },
  { icon: <Mail size={20} />, text: profile.email },
  {
    icon: <GraduationCap size={20} />,
    text: "Master of Information Technology",
  },
  { icon: <MapPin size={20} />, text: profile.location },
];
export const workData = experience.map((item) => ({
  company: item.company,
  role: item.role,
  title: item.location,
  years: item.period,
}));
export const educationData = education.map((item) => ({
  university: item.school,
  degree: item.qualification,
  years: item.period,
}));
export const skillData = skills.flatMap((item) => [
  { name: item.title },
  { name: item.items.join(", ") },
]);
