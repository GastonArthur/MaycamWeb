import { url } from "inspector"

// Datos estáticos para la web
export const websiteData = {
 logo: {
    type: "image",
    text: "MAYCAM EVOLVE",
    image: "../maycam_logo/LOGOMaycam.png",
  },  
  hero: {
    title: "MAYCAM EVOLVE",
    description: "Equipo profesional de eSports con mayor presencia en el mundo de los eSports ",
    buttonText: "Conoce al equipo",
    buttonUrl: "/sobre-nosotros",
    backgroundImages: [
      {
        image: "/bg_photo/home_bg3.jpg",
        alt: "Maycam Evolve",
      },
      {
        image: "/bg_photo/home_bg2.jpg",
        alt: "Equipo Profesional",
      },
    ],
    slides: [],
  },
  teamInfo: {
    name: "Maycam Evolve",
    slogan: "Evoluciona. Compite. Conquista.",
    description:
      "Maycam Evolve es un equipo profesional de eSports fundado con la misión de revolucionar la escena competitiva. Nuestro enfoque se centra en el desarrollo de talento y la creación de una comunidad apasionada por los deportes electrónicos.",
    mission:
      "Desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca en torneos nacionales e internacionales, fomentando valores como el trabajo en equipo, la disciplina y la excelencia.",
    vision:
      "Ser reconocidos como el equipo de eSports líder, impulsando la profesionalización del sector y creando oportunidades para que los jugadores con talento puedan desarrollar carreras exitosas en los deportes electrónicos.",
  },
  about: {
    title: "SOBRE NOSOTROS",
    description:
      "Conoce la historia, valores y visión que impulsan a nuestro equipo a ser un referente en el mundo de los eSports.",
    mission:
      "Desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca en torneos nacionales e internacionales, fomentando valores como el trabajo en equipo, la disciplina y la excelencia.",
    vision:
      "Ser reconocidos como el equipo de eSports líder, impulsando la profesionalización del sector y creando oportunidades para que los jugadores con talento puedan desarrollar carreras exitosas en los deportes electrónicos.",
    backgroundImage: "/bg_photo/home_bg3.jpg",
    values: [
      {
        title: "Excelencia",
        description: "Buscamos la excelencia en todo lo que hacemos, desde el entrenamiento hasta la competición.",
        icon: "✨",
      },
      {
        title: "Trabajo en equipo",
        description: "Creemos en el poder del trabajo en equipo para superar cualquier desafío.",
        icon: "🤝",
      },
      {
        title: "Innovación",
        description: "Nos adaptamos constantemente a los cambios y buscamos nuevas formas de mejorar.",
        icon: "💡",
      },
      {
        title: "Pasión",
        description: "La pasión por los eSports impulsa todo lo que hacemos.",
        icon: "❤️",
      },
      {
        title: "Respeto",
        description: "Tratamos a todos con respeto, desde compañeros hasta competidores.",
        icon: "🙏",
      },
      {
        title: "Compromiso",
        description: "Compartimos el mismo compromiso con el equipo y con nuestros jugadores.",
        icon: "💪",
      },
    ],
  },
  sponsors: {
    title: "NOS ACOMPAÑARON",
    description: "Empresas que confían en nosotros y nos apoyan en nuestro camino hacia la excelencia.",
    sponsors: [
      {
        id: "sponsor1",
        name: "Enard",
        logo: "/sponsor_logo/Enard-Sponsor.png",
        description: "Descripción del patrocinador 1",
        url: "https://enard.org.ar/",
      },
      {
        id: "sponsor2",
        name: "Gatorade",
        logo: "/sponsor_logo/Gatorade-Sponsor.png",
        description: "Descripción del patrocinador 2",
        url: "https://gatorade.lat/ar/",
      },
      {
        id: "sponsor3",
        name: "GGPoker",
        logo: "/sponsor_logo/GGPoker-Sponsor.png",
        description: "Descripción del patrocinador 3",
        url: "https://ggpoker.com/",
      },
      {
        id: "sponsor4",
        name: "JBL",
        logo: "/sponsor_logo/JBLSponsor.png",
        description: "Descripción del patrocinador 3",
        url: "https://www.jbl.com.ar/",
      },
      {
        id: "sponsor5",
        name: "MaycamGames",
        logo: "/sponsor_logo/Maycam-Sponsor.png",
        description: "Descripción del patrocinador 3",
        url: "https://www.maycamgames.com.ar/",
      },
      {
        id: "sponsor6",
        name: "Rodo",
        logo: "/sponsor_logo/Rodo-Sponsor.png",
        description: "Descripción del patrocinador 3",
        url: "https://www.rodo.com.ar/",
      },
      {
        id: "sponsor7",
        name: "Prex",
        logo: "/sponsor_logo/Prex-Sponsor.png",
        description: "Descripción del patrocinador 3",
        url: "https://www.prexcard.com.ar/",
      },
      {
        id: "sponsor8",
        name: "SanIgnacio",
        logo: "/sponsor_logo/San-Ignacio.png",
        description: "Descripción del patrocinador 3",
        url: "https://sanignacio.com.ar/",
      },
      {
        id: "sponsor9",
        name: "Seagate",
        logo: "/sponsor_logo/Seagate-Sponsor.png",
        description: "Descripción del patrocinador 3",
        url: "https://www.seagate.com/",
      },
    ],
  },
  staff: {
    title: "NUESTRO STAFF",
    description: "El equipo detrás del equipo que hace posible nuestro éxito.",
    staffMembers: [
      {
        id: "staff1",
        name: "Mariano Diletto",
        role: "Dueño",
        image: "/staff/Mariano.jpg",
        description: "Líder y estratega en el mundo de los eSports, gestionando el crecimiento y posicionamiento del equipo. Enfocado en la expansión de la marca, gestión de talento, alianzas y desarrollo de comunidad, con el objetivo de llevar al equipo al más alto nivel competitivo.",
        socialMedia: {
          twitter: "#",
          instagram: "#",
          linkedin: "https://www.linkedin.com/in/mariano-diletto-587a83198/",
          email: "#",
        },
      },
      {
        id: "staff2",
        name: "Juan Rodriguez",
        role: "Director Deportivo",
        image: "/staff/Juan.jpg",
        description: "Responsable del rendimiento competitivo del equipo, gestionando jugadores, entrenadores y estrategias de entrenamiento. Enfocado en scouting, análisis de desempeño y planificación deportiva para optimizar el desarrollo y éxito en torneos.",
        socialMedia: {
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: "staff3",
        name: "Camila Rodriguez",
        role: "Creadora de contenido",
        image: "/staff/Camila.jpg",
        description: "Apasionada por el mundo digital, generando contenido atractivo y auténtico para conectar con la audiencia. Enfocada en entretenimiento, gaming y branding personal, creando videos, streams y publicaciones que potencian el engagement y el crecimiento en redes sociales.",
        socialMedia: {
          twitter: "https://x.com/rodcami_",
          instagram: "https://instagram.com/rodcami_",
          linkedin: "https://www.linkedin.com/in/rodcami/",
          email: "camilamaycam@gmail.com",
        },
      },
    ],
  },
  players: {
    title: "NUESTROS JUGADORES",
    description:
      "Conoce a los profesionales que representan a nuestro equipo en las competiciones más importantes del mundo.",
    games: [
      {
        id: "valorant",
        name: "Valorant",
        image: "/games_photos/VALORANT.jpg",
        description: "Nuestro equipo de Valorant compite en los torneos más prestigiosos a nivel mundial.",
      },
      {
        id: "fifa",
        name: "FIFA",
        image: "/games_photos/FIFA25.jpg",
        description: "Nuestro equipo de FIFA compite en los torneos más prestigiosos a nivel mundial.",
      },
      {
        id: "simracing",
        name: "Simracing",
        image: "/games_photos/F1.jpg",
        description: "Nuestro equipo de Simracing compite en los torneos más prestigiosos a nivel mundial.",
      },
    ],
    players: [
      {
        id: "player1",
        name: "Juan Rodriguez",
        nickname: "Juancito",
        gameId: "fifa",
        role: "Profesional de FIFA",
        image: "/players_photo/Juan_Rodriguez.jpg",
        description: "Jugador profesional de FIFA con más de 5 años de experiencia competitiva.",
        socialMedia: {
          twitter: "#",
          instagram: "#",
          twitch: "#",
        },
      },
      {
        id: "player2",
        name: "Matias Rossi",
        nickname: "MatyR29",
        gameId: "simracing",
        role: "Profesional de Sim Racing",
        image: "/players_photo/Matias_Rossi.jpg",
        description: "Jugador profesional de Sim Racing con más de 5 años de experiencia competitiva.",
        socialMedia: {
          twitter: "#",
          instagram: "#",
          twitch: "#",
        },
      },
      {
        id: "player3",
        name: "Thiago Amari",
        nickname: "Thiago",
        gameId: "simracing",
        role: "Profesional de Sim Racing",
        image: "/players_photo/Thiago_Amari.jpg",
        description: "Jugador profesional de Sim Racing con más de 5 años de experiencia competitiva.",
        socialMedia: {
          twitter: "#Thiago.Amari",
          instagram: "#",
          twitch: "#",
        },
      },
    ],
    
  },
  achievements: {
    title: "NUESTROS LOGROS",
    description: "Descubre los éxitos y reconocimientos de Maycam Evolve a lo largo de su historia.",
    achievements: [
      {
        id: "achievement1",
        title: "Mundial Arabia DOTA 2",
        date: "2023-06-15",
        description: "CLasificados al mundial de Arabia organizado por globalesports federacion, en donde terminamos en 3er lugar",
        tournament: "Mundial de Arabia DOTA2",
        prize: "$50,000",
        imageUrl: "/logros_photos/Logro1.jpg",
      },
      {
        id: "achievement2",
        title: "SIX Invitational tournament",
        date: "2023-11-20",
        description: "Clasificados al SIX Invinational, el torneo mas importante al nivel ecosistema Rainbow Six viajando a la ciudad de São Paulo",
        tournament: "SIX INVITATIONAL",
        prize: "$30,000",
        imageUrl: "/logros_photos/Logro3.jpg",
      },
      {
        id: "achievement3",
        title: "Presencial TNP Super Turismo",
        date: "2024-02-10",
        description: "Clasificados al presencial de TNP(The New Project) a traves de la competencia del super turismo de marcas en donde nuestros pilotos tuvieron una gran performance en 2024",
        tournament: "The New Project",
        prize: "Trofeo",
        imageUrl: "/logros_photos/Logro2.jpg",
      },
      {
        id: "achievement4",
        title: "Campeones MPL MOONTON GAMES",
        date: "2024-11-20",
        description: "Campeones de MPL, debutando en MLBB organizado por MOONTON GAMES con ese triunfo nos clasificamos el mundia de en Kuala Lumpur MALASIA 2024",
        tournament: "MPL 2024 by MOONTON GAMES",
        prize: "$30,000",
        imageUrl: "/logros_photos/Logro4.jpg",
      },
    ],
  },
  contact: {
    title: "CONTACTO",
    description: "Ponete en contacto con nosotros para cualquier consulta, propuesta o colaboración.",
    email: "info@maycamevolve.com",
    phone: "+54 9 11 5997 5193",
    address: "Buenos Aires, Argentina",
    socialMedia: {
      twitter: "https://x.com/maycamevolve#",
      instagram: "https://instagram.com/maycamevolve",
      facebook: "https://facebook.com/maycamevolve",
      youtube: "https://youtube.com/maycamevolve",
      twitch: "https://twitch.tv/maycamevolve",
    },
    info: {
      email: "info@maycamevolve.com",
      phone: "+54 9 11 5997 5193",
      address: "Buenos Aires, Argentina",
      socialMedia: {
        twitter: "https://x.com/maycamevolve#",
        instagram: "https://instagram.com/maycamevolve",
        facebook: "https://facebook.com/maycamevolve",
        youtube: "https://youtube.com/maycamevolve",
        twitch: "https://twitch.tv/maycamevolve",
      },
    },
  },
}

// Definición de la interfaz Player
export interface Player {
  id: string
  name: string
  nickname?: string
  gameId: string
  role: string
  image?: string
  description?: string
  socialMedia?: {
    twitter?: string
    instagram?: string
    twitch?: string
  }
  stats?: {
    [key: string]: string | number
  }
  achievements?: string[]
}

// Función para obtener los datos
export function getData() {
  return websiteData
}

// Clase DataService para mantener compatibilidad con el código existente
export class DataService {
  static getData() {
    return websiteData
  }

  static updateSection(sectionName: string, data: any) {
    // Esta función no hace nada en esta versión simplificada
    console.log(`Updating section ${sectionName} with data:`, data)
    return true
  }
}

