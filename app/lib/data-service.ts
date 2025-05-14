import { url } from "inspector"
import { Linkedin } from "lucide-react"

// Datos estáticos para la web
export const websiteData = {
 logo: {
    type: "image",
    text: "MAYCAM EVOLVE",
    image: "../maycam_logo/LOGOMaycam.png",
  },  
  hero: {
    title: "MAYCAM EVOLVE",
    description: "Equipo profesional de esports",
    buttonText: "Conoce al equipo",
    buttonUrl: "/sobre-nosotros",
    backgroundImages: [
      {
        image: "/bg_photo/home_bg4.jpg",
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
      "Maycam Evolve es un equipo profesional de esports fundado con la misión de revolucionar la escena competitiva. Nuestro enfoque se centra en el desarrollo de talento y la creación de una comunidad apasionada por los deportes electrónicos.",
    mission:
      "Desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca en torneos nacionales e internacionales, fomentando valores como el trabajo en equipo, la disciplina y la excelencia.",
    vision:
      "Ser reconocidos como el equipo de esports líder, impulsando la profesionalización del sector y creando oportunidades para que los jugadores con talento puedan desarrollar carreras exitosas en los deportes electrónicos.",
  },
  about: {
    title: "SOBRE NOSOTROS",
    description:
      "Conoce la historia, valores y visión que impulsan a nuestro equipo a ser un referente en el mundo de los esports.",
    mission:
      "Desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca en torneos nacionales e internacionales, fomentando valores como el trabajo en equipo, la disciplina y la excelencia.",
    vision:
      "Ser reconocidos como el equipo de esports líder, impulsando la profesionalización del sector y creando oportunidades para que los jugadores con talento puedan desarrollar carreras exitosas en los deportes electrónicos.",
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
        description: "La pasión por los esports impulsa todo lo que hacemos.",
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
        name: "Juan Rodriguez",
        role: "Director Deportivo",
        image: "/staff/Juan.jpg",
        description: "Responsable del rendimiento competitivo del equipo, gestionando jugadores, entrenadores y estrategias de entrenamiento. Enfocado en scouting, análisis de desempeño y planificación deportiva para optimizar el desarrollo y éxito en torneos.",
        socialMedia: {
          twitter: "https://x.com/JuaanRP_",
          instagram: "https://www.instagram.com/juanrpx_/",
          linkedin: "https://www.linkedin.com/in/juan-rodriguez-0b04061a6/",
        },
      },
      {
        id: "staff2",
        name: "Camila Rodriguez",
        role: "Brand Manager",
        image: "/staff/Camila.jpg",
        description: "Apasionada por el mundo digital, generando contenido atractivo y auténtico para conectar con la audiencia. Enfocada en entretenimiento, gaming y branding personal, creando videos, streams y publicaciones que potencian el engagement y el crecimiento en redes sociales.",
        socialMedia: {
          twitter: "https://x.com/rodcami_",
          instagram: "https://instagram.com/rodcami_",
          linkedin: "https://www.linkedin.com/in/rodcami/",
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
        id: "rainbowsix",
        name: "Rainbow Six",
        image: "/games_photos/RAINBOW.jpg",
        description: "Nuestro equipo de Rainbow Six compite en los torneos más prestigiosos a nivel mundial.",
      },
      {
        id: "fifa",
        name: "FIFA",
        image: "/games_photos/FIFA25.jpg",
        description: "Nuestros jugadores profesionales de EA FC compiten al más alto nivel a través del circuito oficial de EA SPORTS",
      },
      {
        id: "simracing",
        name: "Simracing",
        image: "/games_photos/F1.jpg",
        description: "Nuestros pilotos de Sim Racing llegan a su máxima velocidad en los campeonatos oficiales a nivel nacional e internacional",
      },
    ],
    players: [
      {
        id: "player1",
        name: "Juan Rodriguez",
        nickname: "JuaanRP_",
        gameId: "fifa",
        role: "Profesional de FIFA",
        image: "/players_photo/fifa/Juan_Rodriguez.png",
        description: "Referente en FIFA, con una mentalidad competitiva y estratégica que marca la diferencia en cada torneo.",
        socialMedia: {
          twitter: "https://x.com/JuaanRP_",
          instagram: "https://www.instagram.com/juanrpx_/",
          Linkedin: "https://www.linkedin.com/in/juan-rodriguez-0b04061a6/",
        },
      },
      {
        id: "player2",
        name: "Matias Rossi",
        nickname: "MatyR29",
        gameId: "simracing",
        role: "Profesional de Sim Racing",
        image: "/players_photo/simracing/Mati_Rossi.png",
        description: "Especialista en Sim Racing, apasionado por los motores y la precisión al volante, siempre buscando superar sus límites.",
        socialMedia: {
          twitter: "#",
          instagram: "#",
          Linkedin: "#",
        },
      },
      {
        id: "player3",
        name: "Matias Gil",
        nickname: "Matias_gil92",
        gameId: "simracing",
        role: "Profesional de Sim Racing",
        image: "/players_photo/simracing/MatiasGil.jpg",
        description: "Amante de la velocidad y la competencia. Su constancia en Sim Racing lo convierte en un piloto sólido y confiable.",
        socialMedia: {
          instagram: "https://www.instagram.com/Matias_gil92",
        },
      },
        {
          id: "player4",
          name: "Thiago Amari",
          nickname: "Amariyo27",
          gameId: "simracing",
          role: "Profesional de Sim Racing",
          image: "/players_photo/simracing/Thiago_Amari.png",
          description: "Piloto de Sim Racing con una gran capacidad de adaptación y lectura de carrera, destacándose por su enfoque y dedicación.",
          socialMedia: {
            twitter: "https://x.com/ThiagoAmari12",
            instagram: "https://www.instagram.com/thiago.amari/",
            Linkedin: "https://www.linkedin.com/in/thiagoamari/",
          },
      },
      {
        id: "player5",
        name: "Bruno Gussoni",
        nickname: "eV.hurbyz",
        gameId: "rainbowsix",
        role: "Profesional de Rainbow Six",
        image: "/players_photo/rainbow/Bruno.png",
        description: "Jugador de Rainbow Six, con una mente táctica y frialdad en las situaciones más intensas, siempre listo para liderar.",
        socialMedia: {
          twitter: "",
          instagram: "",
          Linkedin: "",
        },
      },
      {
        id: "player6",
        name: "Eduardo",
        nickname: "eV.abridex",
        gameId: "rainbowsix",
        role: "Profesional de Rainbow Six",
        image: "/players_photo/rainbow/Eduardo.png",
        description: "Meticuloso y estratégico, con una visión de juego que aporta inteligencia y control en cada partida.",
        socialMedia: {
          twitter: "",
          instagram: "",
          Linkedin: "",
        },
      },
      {
        id: "player7",
        name: "Gabriel",
        nickname: "eV.derneka",
        gameId: "rainbowsix",
        role: "Profesional de Rainbow Six",
        image: "/players_photo/rainbow/Gabriel.png",
        description: "Fuerte en la toma de decisiones y con excelente coordinación de equipo, pieza clave dentro de las filas de Rainbow Six.",
        socialMedia: {
          twitter: "",
          instagram: "",
          Linkedin: "",
        },
      },
      {
        id: "player8",
        name: "Joao",
        nickname: "eV.zeno",
        gameId: "rainbowsix",
        role: "Profesional de Rainbow Six",
        image: "/players_photo/rainbow/Joao.png",
        description: "Jugador de Rainbow Six con gran reflejo y agilidad mental, siempre preparado para reaccionar ante cualquier desafío.",
        socialMedia: {
          twitter: "",
          instagram: "",
          Linkedin: "",
        },
      },
      {
        id: "player9",
        name: "Lucas",
        nickname: "eV.zluk",
        gameId: "rainbowsix",
        role: "Profesional de Rainbow Six",
        image: "/players_photo/rainbow/Lucas.png",
        description: "Con sangre fría y precisión quirúrgica, es el jugador que asegura los momentos más críticos en el equipo.",
        socialMedia: {
          twitter: "",
          instagram: "",
          Linkedin: "",
        },
      },
      {
        id: "player10",
        name: "Paulo",
        nickname: "eV.Vnk",
        gameId: "rainbowsix",
        role: "Profesional de Rainbow Six",
        image: "/players_photo/rainbow/Paulo.png",
        description: "Jugador de Rainbow Six con enfoque en el trabajo en equipo y comunicación efectiva, aportando solidez y compromiso.",
        socialMedia: {
          twitter: "",
          instagram: "",
          Linkedin: "",
        },
      },
    ],
    
  },
  achievements: {
    title: "NUESTROS LOGROS",
    description: "Descubre los éxitos y reconocimientos de Maycam Evolve a lo largo de su historia.",
    achievements:[
        {
          id: "achievement12",
          title: "¡Campeones de MPL 2024 y clasificados al Mundial de MLBB! 🏆🔥",
          date: "2024-10-05",
          description: "En nuestro debut en Mobile Legends: Bang Bang, nos consagramos campeones de la MPL 2024, torneo presencial organizado por MOONTON GAMES. Con esta victoria, aseguramos nuestra clasificación al Mundial de MLBB en Kuala Lumpur, Malasia. ¡Vamos por más!",
          tournament: "MPL 2024 - Clasificación al Mundial de MLBB",
          prize: "",
          imageUrl: "/logros_photos/Logro-12.jpg"
        },
        {
          id: "achievement11",
          title: "¡Clasificados al presencial de TNP 2024! 🏎️🔥",
          date: "2024-08-12",
          description: "Nuestros pilotos de Sim Racing lograron la clasificación al evento presencial de The New Project (TNP) a través de la competencia del Super Turismo de Marcas, demostrando un gran nivel en 2024. ¡Vamos con todo a la próxima etapa!",
          tournament: "The New Project (TNP) – Super Turismo de Marcas 2024",
          prize: "",
          imageUrl: "/logros_photos/Logro-11.jpg"
        },
        {
          id: "achievement10",
          title: "Acuerdo histórico con el ENARD para impulsar los esports 🎮🇦🇷",
          date: "2024-05-31",
          description: "El 31 de mayo firmamos un acuerdo con el ENARD, convirtiéndonos en patrocinadores oficiales del gaming para fomentar los deportes electrónicos entre atletas de disciplinas tradicionales. Con equipamiento exclusivo, capacitaciones y el apoyo de nuestros pro players, buscamos integrar los esports como una nueva forma de entrenamiento y dispersión en el CENARD.",
          tournament: "Acuerdo ENARD x Maycam Evolve",
          prize: "",
          imageUrl: "/logros_photos/Logro-10.jpg"
        },
        {
          id: "achievement9",
          title: "¡Subcampeones en los Juegos Panamericanos de Chile 2024! 🏅🔥",
          date: "2024-03-24",
          description: "Nuestro equipo de Dota 2 logró la clasificación a los Juegos Panamericanos en Chile y alcanzó una increíble segunda posición en 2024. Un paso más en nuestra historia dentro de los esports internacionales.",
          tournament: "Juegos Panamericanos de Chile 2024",
          prize: "",
          imageUrl: "/logros_photos/Logro-9.jpg"
        },
        {
          id: "achievement8",
          title: "¡Top 3 en el Mundial de Dota 2 en Arabia! 🏆🔥",
          date: "2023-09-16",
          description: "Nuestro equipo de Dota 2 clasificó al Mundial organizado por la Global ssports Federation en Arabia y logró un increíble 3° puesto en 2023. Un logro que nos llena de orgullo y sigue demostrando nuestro nivel en la escena internacional.",
          tournament: "Mundial de Dota 2 – Global esports Federation 2023",
          prize: "",
          imageUrl: "/logros_photos/Logro-8.jpg"
        },
        {
          id: "achievement7",
          title: "Los esports hicieron historia en la Copa Davis 🎾🎮",
          date: "2023-08-26",
          description: "Por primera vez, los #esports estuvieron presentes en la Copa Davis, representando el futuro y la innovación en el deporte. Agradecemos a la prensa por dar visibilidad al mundo del #Gaming y por destacar este gran paso para la industria.",
          tournament: "Copa Davis",
          prize: "",
          imageUrl: "/logros_photos/Logro-7.jpg"
        },
        {
          id: "achievement6",
          title: "Maycam Evolve en el Congreso Argentino de Deportes Urbanos",
          date: "2023-08-16",
          description: "Daiana Gómez Parise y Juan Rodríguez Ponce representaron a Maycam Evolve en el Congreso Argentino de Deportes Urbanos, donde compartieron su experiencia y sumergieron a los oyentes en el apasionante mundo de los esports.",
          tournament: "Congreso Argentino de Deportes Urbanos",
          prize: "",
          imageUrl: "/logros_photos/Logro-6.jpg"
        },
        {
          id: "achievement5",
          title: "Maycam Evolve en #JuegosUADE",
          date: "2023-07-06",
          description: "Una vez más, dijimos presente en la Universidad Argentina de la Empresa, participando de la jornada de #JuegosUADE y compartiendo nuestra pasión por los esports con la comunidad universitaria.",
          tournament: "Juegos UADE",
          prize: "",
          imageUrl: "/logros_photos/Logro-5.jpg"
        },
        {
          id: "achievement4",
          title: "¡Clasificados al Six Invitational 2023!",
          date: "2023-02-20",
          description: "Nuestro equipo ha asegurado su lugar en el torneo más importante del ecosistema Rainbow Six. En 2023, viajamos a São Paulo para competir contra los mejores del mundo y representar a nuestra comunidad en el escenario internacional.",
          tournament: "Six Invitational 2023",
          prize: "",
          imageUrl: "/logros_photos/Logro-4.jpg"
        },
        {
          id: "achievement3",
          title: "Maycam Evolve brilló en la Argentina FlowGamergy 2023",
          date: "2023-01-09",
          description: "Dijimos presente en la Argentina FlowGamergy 2023 con un impresionante stand de más de 300m². Contamos con una cancha profesional de TeqBall, gradas, una diana de penales de 6 metros, un Tateti electrónico de Fox Sports, toro mecánico, puestos de pochoclos gratis, un mini estudio de Fox Sports con transmisiones en vivo, filmmakers editando en tiempo real y muchas sorpresas junto a nuestras marcas aliadas.",
          tournament: "Argentina FlowGamergy 2023",
          prize: "",
          imageUrl: "/logros_photos/Logro-3.jpg"
        },
        {
          id: "achievement2",
          title: "Presencia de Maycam Evolve en la AGS 2022",
          date: "2022-10-31",
          description: "Estuvimos en la Argentina Game Show con un stand de temática mundialista, viviendo la pasión del gaming y el fútbol junto a nuestra comunidad.",
          tournament: "Argentina Game Show (AGS) 2022",
          prize: "",
          imageUrl: "/logros_photos/Logro-2.jpg"
        },
        {
          id: "achievement1",
          title: "Maycam Evolve en la SIM RACING WORLD CUP 2022",
          date: "2022-10-22",
          description: "Dos pilotos argentinos compiten en la SIM RACING WORLD CUP 2022 de la International esports Federation, buscando su lugar en las finales de octubre en Mónaco.",
          tournament: "SIM RACING WORLD CUP 2022",
          prize: "",
          imageUrl: "/logros_photos/Logro-1.jpg"
        },
      ],
  },
  contact: {
    title: "CONTACTO",
    description: "Ponete en contacto con nosotros para cualquier consulta, propuesta o colaboración.",
    email: "marketing@maycamevolve.com",
    phone: "+54 9 1159975193",
    address: "Buenos Aires, Argentina",
    socialMedia: {
      twitter: "https://x.com/maycamevolve#",
      instagram: "https://instagram.com/maycamevolve",
      facebook: "https://facebook.com/maycamevolve",
      youtube: "https://youtube.com/maycamevolve",
      twitch: "https://twitch.tv/maycamevolve",
    },
    info: {
      email: "marketing@maycamevolve.com",
      phone: "+54 9 1159975193",
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

