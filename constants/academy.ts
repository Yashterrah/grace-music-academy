/**
 * Grace Muigai Music Academy
 * Central Business Configuration
 */

export const academy = {
  name: "Grace Muigai Music Academy",

  shortName: "GMMA",

  slogan: "Nurturing Musical Excellence",

  description:
    "Grace Muigai Music Academy provides quality music education through structured learning, professional instruction, and modern teaching methods for learners of all ages.",

  founded: 2026,

  location: {
    county: "Nairobi",
    country: "Kenya",
  },

  contact: {
    phone: "+254702337575",

    email: "",

    whatsapp: "+254702337575",
  },

  payment: {
    method: "M-Pesa Buy Goods",

    tillNumber: "4349699",
  },

  onlineClasses: {
    startsOn: "2026-08-07",

    timezone: "Africa/Nairobi",
  },

  grades: [
    {
      grade: 4,
      time: "09:00 AM",
      fee: 2000,
    },

    {
      grade: 5,
      time: "10:00 AM",
      fee: 2500,
    },

    {
      grade: 6,
      time: "11:00 AM",
      fee: 3000,
    },

    {
      grade: 7,
      time: "02:00 PM",
      fee: 4500,
    },

    {
      grade: 8,
      time: "03:00 PM",
      fee: 4500,
    },

    {
      grade: 9,
      time: "04:00 PM",
      fee: 4500,
    },
  ],

  socials: {
    facebook: "",

    instagram: "",

    youtube: "",

    tiktok: "",
  },
} as const;

export type Academy = typeof academy;