export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

// Real client testimonials (from irfandar.com).
export const testimonials: Testimonial[] = [
  {
    name: "Indrajith K",
    role: "Interifix Technical Services · Branding",
    initials: "IK",
    quote:
      "Irfan is an exceptionally talented creative professional who consistently delivers top-tier work. His branding gave us a clear, confident identity.",
  },
  {
    name: "Ali",
    role: "Olat Properties · Social Media",
    initials: "AL",
    quote:
      "Irfan did an excellent job managing our social media — professional, creative and consistent, and he genuinely understood our real estate business.",
  },
  {
    name: "Mohammad Asim",
    role: "Video Production",
    initials: "MA",
    quote:
      "The edit came back cleaner and sharper than I'd hoped, and he kept me in the loop the whole way. On a tight deadline, he's now my first call.",
  },
  {
    name: "Ovais",
    role: "Pashmeen · Logo Design",
    initials: "OV",
    quote:
      "Amazing skills. It was my first project with Irfan and he delivered well before time — genuinely excellent work from start to finish.",
  },
  {
    name: "Private Client",
    role: "Graphic Design",
    initials: "PC",
    quote:
      "Irfan Dar is an exceptionally talented graphic designer with a great eye for detail and creativity — modern work, and reliable every time.",
  },
];
