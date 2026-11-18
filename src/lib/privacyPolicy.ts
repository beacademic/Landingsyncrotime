/**
 * Política de privacidad de SyncroTime en español, inglés y portugués.
 *
 * ESTE ARCHIVO ES IDÉNTICO EN DOS REPOSITORIOS (LandingSyncrotime y SyncroTime). Si se cambia en uno, copiarlo
 * al otro: syncrotime.com y app.syncrotime.com publican el mismo texto.
 *
 * Redactada según la Ley N° 19.628 y el estándar de la Ley N° 21.719 (identidad del responsable, finalidades,
 * base de licitud, destinatarios, conservación, transferencias internacionales, derechos, decisiones
 * automatizadas). No fija una fecha de vigencia de la Ley 21.719 porque está en trámite su postergación.
 * Debe revisarla un abogado. Al cambiar el texto, subir POLICY_VERSION y la fecha.
 */
export type PolicyLocale = "es" | "en" | "pt";

export const POLICY_VERSION = "2.0";
export const PRIVACY_EMAIL = "beacademic.ltda@gmail.com";

export type Block = { p: string } | { ul: string[] };

export interface PolicySection {
  title: string;
  blocks: Block[];
  /** Si es verdadero, la tabla de tratamientos se muestra al final de la sección. */
  table?: boolean;
}

export interface Treatment {
  purpose: string;
  data: string;
  basis: string;
  recipients: string;
  retention: string;
}

export interface PolicyContent {
  title: string;
  updated: string;
  back: string;
  backToPricing: string;
  intro: string[];
  tableHead: [string, string, string, string, string];
  treatments: Treatment[];
  sections: PolicySection[];
}

const es: PolicyContent = {
  title: "Política de Privacidad",
  updated: "Última actualización: 18 de noviembre de 2026 · versión 2.0",
  back: "Volver al inicio",
  backToPricing: "Volver a precios",
  intro: [
    "Esta política explica cómo **SyncroTime** trata los datos personales de quienes usan la plataforma y el sitio syncrotime.com. Se rige por la Ley N° 19.628 sobre protección de la vida privada y, desde su entrada en vigencia, por la Ley N° 21.719 sobre protección y tratamiento de los datos personales. Ya aplicamos los estándares de esta última.",
  ],
  tableHead: ["Finalidad", "Datos", "Base de licitud", "Destinatarios", "Conservación"],
  treatments: [
    {
      purpose: "Crear y administrar su cuenta",
      data: "Nombre, correo, contraseña (guardada cifrada), rol, idioma, institución y país",
      basis: "Ejecución del contrato (el servicio que usted solicita)",
      recipients: "Google Cloud",
      retention: "Mientras la cuenta esté activa",
    },
    {
      purpose: "Prestar el servicio de generación de horarios",
      data: "Datos académicos que ingresa la institución: docentes, horas de contrato, asignaturas, cursos, salas, restricciones y horarios generados",
      basis: "Por cuenta de la institución (encargo de tratamiento)",
      recipients: "Google Cloud (alojamiento y colas de tareas)",
      retention: "Mientras la cuenta esté activa",
    },
    {
      purpose: "Cobrar la suscripción",
      data: "Identificadores de cliente y de suscripción, estado y fechas del plan. Los datos de pago los procesa Paddle; SyncroTime no recibe ni guarda los datos de la tarjeta",
      basis: "Ejecución del contrato y obligación legal tributaria",
      recipients: "Paddle (distribuidor autorizado y responsable independiente de los datos de pago)",
      retention: "Los plazos que exija la ley tributaria",
    },
    {
      purpose: "Enviar correos del servicio (activación, recuperación de contraseña, avisos técnicos)",
      data: "Nombre y correo",
      basis: "Ejecución del contrato",
      recipients: "Resend",
      retention: "Mientras la cuenta esté activa",
    },
    {
      purpose: "Seguridad y prevención de abusos",
      data: "Dirección IP, intentos de acceso, fecha y hora, registro de acciones administrativas",
      basis: "Interés legítimo en proteger la plataforma y a sus usuarios",
      recipients: "Google Cloud",
      retention: "El tiempo necesario para proteger la plataforma",
    },
    {
      purpose: "Soporte, atención de derechos y defensa ante reclamos",
      data: "Los datos de su solicitud y de nuestra respuesta",
      basis: "Obligación legal y defensa de derechos",
      recipients: "Ninguno, salvo requerimiento de una autoridad",
      retention: "Los plazos de prescripción que fije la ley",
    },
  ],
  sections: [
    {
      title: "1. Quién es responsable de sus datos",
      blocks: [
        {
          p: "**SyncroTime** es un servicio de **Sociedad de Formación BE Academic Limitada**, RUT 77.650.439-4, con domicilio en El Pinar Lt. E-1 C-A, comuna de Los Ángeles, Región del Biobío, Chile (en adelante, «BE Academic»).",
        },
        {
          ul: [
            "**Datos de su cuenta, de facturación y de navegación:** BE Academic es la responsable.",
            "**Datos académicos** que su institución ingresa (nombres de docentes, horas de contrato, asignaturas, cursos, salas y restricciones de disponibilidad): la responsable es **la institución**. BE Academic los trata como **encargada**, solo para prestar el servicio y según las instrucciones de la institución. La institución debe contar con una base legal para ingresar esos datos.",
          ],
        },
        { p: "**Responsable de privacidad:** Carlos Mundaca Valdebenito. Contacto: beacademic.ltda@gmail.com" },
      ],
    },
    {
      title: "2. Qué datos tratamos, para qué y con qué base",
      blocks: [
        {
          p: "Los datos de la cuenta los entrega usted al registrarse; los datos académicos, su institución; los datos técnicos se generan al usar la plataforma. Entregar los datos de la cuenta es necesario para usar el servicio.",
        },
      ],
      table: true,
    },
    {
      title: "3. Cookies",
      blocks: [
        {
          p: "El sitio **syncrotime.com** no usa cookies. La plataforma **app.syncrotime.com** usa solo cookies estrictamente necesarias: las de sesión y seguridad de la autenticación (por ejemplo, `__session`, que dura hasta 12 horas de inactividad) y una cookie de preferencia de idioma (`NEXT_LOCALE`). No usamos cookies de análisis ni de marketing, por eso no pedimos consentimiento para ellas.",
        },
        {
          p: "Al pagar, **Paddle** puede instalar las cookies que necesite para procesar el pago, según sus propias políticas.",
        },
      ],
    },
    {
      title: "4. Proveedores y transferencias internacionales",
      blocks: [
        { p: "No vendemos ni arrendamos datos personales. Usamos estos proveedores:" },
        {
          ul: [
            "**Google Cloud Platform (Google LLC):** alojamiento, base de datos y procesamiento de horarios. El servicio se ejecuta en la región us-central1, en Estados Unidos.",
            "**Paddle:** pagos y facturación, como distribuidor autorizado (*Merchant of Record*).",
            "**Resend:** envío de correos del servicio.",
            "**GitHub y Cloudflare:** entrega del sitio syncrotime.com.",
          ],
        },
        {
          p: "Por eso sus datos se transfieren a Estados Unidos y a otros países. Esas transferencias se rigen por los acuerdos de tratamiento de datos y las cláusulas contractuales de transferencia que ofrece cada proveedor, y por las garantías que exige la ley chilena.",
        },
      ],
    },
    {
      title: "5. Cuánto tiempo conservamos los datos",
      blocks: [
        {
          p: "Conservamos los datos mientras la cuenta esté activa. Si la institución cierra la cuenta o lo solicita, eliminamos los datos de la cuenta y los datos académicos, salvo los registros de facturación y los demás que la ley nos obligue a conservar.",
        },
      ],
    },
    {
      title: "6. Decisiones automatizadas",
      blocks: [
        {
          p: "El motor de SyncroTime genera horarios de forma automática a partir de las reglas que fija la institución. Es una herramienta de apoyo: la institución revisa y aprueba los horarios. No tomamos decisiones automatizadas con efectos jurídicos sobre las personas ni elaboramos perfiles.",
        },
      ],
    },
    {
      title: "7. Sus derechos",
      blocks: [
        { p: "Usted puede ejercer gratuitamente estos derechos sobre sus datos personales:" },
        {
          ul: [
            "**Acceso:** saber qué datos suyos tratamos, para qué y de quién los obtuvimos, y recibir una copia.",
            "**Rectificación:** corregir datos inexactos o incompletos.",
            "**Supresión:** pedir que eliminemos sus datos cuando ya no sean necesarios o retire su consentimiento.",
            "**Oposición:** oponerse a un tratamiento, en especial al marketing directo y a la elaboración de perfiles.",
            "**Portabilidad:** recibir los datos que nos entregó en un formato estructurado, de uso común y lectura mecánica, cuando la ley lo permita.",
            "**Bloqueo temporal:** pedir que suspendamos el uso de sus datos mientras se resuelve una solicitud de rectificación, supresión u oposición.",
            "**No ser objeto de decisiones automatizadas** con efectos jurídicos significativos, y pedir intervención humana.",
          ],
        },
        {
          p: "Para ejercerlos sobre los datos de su cuenta, escriba a beacademic.ltda@gmail.com con el asunto «Derechos sobre mis datos», e indique su nombre, un medio de contacto y el derecho que ejerce. Podemos pedirle información para confirmar su identidad. Responderemos a la brevedad y, a más tardar, dentro de **30 días corridos**; en casos complejos el plazo puede prorrogarse una vez por otros 30 días, y le avisaremos el motivo. Si denegamos su solicitud, le explicaremos por qué.",
        },
        {
          p: "Si sus datos son datos académicos (por ejemplo, usted es docente de una institución que usa SyncroTime), dirija su solicitud a esa institución, que es la responsable. Si nos escribe a nosotros, se la haremos llegar y ayudaremos a la institución a responder.",
        },
        {
          p: "Si considera que no atendimos bien su solicitud, puede reclamar ante la Agencia de Protección de Datos Personales una vez que esta entre en funciones y, mientras tanto, ante los tribunales de justicia conforme a la ley.",
        },
      ],
    },
    {
      title: "8. Seguridad",
      blocks: [
        {
          p: "Protegemos los datos con cifrado en tránsito (HTTPS/TLS), contraseñas guardadas con hash robusto (bcrypt), control de acceso por rol, aislamiento de los datos entre instituciones, segundo factor para la administración interna, límites de intentos de acceso y registro de las acciones administrativas. Si ocurriera una vulneración de seguridad que afecte sus datos, la comunicaremos a la autoridad y a las personas afectadas cuando la ley lo exija.",
        },
      ],
    },
    {
      title: "9. Menores de edad",
      blocks: [
        {
          p: "SyncroTime está dirigido a instituciones educativas y a su personal. No recopilamos intencionalmente datos de menores de edad. Los menores de 14 años necesitan el consentimiento de sus padres o representantes legales; si supiéramos que tenemos datos de un menor sin ese consentimiento, los eliminaremos.",
        },
      ],
    },
    {
      title: "10. Usuarios fuera de Chile",
      blocks: [
        {
          p: "SyncroTime está disponible en español, inglés y portugués. Aplicamos la ley chilena. Si usted reside en otro país, escríbanos y atenderemos su solicitud conforme a la ley que corresponda.",
        },
      ],
    },
    {
      title: "11. Cambios en esta política",
      blocks: [
        {
          p: "Publicaremos cualquier modificación en esta página, con su fecha y número de versión. Si el cambio altera de forma importante el uso de sus datos, se lo informaremos.",
        },
      ],
    },
  ],
};

const en: PolicyContent = {
  title: "Privacy Policy",
  updated: "Last updated: November 18, 2026 · version 2.0",
  back: "Back to home",
  backToPricing: "Back to pricing",
  intro: [
    "This policy explains how **SyncroTime** handles the personal data of people who use the platform and the syncrotime.com website. It is governed by Chilean Law No. 19.628 on the protection of privacy and, once it takes effect, by Law No. 21.719 on the protection and processing of personal data. We already apply the standards of the latter.",
  ],
  tableHead: ["Purpose", "Data", "Legal basis", "Recipients", "Retention"],
  treatments: [
    {
      purpose: "Create and manage your account",
      data: "Name, email, password (stored encrypted), role, language, institution and country",
      basis: "Performance of the contract (the service you request)",
      recipients: "Google Cloud",
      retention: "While the account is active",
    },
    {
      purpose: "Provide the timetable generation service",
      data: "Academic data entered by the institution: teachers, contract hours, subjects, courses, rooms, constraints and generated timetables",
      basis: "On behalf of the institution (data processing role)",
      recipients: "Google Cloud (hosting and task queues)",
      retention: "While the account is active",
    },
    {
      purpose: "Bill the subscription",
      data: "Customer and subscription identifiers, plan status and dates. Paddle processes payment data; SyncroTime does not receive or store card details",
      basis: "Performance of the contract and tax legal obligations",
      recipients: "Paddle (Merchant of Record and independent controller of payment data)",
      retention: "The periods required by tax law",
    },
    {
      purpose: "Send service emails (activation, password recovery, technical notices)",
      data: "Name and email",
      basis: "Performance of the contract",
      recipients: "Resend",
      retention: "While the account is active",
    },
    {
      purpose: "Security and abuse prevention",
      data: "IP address, sign-in attempts, date and time, log of administrative actions",
      basis: "Legitimate interest in protecting the platform and its users",
      recipients: "Google Cloud",
      retention: "As long as needed to protect the platform",
    },
    {
      purpose: "Support, handling of rights requests and defense against claims",
      data: "The details of your request and our reply",
      basis: "Legal obligation and defense of rights",
      recipients: "None, unless required by an authority",
      retention: "The limitation periods set by law",
    },
  ],
  sections: [
    {
      title: "1. Who is responsible for your data",
      blocks: [
        {
          p: "**SyncroTime** is a service of **Sociedad de Formación BE Academic Limitada**, tax ID (RUT) 77.650.439-4, located at El Pinar Lt. E-1 C-A, Los Ángeles, Biobío Region, Chile (“BE Academic”).",
        },
        {
          ul: [
            "**Your account, billing and browsing data:** BE Academic is the controller.",
            "**Academic data** entered by your institution (teacher names, contract hours, subjects, courses, rooms and availability constraints): **the institution** is the controller. BE Academic processes it as a **processor**, only to provide the service and following the institution’s instructions. The institution must have a legal basis to enter that data.",
          ],
        },
        { p: "**Privacy officer:** Carlos Mundaca Valdebenito. Contact: beacademic.ltda@gmail.com" },
      ],
    },
    {
      title: "2. What data we process, why and on what basis",
      blocks: [
        {
          p: "You provide your account data when you sign up; your institution provides the academic data; technical data is generated when you use the platform. Providing account data is necessary to use the service.",
        },
      ],
      table: true,
    },
    {
      title: "3. Cookies",
      blocks: [
        {
          p: "The **syncrotime.com** website does not use cookies. The **app.syncrotime.com** platform uses only strictly necessary cookies: authentication session and security cookies (for example, `__session`, which lasts up to 12 hours of inactivity) and a language preference cookie (`NEXT_LOCALE`). We do not use analytics or marketing cookies, so we do not ask for consent for them.",
        },
        {
          p: "When you pay, **Paddle** may set the cookies it needs to process the payment, under its own policies.",
        },
      ],
    },
    {
      title: "4. Providers and international transfers",
      blocks: [
        { p: "We do not sell or rent personal data. We use these providers:" },
        {
          ul: [
            "**Google Cloud Platform (Google LLC):** hosting, database and timetable processing. The service runs in the us-central1 region, in the United States.",
            "**Paddle:** payments and billing, as Merchant of Record.",
            "**Resend:** delivery of service emails.",
            "**GitHub and Cloudflare:** delivery of the syncrotime.com website.",
          ],
        },
        {
          p: "As a result, your data is transferred to the United States and other countries. Those transfers are governed by the data processing agreements and contractual transfer clauses each provider offers, and by the safeguards required by Chilean law.",
        },
      ],
    },
    {
      title: "5. How long we keep data",
      blocks: [
        {
          p: "We keep data while the account is active. If the institution closes the account or asks us to, we delete the account data and the academic data, except billing records and anything else the law requires us to keep.",
        },
      ],
    },
    {
      title: "6. Automated decisions",
      blocks: [
        {
          p: "The SyncroTime engine generates timetables automatically from the rules set by the institution. It is a support tool: the institution reviews and approves the timetables. We do not make automated decisions with legal effects on people and we do not build profiles.",
        },
      ],
    },
    {
      title: "7. Your rights",
      blocks: [
        { p: "You may exercise these rights over your personal data free of charge:" },
        {
          ul: [
            "**Access:** know what data about you we process, why and where we got it, and receive a copy.",
            "**Rectification:** correct inaccurate or incomplete data.",
            "**Erasure:** ask us to delete your data when it is no longer needed or you withdraw your consent.",
            "**Objection:** object to processing, especially direct marketing and profiling.",
            "**Portability:** receive the data you gave us in a structured, commonly used, machine-readable format, where the law allows.",
            "**Temporary restriction:** ask us to pause the use of your data while a rectification, erasure or objection request is resolved.",
            "**Not to be subject to automated decisions** with significant legal effects, and to request human intervention.",
          ],
        },
        {
          p: "To exercise them over your account data, write to beacademic.ltda@gmail.com with the subject “Rights over my data”, stating your name, a contact method and the right you are exercising. We may ask for information to confirm your identity. We will reply as soon as possible and, at the latest, within **30 calendar days**; in complex cases the period may be extended once by another 30 days, and we will tell you why. If we deny your request, we will explain the reason.",
        },
        {
          p: "If your data is academic data (for example, you are a teacher at an institution that uses SyncroTime), send your request to that institution, which is the controller. If you write to us, we will pass it on and help the institution respond.",
        },
        {
          p: "If you believe we did not handle your request properly, you may complain to the Chilean Data Protection Agency once it begins operating and, in the meantime, to the courts as provided by law.",
        },
      ],
    },
    {
      title: "8. Security",
      blocks: [
        {
          p: "We protect data with encryption in transit (HTTPS/TLS), passwords stored with a strong hash (bcrypt), role-based access control, isolation of data between institutions, two-factor authentication for internal administration, limits on sign-in attempts and a log of administrative actions. If a security breach affects your data, we will notify the authority and the affected people where the law requires it.",
        },
      ],
    },
    {
      title: "9. Minors",
      blocks: [
        {
          p: "SyncroTime is intended for educational institutions and their staff. We do not knowingly collect data from minors. Children under 14 need the consent of their parents or legal guardians; if we learn we hold a minor’s data without it, we will delete it.",
        },
      ],
    },
    {
      title: "10. Users outside Chile",
      blocks: [
        {
          p: "SyncroTime is available in Spanish, English and Portuguese. We apply Chilean law. If you live in another country, write to us and we will handle your request under the law that applies to you.",
        },
      ],
    },
    {
      title: "11. Changes to this policy",
      blocks: [
        {
          p: "We will publish any change on this page, with its date and version number. If a change significantly affects how we use your data, we will let you know.",
        },
      ],
    },
  ],
};

const pt: PolicyContent = {
  title: "Política de Privacidade",
  updated: "Última atualização: 18 de novembro de 2026 · versão 2.0",
  back: "Voltar ao início",
  backToPricing: "Voltar aos preços",
  intro: [
    "Esta política explica como o **SyncroTime** trata os dados pessoais de quem usa a plataforma e o site syncrotime.com. Ela se rege pela Lei chilena nº 19.628 sobre proteção da vida privada e, a partir de sua entrada em vigor, pela Lei nº 21.719 sobre proteção e tratamento de dados pessoais. Já aplicamos os padrões desta última.",
  ],
  tableHead: ["Finalidade", "Dados", "Base legal", "Destinatários", "Conservação"],
  treatments: [
    {
      purpose: "Criar e administrar sua conta",
      data: "Nome, e-mail, senha (armazenada criptografada), perfil, idioma, instituição e país",
      basis: "Execução do contrato (o serviço que você solicita)",
      recipients: "Google Cloud",
      retention: "Enquanto a conta estiver ativa",
    },
    {
      purpose: "Prestar o serviço de geração de horários",
      data: "Dados acadêmicos inseridos pela instituição: professores, carga horária contratada, disciplinas, turmas, salas, restrições e horários gerados",
      basis: "Por conta da instituição (tratamento como operador)",
      recipients: "Google Cloud (hospedagem e filas de tarefas)",
      retention: "Enquanto a conta estiver ativa",
    },
    {
      purpose: "Cobrar a assinatura",
      data: "Identificadores de cliente e de assinatura, status e datas do plano. A Paddle processa os dados de pagamento; o SyncroTime não recebe nem armazena os dados do cartão",
      basis: "Execução do contrato e obrigação legal tributária",
      recipients: "Paddle (distribuidora autorizada e controladora independente dos dados de pagamento)",
      retention: "Os prazos exigidos pela lei tributária",
    },
    {
      purpose: "Enviar e-mails do serviço (ativação, recuperação de senha, avisos técnicos)",
      data: "Nome e e-mail",
      basis: "Execução do contrato",
      recipients: "Resend",
      retention: "Enquanto a conta estiver ativa",
    },
    {
      purpose: "Segurança e prevenção de abusos",
      data: "Endereço IP, tentativas de acesso, data e hora, registro de ações administrativas",
      basis: "Interesse legítimo em proteger a plataforma e seus usuários",
      recipients: "Google Cloud",
      retention: "O tempo necessário para proteger a plataforma",
    },
    {
      purpose: "Suporte, atendimento de direitos e defesa em reclamações",
      data: "Os dados da sua solicitação e da nossa resposta",
      basis: "Obrigação legal e defesa de direitos",
      recipients: "Nenhum, salvo exigência de uma autoridade",
      retention: "Os prazos de prescrição fixados em lei",
    },
  ],
  sections: [
    {
      title: "1. Quem é responsável pelos seus dados",
      blocks: [
        {
          p: "O **SyncroTime** é um serviço da **Sociedad de Formación BE Academic Limitada**, CNPJ chileno (RUT) 77.650.439-4, com sede em El Pinar Lt. E-1 C-A, Los Ángeles, Região do Biobío, Chile («BE Academic»).",
        },
        {
          ul: [
            "**Dados da sua conta, de cobrança e de navegação:** a BE Academic é a controladora.",
            "**Dados acadêmicos** inseridos pela sua instituição (nomes de professores, carga horária contratada, disciplinas, turmas, salas e restrições de disponibilidade): a controladora é **a instituição**. A BE Academic os trata como **operadora**, somente para prestar o serviço e conforme as instruções da instituição. A instituição deve ter base legal para inserir esses dados.",
          ],
        },
        { p: "**Responsável pela privacidade:** Carlos Mundaca Valdebenito. Contato: beacademic.ltda@gmail.com" },
      ],
    },
    {
      title: "2. Quais dados tratamos, para quê e com que base",
      blocks: [
        {
          p: "Você fornece os dados da conta ao se cadastrar; sua instituição fornece os dados acadêmicos; os dados técnicos são gerados ao usar a plataforma. Fornecer os dados da conta é necessário para usar o serviço.",
        },
      ],
      table: true,
    },
    {
      title: "3. Cookies",
      blocks: [
        {
          p: "O site **syncrotime.com** não usa cookies. A plataforma **app.syncrotime.com** usa apenas cookies estritamente necessários: os de sessão e segurança da autenticação (por exemplo, `__session`, que dura até 12 horas de inatividade) e um cookie de preferência de idioma (`NEXT_LOCALE`). Não usamos cookies de análise nem de marketing, por isso não pedimos consentimento para eles.",
        },
        {
          p: "Ao pagar, a **Paddle** pode instalar os cookies de que precisa para processar o pagamento, conforme suas próprias políticas.",
        },
      ],
    },
    {
      title: "4. Fornecedores e transferências internacionais",
      blocks: [
        { p: "Não vendemos nem alugamos dados pessoais. Usamos estes fornecedores:" },
        {
          ul: [
            "**Google Cloud Platform (Google LLC):** hospedagem, banco de dados e processamento de horários. O serviço é executado na região us-central1, nos Estados Unidos.",
            "**Paddle:** pagamentos e cobrança, como distribuidora autorizada (*Merchant of Record*).",
            "**Resend:** envio dos e-mails do serviço.",
            "**GitHub e Cloudflare:** entrega do site syncrotime.com.",
          ],
        },
        {
          p: "Por isso, seus dados são transferidos para os Estados Unidos e para outros países. Essas transferências se regem pelos acordos de tratamento de dados e pelas cláusulas contratuais de transferência que cada fornecedor oferece, e pelas garantias exigidas pela lei chilena.",
        },
      ],
    },
    {
      title: "5. Por quanto tempo conservamos os dados",
      blocks: [
        {
          p: "Conservamos os dados enquanto a conta estiver ativa. Se a instituição encerrar a conta ou solicitar, excluímos os dados da conta e os dados acadêmicos, exceto os registros de cobrança e os demais que a lei nos obrigue a conservar.",
        },
      ],
    },
    {
      title: "6. Decisões automatizadas",
      blocks: [
        {
          p: "O motor do SyncroTime gera horários automaticamente a partir das regras definidas pela instituição. É uma ferramenta de apoio: a instituição revisa e aprova os horários. Não tomamos decisões automatizadas com efeitos jurídicos sobre as pessoas nem elaboramos perfis.",
        },
      ],
    },
    {
      title: "7. Seus direitos",
      blocks: [
        { p: "Você pode exercer gratuitamente estes direitos sobre seus dados pessoais:" },
        {
          ul: [
            "**Acesso:** saber quais dados seus tratamos, para quê e de onde os obtivemos, e receber uma cópia.",
            "**Retificação:** corrigir dados inexatos ou incompletos.",
            "**Eliminação:** pedir que excluamos seus dados quando não forem mais necessários ou você retirar o consentimento.",
            "**Oposição:** opor-se a um tratamento, em especial ao marketing direto e à elaboração de perfis.",
            "**Portabilidade:** receber os dados que nos forneceu em formato estruturado, de uso comum e leitura automática, quando a lei permitir.",
            "**Bloqueio temporário:** pedir que suspendamos o uso dos seus dados enquanto se resolve uma solicitação de retificação, eliminação ou oposição.",
            "**Não ser objeto de decisões automatizadas** com efeitos jurídicos significativos, e pedir intervenção humana.",
          ],
        },
        {
          p: "Para exercê-los sobre os dados da sua conta, escreva para beacademic.ltda@gmail.com com o assunto «Direitos sobre meus dados», informando seu nome, um meio de contato e o direito que exerce. Podemos pedir informações para confirmar sua identidade. Responderemos o quanto antes e, no máximo, em **30 dias corridos**; em casos complexos o prazo pode ser prorrogado uma vez por mais 30 dias, e informaremos o motivo. Se negarmos sua solicitação, explicaremos por quê.",
        },
        {
          p: "Se os seus dados forem dados acadêmicos (por exemplo, você é professor de uma instituição que usa o SyncroTime), envie sua solicitação a essa instituição, que é a controladora. Se escrever para nós, a encaminharemos e ajudaremos a instituição a responder.",
        },
        {
          p: "Se considerar que não atendemos bem sua solicitação, você pode reclamar à Agência de Proteção de Dados Pessoais do Chile quando ela entrar em funcionamento e, enquanto isso, aos tribunais, conforme a lei.",
        },
      ],
    },
    {
      title: "8. Segurança",
      blocks: [
        {
          p: "Protegemos os dados com criptografia em trânsito (HTTPS/TLS), senhas armazenadas com hash robusto (bcrypt), controle de acesso por perfil, isolamento dos dados entre instituições, segundo fator para a administração interna, limites de tentativas de acesso e registro das ações administrativas. Se ocorrer uma violação de segurança que afete seus dados, a comunicaremos à autoridade e às pessoas afetadas quando a lei exigir.",
        },
      ],
    },
    {
      title: "9. Menores de idade",
      blocks: [
        {
          p: "O SyncroTime é destinado a instituições de ensino e a seu pessoal. Não coletamos intencionalmente dados de menores de idade. Menores de 14 anos precisam do consentimento dos pais ou responsáveis legais; se soubermos que temos dados de um menor sem esse consentimento, vamos excluí-los.",
        },
      ],
    },
    {
      title: "10. Usuários fora do Chile",
      blocks: [
        {
          p: "O SyncroTime está disponível em espanhol, inglês e português. Aplicamos a lei chilena. Se você mora em outro país, escreva para nós e atenderemos sua solicitação conforme a lei que lhe corresponda.",
        },
      ],
    },
    {
      title: "11. Alterações nesta política",
      blocks: [
        {
          p: "Publicaremos qualquer alteração nesta página, com data e número de versão. Se a mudança alterar de forma importante o uso dos seus dados, informaremos você.",
        },
      ],
    },
  ],
};

export const POLICY: Record<PolicyLocale, PolicyContent> = { es, en, pt };

export function policyFor(locale: string): PolicyContent {
  return POLICY[(locale in POLICY ? locale : "es") as PolicyLocale];
}
