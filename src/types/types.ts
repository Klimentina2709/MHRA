export interface AboutPage {
  id: number;
  title: string;
  firstSubTitle: string;
  firstParagraph: string;
  mission: string;
  vision: string;
  firstImage: string;
  goals: string;
  backup: string;
  acknowledgment: string;
  aspiration: string;
  secondImage: string;
  secondSubTitle: string;
  name: string;
  secondParagraph: string;
  thirdParagraph: string;
  forthParagraph: string;
  fifthParagraph: string;
  thirdImage: string;
}

export interface BoardType {
  id: number;
  image: string;
  name: string;
  profession: string;
}

export interface Event {
  id: string;
  theme: string;
  date: string;
  benefits: string;
  eventList: string[];
  eventDescription: string;
  events: EventsDetail[];
  category: string;
}

export interface EventsDetail {
  id: string;
  image: string;
  mainTitle: string;
  date?: string;
  textDescription: string;
  goal?: string;
  schedule?: {
    time: string;
    title: string;
    description?: string;
    presenter?: string;
    moderator?: string;
    panelists?: string;
  }[];
}

export interface SectionBlog {
  title: string;
  content: string | { subtitle: string; description: string }[];
}

export interface BlogsDetails {
  id: string;
  img: string;
  author: string;
  authorImage: string;
  title: string;
  introduction: string;
  sections: SectionBlog[];
}

export interface Blog {
  id: string;
  category: string;
  theme: string;
  blogs: BlogsDetails[];
}

export interface MenuItem {
  title: string;
  href: string;
  dropdown?: MenuItem[];
}

export interface CardData {
  id?: string;
  imageSrc: string;
  month: string;
  day: number;
  firstText?: string;
  lastText?: string;
  theme: string;
  title: string;
}

export interface JobsType {
  logo: string;
  position: string;
}

export interface BadgesType {
  id: number;
  badge: string;
  badgeDescription: string;
}

export interface ConnectType {
  id: number;
  userImage: string;
  userName: string;
}

export interface BuyCardType {
  cardDescription: string;
}

export interface ConferenceType {
  id: string;
  day: string;
  conferenceEvents: SingleDayConference[];
}

export interface SingleDayConference {
  time: string;
  title: string;
  description?: string;
  presenter?: string;
  moderator?: string;
}

export interface SpeakersType {
  id: number;
  name: string;
  profession: string;
  img: string;
}
