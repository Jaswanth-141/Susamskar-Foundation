import { Project, GalleryItem, Happening, Testimonial, Beneficiary } from './types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Value Education for Children",
    shortDesc: "We conduct programs in schools for children of all ages where they learn empathy, discipline and responsibility through interactive workshops.",
    fullDesc: "Our flagship school initiative aims to nurture essential moral values, character development, and life skills in children. Through stories, creative expressions, interactive group projects, and cultural celebrations, we build a solid moral foundation that guides them throughout their lives.",
    image: "https://lh3.googleusercontent.com/d/1842s8d6axB73kh1Rj-ymB8dOg0TjTY7F",
    audience: "School Students (Ages 6-15)",
    keyInitiatives: [
      "Weekly moral values classes in government and private schools",
      "Interactive story-telling and value-based theater workshops",
      "Character building camps during summer and winter vacations",
      "Elocution, drawing, and essay contests with moral themes"
    ]
  },
  {
    id: 2,
    title: "Youth Skill Development and Mentorship",
    shortDesc: "Our youth programs at IIT Kharagpur and other institutions engage students through mentoring circles, discussions, and service activities.",
    fullDesc: "Empowering the next generation with both professional skills and moral strength. We offer comprehensive mentorship covering soft skills, career clarity, emotional resilience, and community responsibility, helping young leaders bridge academic excellence with social empathy.",
    image: "https://lh3.googleusercontent.com/d/1L7zN12tCkkw0UtJkaatRcsdzJdwq2Im6",
    audience: "College Students & Young Professionals (Ages 18-25)",
    keyInitiatives: [
      "Mentorship sessions guided by IIT alumni and senior professionals",
      "Seminars on stress management, time management, and focus",
      "Technical bootcamps and collaborative soft-skills workshops",
      "Social service internship programs for active field experience"
    ]
  },
  {
    id: 3,
    title: "Teaching and Parenting Guidance",
    shortDesc: "We organize interactive workshops to strengthen communication and shared responsibility in shaping children's character.",
    fullDesc: "Education is a collaborative journey between educators and parents. Our interactive modules guide parents and teachers in creating a warm, empathetic environment that encourages healthy emotional growth, constructive communication, and character reinforcement at home and school.",
    image: "https://lh3.googleusercontent.com/d/1IGvoMsB6uoHioa-DyjopHdJ_We9OqTVO",
    audience: "Parents, Teachers & Academic Counselors",
    keyInitiatives: [
      "Constructive parenting seminars and dialogue circles",
      "Teacher training programs on empathetic counseling techniques",
      "Parent-child joint workshops for building strong familial bonds",
      "Special counseling sessions on addressing adolescent stress"
    ]
  },
  {
    id: 4,
    title: "Workplace Harmony Initiatives",
    shortDesc: "As external counselors, we conduct workplace sensitization sessions that foster respect, empathy, and inclusion among employees.",
    fullDesc: "Fostering ethical excellence, empathy, and professional harmony inside diverse workplaces. We provide advisory workshops, gender sensitization, and emotional wellness lectures designed to promote inclusive, supportive, and highly collaborative office cultures.",
    image: "https://lh3.googleusercontent.com/d/1YAZGtesdcu5mCDE1xMpAzXERrvy5-4MO",
    audience: "Corporate Employees, Executives & Internal Committees",
    keyInitiatives: [
      "POSH sensitization and gender equality workshops",
      "Interactive sessions on conflict resolution and empathetic speech",
      "Mindfulness and work-life balance retreats for employees",
      "Ethics and integrity-based leadership workshops"
    ]
  },
  {
    id: 5,
    title: "Sustainable Farming and Community Welfare",
    shortDesc: "Our rural initiatives promote sustainable farming practices while extending support through food, clothes, and blanket distribution.",
    fullDesc: "Nurturing agricultural and societal sustainability in rural communities. By helping farmers shift to ecofriendly multi-cropping and modern organic farming, while providing direct humanitarian relief (such as winter clothes, food drives, and primary educational kits) to underprivileged families.",
    image: "https://lh3.googleusercontent.com/d/1E12N5cdSKugAv8NfXwfh5LkOsUFIvGTc",
    audience: "Rural Farmers, Underprivileged Families & Local Villages",
    keyInitiatives: [
      "Organic farming workshops and eco-friendly manure distribution",
      "Winter clothing, blankets, and essential food distribution drives",
      "Drinking water access and sanitation counseling in villages",
      "Evening educational support and learning kits for rural children"
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Value Education program in schools",
    category: "Children",
    image: "https://lh3.googleusercontent.com/d/19Pd5mZgcAexJAHlpfLl9bz5fSrG32YxK"
  },
  {
    id: 2,
    title: "Value Education program in IIT Kgp",
    category: "Youth",
    image: "https://lh3.googleusercontent.com/d/13mTOukkq06wFkwWMLUm4gpXgC19Ni6N1"
  },
  {
    id: 3,
    title: "Mentoring workshops for youth",
    category: "Youth",
    image: "https://lh3.googleusercontent.com/d/13Pfg78Zupk_Lh8wgsNVXnTSDjFpqa0JS"
  },
  {
    id: 4,
    title: "Our Dedicated Team",
    category: "Community",
    image: "https://lh3.googleusercontent.com/d/1dmJtqLe3nS0lQRkXvBYq_U6BUKVANkio"
  },
  {
    id: 5,
    title: "Cloth distribution for underprivileged",
    category: "Welfare",
    image: "https://lh3.googleusercontent.com/d/14oWFP7uAWiybl-Xqi_4gk2r7GhGvHobL"
  },
  {
    id: 6,
    title: "Sustainable farming workshop",
    category: "Farming",
    image: "https://lh3.googleusercontent.com/d/1NpE2mUkMoOKkmKBQ8wp1IMin5vdrQz74"
  }
];

export const happeningsData: Happening[] = [
  {
    id: 1,
    title: "Annual Fun Fest: Nurturing Young Minds",
    desc: "Over 60 children at IIT Kharagpur joined for a joyful blend of stories, and creative activities — nurturing values through fun and friendship.",
    date: "Mar 23, 2025",
    image: "https://lh3.googleusercontent.com/d/1Ic6XjFuPOn8kUVHwGtD_B3y95kdyP3eU",
    category: "Festivals"
  },
  {
    id: 2,
    title: "Food Distribution Drive in Balarampur",
    desc: "Over 200 nutritious lunches were distributed to children in schools of Balarampur village, during festive occasions.",
    date: "Sep 5, 2025",
    image: "https://lh3.googleusercontent.com/d/14Qx3hvdApPjcJ7H2PPQ-PUhNKkmRsUAF",
    category: "Welfare"
  },
  {
    id: 3,
    title: "Sowing Change: Farming for the future",
    desc: "Conducted awareness session in Balarampur village on multi-crop farming, helping farmers explore sustainable practices for better yield.",
    date: "Aug 10, 2025",
    image: "https://lh3.googleusercontent.com/d/1shxGYL7QI7kRMwYeR87GYX5_LcYpk9Xl",
    category: "Farming"
  },
  {
    id: 4,
    title: "IIT Kgp Youth Mentorship Program",
    desc: "A closer look at initiatives promoting respect, inclusion, and equal opportunities for everyone, regardless of background or identity.",
    date: "Aug 10, 2025",
    image: "https://lh3.googleusercontent.com/d/13T0jrRtH9SeJK3SeHyblF6j6Ok6ELELT",
    category: "Mentorship"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Hare Krishna",
    role: "Volunteer",
    org: "IIT Kharagpur",
    content: "Attending the sessions of Susamskar Foundation helped me a lot in handling academic pressure and developing a more positive perspective towards challenges in college life. Over time, I felt inspired to volunteer and share the same values that I received. It's deeply fulfilling to be part of an association that's creating a positive impact in others' lives and helping youth like me grow with clarity and purpose.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Meena Kak",
    role: "Director",
    org: "LSA Academy",
    content: "Inculcating right values among our students is the need of the hour so that they are armed with all skills to face challenges of life. Our students have gained rich experience by being part of these classes and definitely have imbibed good values. We would be happy and eager to have these classes in the next session as well.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sukla Samanta",
    role: "Special Commissioner of Revenue",
    org: "Directorate of Commercial Taxes, West Bengal",
    content: "We appreciate Smt. Supriya Hazra, Secretary, Susamskar Foundation for her role as the member of ICC. Her active role in the meetings with clarity of thoughts has been a great support to the Department in redressal of several complaints with proper sensitivity and empathizing judgement.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
  }
];

export const beneficiariesData: Beneficiary[] = [
  {
    id: 1,
    name: "IIT Kharagpur",
    logoText: "IIT",
    logoSub: "Kgp",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg"
  },
  {
    id: 2,
    name: "Directorate of Commercial Taxes, West Bengal",
    logoText: "DCT",
    logoSub: "WB",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmYtYW9Lp0phOePbjLv3jDEIR7vqjTSUgRQ&s"
  },
  {
    id: 3,
    name: "Kendriya Vidyalaya Sangathan",
    logoText: "KVS",
    logoSub: "KVS",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQVheGl2AkiEKMPjZfhQiNFhguMosBZNShg&s"
  },
  {
    id: 4,
    name: "CRPF Public School",
    logoText: "CRPF",
    logoSub: "CRPF",
    logoUrl: "https://pbs.twimg.com/profile_images/1500539203154677760/-dC12dER_400x400.jpg"
  },
  {
    id: 5,
    name: "Lakshmipat Singhania Academy",
    logoText: "LSA",
    logoSub: "LSA",
    logoUrl: "https://resources.edunexttechnologies.com/web-data/lsa-kolkata/img/logo-rect.png"
  },
  {
    id: 6,
    name: "Salt Lake Shiksha Niketan",
    logoText: "SLSN",
    logoSub: "SLSN",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPRJdSDsori6kumdzFLV8Wfz5C1Z9eITsHw&s"
  }
];
