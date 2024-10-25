import { MenuItem } from "@/types/types";

export const menuItems: MenuItem[] = [
  {
    title: "Информативни содржини",
    href: "/comingSoon",
    dropdown: [
      { title: "За нас", href: "/about" },
      { title: "Членство", href: "/comingSoon" },
      { title: "Oгранок на Коучинг", href: "/comingSoon" },
      { title: "Галерии", href: "/comingSoon" },
      { title: "Огласи за работа", href: "/comingSoon" },
      { title: "HR Награди", href: "/comingSoon" },
      { title: "Е-Весник на МАЧР", href: "/comingSoon" },
      { title: "Архива", href: "/comingSoon" },
      { title: "FAQ", href: "/comingSoon" },
    ],
  },
  {
    title: "Едукативни содржини",
    href: "/comingSoon",
    dropdown: [
      { title: "Статии", href: "/comingSoon" },
      { title: "Истражувања", href: "/comingSoon" },
      { title: "Интервјуа", href: "/comingSoon" },
      { title: "Обуки", href: "/comingSoon" },
      { title: "Македонски Академии", href: "/comingSoon" },
      { title: "Проекти", href: "/comingSoon" },
      { title: "Експерти", href: "/comingSoon" },
      { title: "Трендови", href: "/comingSoon" },
    ],
  },
  { title: "Годишна конференција", href: "/conference" },
  {
    title: "Настани",
    href: "/events",
    dropdown: [
      { title: "HR Кафе", href: "/events/group/hr_coffee" },
      { title: "HR Викенд", href: "/events/group/hr_weekend" },
      { title: "HR Вебинар", href: "/events/group/hr_webinar" },
      { title: "HR Конференции", href: "/events/group/hr_conference" },
    ],
  },
  { title: "Блог", href: "/blogs" },
];
