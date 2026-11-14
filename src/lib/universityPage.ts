/**
 * Página "SyncroTime para universidades e institutos" en los tres idiomas.
 * El texto describe solo funciones que SyncroTime ya tiene (disponibilidad y restricciones docentes,
 * salas, ventanas, horas consecutivas, versiones, exportación, auditoría de carga). No prometer
 * funciones propias de universidades (inscripción de alumnos, electivos, semestres) mientras no existan.
 */
export type Locale = "es" | "en" | "pt";

export const UNIVERSITY_SLUGS: Record<Locale, string> = {
  es: "horarios-universitarios",
  en: "university-timetable-software",
  pt: "horarios-universitarios",
};

export function universityPath(locale: Locale): string {
  return `/${locale}/${UNIVERSITY_SLUGS[locale]}/`;
}

interface UniversityContent {
  title: string;
  description: string;
  navLabel: string;
  back: string;
  badge: string;
  h1: string;
  intro: string;
  ctaTrial: string;
  ctaHome: string;
  problemsTitle: string;
  problems: { title: string; text: string }[];
  setupTitle: string;
  setupIntro: string;
  steps: { title: string; text: string }[];
  featuresTitle: string;
  features: string[];
  pricingTitle: string;
  pricingText: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
}

export const UNIVERSITY_CONTENT: Record<Locale, UniversityContent> = {
  es: {
    title: "Generador de horarios universitarios",
    description:
      "Genere horarios para universidades e institutos sin cruces de docentes ni salas: disponibilidad por hora, laboratorios y exportación a PDF y Excel.",
    navLabel: "Horarios universitarios",
    back: "Volver al inicio",
    badge: "Universidades, institutos y centros de formación",
    h1: "Generador de horarios universitarios",
    intro:
      "SyncroTime arma el horario de universidades, institutos profesionales y centros de formación técnica sin cruces de docentes ni de salas. Usted carga los docentes con su disponibilidad, las salas y laboratorios y las asignaturas de cada sección, y el motor de optimización entrega el horario en minutos.",
    ctaTrial: "Probar gratis 7 días",
    ctaHome: "Ver SyncroTime",
    problemsTitle: "Lo que complica el horario en educación superior",
    problems: [
      {
        title: "Docentes por hora con poca disponibilidad",
        text: "Muchos académicos hacen clases solo algunos días o en ciertos bloques. Cuadrar esas disponibilidades a mano obliga a rehacer el horario una y otra vez.",
      },
      {
        title: "Salas y laboratorios compartidos",
        text: "Laboratorios, talleres y salas grandes se reparten entre varias carreras. Un solo traslape obliga a mover clases ya publicadas.",
      },
      {
        title: "Cambios de último minuto",
        text: "Una baja o un cambio de docente al inicio del período desarma un horario hecho en planillas, sin forma rápida de recalcularlo.",
      },
    ],
    setupTitle: "Cómo se configura una institución en SyncroTime",
    setupIntro:
      "SyncroTime trabaja con docentes, asignaturas, cursos y salas. En educación superior, cada sección o grupo de estudiantes que comparte horario se ingresa como un curso.",
    steps: [
      {
        title: "1. Estructura",
        text: "Defina los días y bloques horarios, las asignaturas, las secciones (como cursos), las salas y los docentes con sus horas de contrato.",
      },
      {
        title: "2. Reglas",
        text: "Indique la disponibilidad de cada docente, el máximo de horas consecutivas y diarias, los límites de ventanas y qué asignaturas necesitan una sala o laboratorio específico.",
      },
      {
        title: "3. Generación",
        text: "Ejecute el motor, compare versiones, ajuste a mano si lo necesita y exporte el horario final a PDF o Excel.",
      },
    ],
    featuresTitle: "Qué incluye",
    features: [
      "Motor de optimización sin cruces de docentes ni de salas.",
      "Disponibilidad por docente: días libres, medias jornadas y bloques específicos.",
      "Límites de horas consecutivas, horas diarias y ventanas por docente y por curso.",
      "Asignación de salas comunes, laboratorios y espacios especializados.",
      "Varias versiones del horario para comparar antes de publicar.",
      "Exportación a PDF por curso, por docente o general, y a Excel (.xlsx) editable.",
      "Auditoría de horas contratadas frente a horas asignadas.",
      "Plataforma en la nube en español, inglés y portugués.",
    ],
    pricingTitle: "Precio",
    pricingText:
      "Un solo plan con todas las funciones: USD 42 al mes o USD 400 al año, con docentes, asignaturas, salas y cursos ilimitados. Pruébelo gratis durante 7 días.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿SyncroTime sirve para universidades e institutos?",
        a: "Sí. SyncroTime se usa en colegios, liceos técnicos, institutos profesionales, universidades y academias de cualquier tamaño y estructura horaria.",
      },
      {
        q: "¿Puedo respetar la disponibilidad de docentes por hora?",
        a: "Sí. Para cada docente se definen los días y bloques disponibles, el máximo de horas por día y las horas consecutivas permitidas, y el motor solo lo asigna dentro de esos límites.",
      },
      {
        q: "¿Cómo entrego el horario a docentes y estudiantes?",
        a: "Se exporta en PDF listo para imprimir por curso, por docente o en vista general, y en Excel editable.",
      },
    ],
    finalTitle: "Genere el horario de su institución en minutos",
    finalText: "Cree su cuenta, cargue su estructura y genere el primer horario durante la prueba gratuita.",
  },
  en: {
    title: "University Timetable Software for Colleges",
    description:
      "Build conflict-free university and college timetables: part-time faculty availability, shared rooms and labs, PDF and Excel export. 7-day free trial.",
    navLabel: "University timetabling",
    back: "Back to home",
    badge: "Universities, colleges and institutes",
    h1: "University timetable software",
    intro:
      "SyncroTime builds timetables for universities, colleges and technical institutes with no teacher or room conflicts. You enter your faculty and their availability, your rooms and labs, and the subjects of each section, and the optimization engine delivers the timetable in minutes.",
    ctaTrial: "Start 7-day free trial",
    ctaHome: "See SyncroTime",
    problemsTitle: "What makes higher-education timetabling hard",
    problems: [
      {
        title: "Part-time faculty with limited availability",
        text: "Many lecturers teach only on certain days or time slots. Fitting those constraints by hand means rebuilding the timetable again and again.",
      },
      {
        title: "Shared rooms and labs",
        text: "Labs, workshops and large lecture rooms are shared across programs. A single overlap forces you to move classes that were already published.",
      },
      {
        title: "Last-minute changes",
        text: "A dropped lecturer or a staffing change at the start of the term breaks a spreadsheet timetable, with no quick way to recalculate it.",
      },
    ],
    setupTitle: "How to set up your institution in SyncroTime",
    setupIntro:
      "SyncroTime works with teachers, subjects, courses and rooms. In higher education, each section or student group that shares a schedule is entered as a course.",
    steps: [
      {
        title: "1. Structure",
        text: "Define days and time slots, subjects, sections (as courses), rooms and faculty with their contracted hours.",
      },
      {
        title: "2. Rules",
        text: "Set each lecturer's availability, maximum consecutive and daily hours, gap limits, and which subjects need a specific room or lab.",
      },
      {
        title: "3. Generate",
        text: "Run the engine, compare versions, fine-tune by hand if needed and export the final timetable to PDF or Excel.",
      },
    ],
    featuresTitle: "What's included",
    features: [
      "Optimization engine with no teacher or room conflicts.",
      "Per-teacher availability: days off, half days and specific time slots.",
      "Limits on consecutive hours, daily hours and gaps per teacher and per course.",
      "Assignment of general rooms, labs and specialized spaces.",
      "Multiple timetable versions to compare before publishing.",
      "PDF export by course, by teacher or overview, plus editable Excel (.xlsx).",
      "Audit of contracted versus assigned teaching hours.",
      "Cloud platform in English, Spanish and Portuguese.",
    ],
    pricingTitle: "Pricing",
    pricingText:
      "One plan with every feature: USD 42 per month or USD 400 per year, with unlimited teachers, subjects, rooms and courses. Try it free for 7 days.",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Does SyncroTime work for universities and colleges?",
        a: "Yes. SyncroTime is used by schools, technical schools, professional institutes, universities and academies of any size and timetable structure.",
      },
      {
        q: "Can it respect part-time faculty availability?",
        a: "Yes. For each teacher you define available days and time slots, maximum hours per day and allowed consecutive hours, and the engine only schedules them within those limits.",
      },
      {
        q: "How do I share the timetable with faculty and students?",
        a: "Export it as a print-ready PDF by course, by teacher or as an overview, or as an editable Excel file.",
      },
    ],
    finalTitle: "Build your institution's timetable in minutes",
    finalText: "Create your account, load your structure and generate your first timetable during the free trial.",
  },
  pt: {
    title: "Gerador de horários universitários",
    description:
      "Monte grades horárias para universidades e faculdades sem conflitos de professores ou salas: disponibilidade, laboratórios e exportação para PDF e Excel.",
    navLabel: "Horários universitários",
    back: "Voltar ao início",
    badge: "Universidades, faculdades e institutos",
    h1: "Gerador de horários universitários",
    intro:
      "O SyncroTime monta a grade horária de universidades, faculdades e institutos técnicos sem conflitos de professores ou de salas. Você cadastra os professores com sua disponibilidade, as salas e laboratórios e as disciplinas de cada turma, e o motor de otimização entrega a grade em minutos.",
    ctaTrial: "Testar grátis por 7 dias",
    ctaHome: "Ver o SyncroTime",
    problemsTitle: "O que complica a grade no ensino superior",
    problems: [
      {
        title: "Professores horistas com pouca disponibilidade",
        text: "Muitos professores dão aula só em alguns dias ou horários. Encaixar essas restrições à mão obriga a refazer a grade várias vezes.",
      },
      {
        title: "Salas e laboratórios compartilhados",
        text: "Laboratórios, oficinas e auditórios são divididos entre vários cursos. Uma única sobreposição obriga a mudar aulas já publicadas.",
      },
      {
        title: "Mudanças de última hora",
        text: "A saída ou troca de um professor no início do semestre desmonta uma grade feita em planilhas, sem forma rápida de recalcular.",
      },
    ],
    setupTitle: "Como configurar sua instituição no SyncroTime",
    setupIntro:
      "O SyncroTime trabalha com professores, disciplinas, turmas (cursos) e salas. No ensino superior, cada turma ou grupo de alunos que compartilha horário é cadastrado como um curso.",
    steps: [
      {
        title: "1. Estrutura",
        text: "Defina os dias e blocos de horário, as disciplinas, as turmas (como cursos), as salas e os professores com sua carga horária contratada.",
      },
      {
        title: "2. Regras",
        text: "Informe a disponibilidade de cada professor, o máximo de horas seguidas e diárias, os limites de janelas e quais disciplinas precisam de sala ou laboratório específico.",
      },
      {
        title: "3. Geração",
        text: "Execute o motor, compare versões, ajuste à mão se precisar e exporte a grade final para PDF ou Excel.",
      },
    ],
    featuresTitle: "O que inclui",
    features: [
      "Motor de otimização sem conflitos de professores ou de salas.",
      "Disponibilidade por professor: dias livres, meio período e horários específicos.",
      "Limites de horas seguidas, horas diárias e janelas por professor e por turma.",
      "Alocação de salas comuns, laboratórios e espaços especializados.",
      "Várias versões da grade para comparar antes de publicar.",
      "Exportação para PDF por turma, por professor ou geral, e para Excel (.xlsx) editável.",
      "Auditoria de horas contratadas versus horas atribuídas.",
      "Plataforma na nuvem em português, espanhol e inglês.",
    ],
    pricingTitle: "Preço",
    pricingText:
      "Um único plano com todas as funções: USD 42 por mês ou USD 400 por ano, com professores, disciplinas, salas e turmas ilimitados. Teste grátis por 7 dias.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        q: "O SyncroTime serve para universidades e faculdades?",
        a: "Sim. O SyncroTime é usado por escolas, escolas técnicas, institutos, universidades e academias de qualquer porte e estrutura de horários.",
      },
      {
        q: "Dá para respeitar a disponibilidade de professores horistas?",
        a: "Sim. Para cada professor você define os dias e horários disponíveis, o máximo de horas por dia e as horas seguidas permitidas, e o motor só o aloca dentro desses limites.",
      },
      {
        q: "Como entrego a grade a professores e alunos?",
        a: "Ela é exportada em PDF pronto para imprimir por turma, por professor ou geral, e em Excel editável.",
      },
    ],
    finalTitle: "Monte a grade da sua instituição em minutos",
    finalText: "Crie sua conta, cadastre sua estrutura e gere a primeira grade durante o teste grátis.",
  },
};
