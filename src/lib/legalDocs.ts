/**
 * Términos de servicio (con el acuerdo de tratamiento de datos por encargo) y política de reembolso de SyncroTime,
 * en español, inglés y portugués.
 *
 * ESTE ARCHIVO ES IDÉNTICO EN DOS REPOSITORIOS (LandingSyncrotime y SyncroTime). Si se cambia en uno, copiarlo
 * al otro: syncrotime.com y app.syncrotime.com publican el mismo texto.
 *
 * El acuerdo de tratamiento de datos (sección «dpa» de los términos) cubre el contenido que exigen el art. 28.3 del
 * RGPD, el art. 39 de la LGPD y la Ley 19.628 / Ley 21.719 para el encargado. La institución lo acepta en la
 * plataforma la primera vez que entra (se guarda la versión, la fecha, quién aceptó y su IP).
 * Si cambia el contenido del acuerdo, subir DPA_VERSION: todas las instituciones deberán aceptarlo de nuevo.
 * Debe revisarlo un abogado.
 */
import type { Block } from "./privacyPolicy";

export type LegalLocale = "es" | "en" | "pt";

export const TERMS_VERSION = "2.0";
export const DPA_VERSION = "1.0";
/** Ancla de la sección del acuerdo de tratamiento de datos dentro de los términos. */
export const DPA_ANCHOR = "dpa";

export interface LegalSection {
  id?: string;
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
}

const EMAIL = "beacademic.ltda@gmail.com";

// ─── ESPAÑOL ────────────────────────────────────────────────────────────────

const termsEs: LegalDoc = {
  title: "Términos de Servicio",
  updated: "Última actualización: 18 de noviembre de 2026 · versión 2.0",
  intro: [
    "Estos términos regulan el uso de **SyncroTime**, servicio de **Sociedad de Formación BE Academic Limitada**, RUT 77.650.439-4, con domicilio en El Pinar Lt. E-1 C-A, comuna de Los Ángeles, Región del Biobío, Chile (en adelante, «BE Academic» o «la Empresa»).",
  ],
  sections: [
    {
      title: "1. Aceptación",
      blocks: [
        { p: "Al registrarse, acceder o usar SyncroTime (en adelante, «el Servicio») usted acepta estos términos. Si los acepta en nombre de una institución educativa, declara que tiene facultades para obligarla; en ese caso, «el Cliente» es la institución. Si no está de acuerdo, no use el Servicio." },
      ],
    },
    {
      title: "2. Descripción del Servicio y uso de la cuenta",
      blocks: [
        { p: "SyncroTime es una plataforma en la nube (SaaS) que genera y optimiza horarios para colegios, liceos, institutos y universidades a partir de los datos y las reglas que ingresa el Cliente." },
        { p: "El Cliente es responsable de mantener la confidencialidad de sus credenciales y de las actividades realizadas con su cuenta. Debe avisarnos sin demora si sospecha un acceso no autorizado." },
      ],
    },
    {
      title: "3. Periodo de prueba",
      blocks: [
        { p: "El Servicio ofrece una prueba gratuita de siete (7) días, sin ingresar medios de pago. Durante la prueba:" },
        {
          ul: [
            "El Cliente accede a las herramientas de configuración académica y de generación.",
            "Los informes y horarios exportados en PDF llevan un sello de agua que indica que corresponden a una prueba.",
            "El sello se quita automáticamente al contratar un plan de pago.",
          ],
        },
      ],
    },
    {
      title: "4. Pagos, precios y facturación",
      blocks: [
        { p: "Los pagos los procesa **Paddle.com**, nuestro distribuidor autorizado (*Merchant of Record*). Al pagar, el Cliente contrata la compra con Paddle según sus términos, y Paddle emite el comprobante y gestiona los impuestos que correspondan." },
        { p: "Los planes son mensual (USD 42) y anual (USD 400). Se renuevan automáticamente con el mismo medio de pago, salvo que el Cliente cancele antes del término del ciclo en curso. Las cancelaciones y reembolsos se rigen por la Política de reembolso." },
      ],
    },
    {
      title: "5. Datos del Cliente",
      blocks: [
        { p: "Los datos que el Cliente ingresa (docentes, asignaturas, cursos, salas, restricciones y horarios) son del Cliente. BE Academic no los usa para fines propios ni los vende." },
        { p: "En **Datos y privacidad**, dentro de la plataforma, la institución puede descargar en cualquier momento una copia completa de sus datos en un formato estructurado (JSON) y eliminar la cuenta con todos sus datos." },
      ],
    },
    {
      id: DPA_ANCHOR,
      title: "6. Acuerdo de tratamiento de datos (encargo)",
      blocks: [
        { p: "Esta sección es el contrato de encargo de tratamiento entre el Cliente, como **responsable** de los datos personales que ingresa en SyncroTime, y BE Academic, como **encargada** (en el RGPD, «encargado del tratamiento»; en la LGPD, «operador»). Forma parte de estos términos y el Cliente la acepta expresamente en la plataforma." },
        {
          ul: [
            "**6.1 Objeto y duración.** BE Academic trata los datos solo para prestar el Servicio, mientras el contrato esté vigente y hasta la eliminación prevista en el punto 6.11.",
            "**6.2 Naturaleza y finalidad.** Almacenar, organizar y procesar los datos para generar, editar, mostrar y exportar horarios, y para dar soporte técnico cuando el Cliente lo pida.",
            "**6.3 Tipos de datos y titulares.** Datos de docentes y personal (nombre, código interno, horas de contrato, disponibilidad horaria y asignaciones) y de los usuarios de la institución (nombre y correo). El Servicio no está diseñado para datos sensibles ni para datos de estudiantes; el Cliente no debe ingresarlos.",
            "**6.4 Instrucciones.** BE Academic trata los datos solo según las instrucciones documentadas del Cliente, que son estos términos y lo que el Cliente configure en la plataforma. Si una instrucción le parece contraria a la ley, se lo informará al Cliente.",
            "**6.5 Confidencialidad.** Solo acceden a los datos las personas que lo necesitan para prestar el Servicio, obligadas a guardar confidencialidad.",
            "**6.6 Seguridad.** BE Academic aplica medidas técnicas y organizativas apropiadas: cifrado en tránsito (HTTPS/TLS), contraseñas con hash robusto, aislamiento de los datos entre instituciones, control de acceso por rol, segundo factor para la administración interna, límites de intentos de acceso, registro de acciones administrativas y copias de seguridad.",
            "**6.7 Subencargados.** El Cliente autoriza a estos subencargados: **Google Cloud (Google LLC)**, alojamiento, base de datos y procesamiento, en la región us-central1 (Estados Unidos); y **Resend**, envío de correos del servicio. **Paddle** trata los datos de pago como responsable independiente. BE Academic avisará con al menos 30 días de anticipación cualquier subencargado nuevo; el Cliente podrá oponerse y, si no hay acuerdo, terminar el contrato. BE Academic impone a cada subencargado obligaciones de protección equivalentes y responde por ellos.",
            "**6.8 Derechos de los titulares.** Si un titular (por ejemplo, un docente) pide ejercer sus derechos ante BE Academic, esta remitirá la solicitud al Cliente sin demora y lo ayudará a responder. Las herramientas de la plataforma permiten consultar, corregir, exportar y eliminar los datos.",
            "**6.9 Vulneraciones de seguridad.** BE Academic notificará al Cliente sin dilación indebida, y a más tardar dentro de 48 horas desde que tome conocimiento, cualquier vulneración que afecte sus datos, con la información disponible para que el Cliente cumpla sus deberes ante la autoridad y los afectados.",
            "**6.10 Transferencias internacionales.** Los datos se alojan en Estados Unidos. Las transferencias se amparan en los acuerdos de tratamiento de datos de cada proveedor y, cuando corresponde, en las cláusulas contractuales tipo de la Comisión Europea (RGPD) o en las cláusulas que exige la ANPD de Brasil (LGPD), además de las garantías que exige la ley chilena.",
            "**6.11 Devolución y eliminación.** El Cliente puede exportar sus datos en cualquier momento. Al eliminar la cuenta, los datos se borran de inmediato de la base de datos activa y desaparecen de las copias de seguridad en su ciclo de rotación, dentro de los 30 días siguientes. Se conservan solo los registros que la ley obliga a guardar (por ejemplo, de facturación).",
            "**6.12 Información y auditoría.** BE Academic pondrá a disposición del Cliente la información necesaria para demostrar el cumplimiento de esta sección y colaborará con las auditorías razonables que el Cliente o un auditor designado por él realicen, con aviso previo y protegiendo la confidencialidad de otros clientes.",
            "**6.13 Asistencia.** BE Academic ayudará al Cliente, en lo que razonablemente le corresponda, con las evaluaciones de impacto y las consultas a la autoridad.",
          ],
        },
        { p: "Esta sección se aplica conforme a la Ley N° 19.628 y, desde su entrada en vigencia, la Ley N° 21.719 (Chile); al Reglamento (UE) 2016/679 (RGPD) cuando el Cliente está en el Espacio Económico Europeo; y a la Ley N° 13.709/2018 (LGPD) cuando el Cliente está en Brasil. Si hay contradicción con otra parte de estos términos, prevalece esta sección en lo relativo a datos personales." },
      ],
    },
    {
      title: "7. Limitación de responsabilidad",
      blocks: [
        { p: "El motor de optimización procesa los datos que ingresa el Cliente. La Empresa no garantiza que el horario generado cumpla en todos los casos la totalidad de los criterios de la institución, y no responde por perjuicios derivados de restricciones mal configuradas. El Cliente debe revisar y aprobar los horarios antes de usarlos. Nada de lo anterior limita las obligaciones de la sección 6 ni los derechos que la ley no permite renunciar." },
      ],
    },
    {
      title: "8. Término",
      blocks: [
        { p: "El Cliente puede cancelar su suscripción o eliminar su cuenta en cualquier momento desde la plataforma. BE Academic puede suspender o terminar el acceso si el Cliente infringe gravemente estos términos, avisándole cuando sea posible para que pueda exportar sus datos." },
      ],
    },
    {
      title: "9. Cambios en estos términos",
      blocks: [
        { p: "Publicaremos cualquier modificación en esta página con su fecha y versión. Si el cambio es importante, lo avisaremos en la plataforma o por correo. Si cambia el acuerdo de tratamiento de datos, el Cliente deberá aceptarlo de nuevo." },
      ],
    },
    {
      title: "10. Ley aplicable y jurisdicción",
      blocks: [
        { p: "Estos términos se rigen por las leyes de la República de Chile, y las controversias se someten a los tribunales de Santiago de Chile, sin perjuicio de los derechos irrenunciables que la ley del país del Cliente le reconozca en materia de protección de datos o de consumo." },
        { p: `Contacto: ${EMAIL}` },
      ],
    },
  ],
};

const refundsEs: LegalDoc = {
  title: "Política de Reembolso",
  updated: "Última actualización: 18 de noviembre de 2026 · versión 2.0",
  intro: [],
  sections: [
    {
      title: "1. Periodo de prueba gratuito",
      blocks: [
        { p: "Ofrecemos una prueba completa de siete (7) días, sin costo y sin ingresar medios de pago, para que la institución compruebe que los horarios generados le sirven antes de pagar." },
      ],
    },
    {
      title: "2. Cancelación de la suscripción",
      blocks: [
        { p: `Puede cancelar su suscripción en cualquier momento desde **Suscripción**, en la plataforma, o escribiendo a ${EMAIL}.` },
        { p: "Al cancelar, conserva el acceso hasta el final del ciclo pagado (mensual o anual). No hacemos reembolsos proporcionales por el tiempo no usado después de una cancelación voluntaria." },
      ],
    },
    {
      title: "3. Cuándo hacemos reembolsos",
      blocks: [
        { p: "Al tratarse de un servicio digital que se entrega de inmediato, por regla general los pagos procesados por nuestro distribuidor autorizado (Paddle) son **finales**. Aun así, evaluaremos con rapidez y buena fe las solicitudes presentadas dentro de catorce (14) días corridos desde el pago en estos casos:" },
        {
          ul: [
            "**Cobros duplicados o por error:** un cargo repetido por una falla técnica en el procesamiento del pago.",
            "**Fallas graves del servicio:** una interrupción continua de más de 48 horas que impida generar o exportar el horario, sin que nuestro soporte logre resolverla.",
          ],
        },
        { p: "Esta política no limita los derechos que la ley de su país le reconozca y que no se puedan renunciar, como el derecho de desistimiento de los consumidores en algunos países. Paddle, como vendedor, gestiona esos derechos." },
      ],
    },
    {
      title: "4. Cómo solicitar un reembolso",
      blocks: [
        { p: `Escriba a ${EMAIL} con el correo de la cuenta, el número de transacción de Paddle y una descripción del problema. Si aprobamos la solicitud, el reembolso se hará al mismo medio de pago usado en la compra.` },
      ],
    },
  ],
};

// ─── ENGLISH ────────────────────────────────────────────────────────────────

const termsEn: LegalDoc = {
  title: "Terms of Service",
  updated: "Last updated: November 18, 2026 · version 2.0",
  intro: [
    "These terms govern the use of **SyncroTime**, a service of **Sociedad de Formación BE Academic Limitada**, Chilean tax ID (RUT) 77.650.439-4, with its address at El Pinar Lt. E-1 C-A, Los Ángeles, Biobío Region, Chile (\"BE Academic\" or \"the Company\").",
  ],
  sections: [
    {
      title: "1. Acceptance",
      blocks: [
        { p: "By registering for, accessing or using SyncroTime (\"the Service\") you accept these terms. If you accept them on behalf of an educational institution, you represent that you have authority to bind it; in that case, \"the Customer\" is the institution. If you do not agree, do not use the Service." },
      ],
    },
    {
      title: "2. The Service and your account",
      blocks: [
        { p: "SyncroTime is a cloud platform (SaaS) that generates and optimizes timetables for schools, colleges and universities from the data and rules the Customer enters." },
        { p: "The Customer is responsible for keeping its credentials confidential and for all activity under its account, and must tell us promptly if it suspects unauthorized access." },
      ],
    },
    {
      title: "3. Free trial",
      blocks: [
        { p: "The Service offers a free seven (7) day trial with no payment method required. During the trial:" },
        {
          ul: [
            "The Customer can use the academic setup and generation tools.",
            "Reports and timetables exported to PDF carry a watermark indicating they come from a trial.",
            "The watermark is removed automatically once a paid plan is purchased.",
          ],
        },
      ],
    },
    {
      title: "4. Payments, prices and billing",
      blocks: [
        { p: "Payments are processed by **Paddle.com**, our authorized reseller (*Merchant of Record*). When paying, the Customer makes the purchase from Paddle under Paddle's terms, and Paddle issues the invoice and handles any applicable taxes." },
        { p: "Plans are monthly (USD 42) and annual (USD 400). They renew automatically with the same payment method unless the Customer cancels before the end of the current cycle. Cancellations and refunds are governed by the Refund Policy." },
      ],
    },
    {
      title: "5. Customer data",
      blocks: [
        { p: "The data the Customer enters (teachers, subjects, classes, rooms, constraints and timetables) belongs to the Customer. BE Academic does not use it for its own purposes and does not sell it." },
        { p: "Under **Data & privacy**, inside the platform, the institution can download a complete copy of its data in a structured format (JSON) at any time and delete the account with all its data." },
      ],
    },
    {
      id: DPA_ANCHOR,
      title: "6. Data Processing Agreement",
      blocks: [
        { p: "This section is the data processing agreement between the Customer, as **controller** of the personal data it enters into SyncroTime, and BE Academic, as **processor** (under the LGPD, \"operator\"; under Chilean law, \"encargado\"). It forms part of these terms and the Customer expressly accepts it in the platform." },
        {
          ul: [
            "**6.1 Subject matter and duration.** BE Academic processes the data only to provide the Service, while the agreement is in force and until deletion as described in 6.11.",
            "**6.2 Nature and purpose.** Storing, organizing and processing the data to generate, edit, display and export timetables, and to provide technical support when the Customer requests it.",
            "**6.3 Types of data and data subjects.** Data about teachers and staff (name, internal code, contract hours, availability and assignments) and about the institution's users (name and email). The Service is not designed for sensitive data or student data, and the Customer must not enter them.",
            "**6.4 Instructions.** BE Academic processes the data only on the Customer's documented instructions, which are these terms and what the Customer configures in the platform. If an instruction appears to infringe the law, BE Academic will inform the Customer.",
            "**6.5 Confidentiality.** Only people who need access to provide the Service can access the data, and they are bound by confidentiality.",
            "**6.6 Security.** BE Academic applies appropriate technical and organizational measures: encryption in transit (HTTPS/TLS), passwords stored with a strong hash, data isolation between institutions, role-based access control, two-factor authentication for internal administration, login attempt limits, logging of administrative actions and backups.",
            "**6.7 Sub-processors.** The Customer authorizes these sub-processors: **Google Cloud (Google LLC)**, hosting, database and processing, in the us-central1 region (United States); and **Resend**, service emails. **Paddle** processes payment data as an independent controller. BE Academic will give at least 30 days' notice of any new sub-processor; the Customer may object and, if no agreement is reached, terminate the agreement. BE Academic imposes equivalent data protection obligations on each sub-processor and remains liable for them.",
            "**6.8 Data subject rights.** If a data subject (for example, a teacher) contacts BE Academic to exercise their rights, BE Academic will forward the request to the Customer without delay and help it respond. The platform's tools allow the data to be viewed, corrected, exported and deleted.",
            "**6.9 Personal data breaches.** BE Academic will notify the Customer without undue delay, and in any case within 48 hours of becoming aware, of any breach affecting its data, with the information available so the Customer can meet its obligations to the authorities and to the people affected.",
            "**6.10 International transfers.** The data is hosted in the United States. Transfers rely on each provider's data processing agreement and, where applicable, on the European Commission's Standard Contractual Clauses (GDPR) or the clauses required by Brazil's ANPD (LGPD), as well as the safeguards required by Chilean law.",
            "**6.11 Return and deletion.** The Customer can export its data at any time. When the account is deleted, the data is erased immediately from the live database and disappears from backups in their rotation cycle, within 30 days. Only records that the law requires us to keep (for example, billing records) are retained.",
            "**6.12 Information and audits.** BE Academic will make available to the Customer the information needed to demonstrate compliance with this section and will cooperate with reasonable audits by the Customer or an auditor it appoints, with prior notice and protecting the confidentiality of other customers.",
            "**6.13 Assistance.** BE Academic will reasonably assist the Customer with data protection impact assessments and prior consultations with the authorities.",
          ],
        },
        { p: "This section applies under Chilean Law No. 19.628 and, once in force, Law No. 21.719; under Regulation (EU) 2016/679 (GDPR) when the Customer is in the European Economic Area; and under Brazilian Law No. 13.709/2018 (LGPD) when the Customer is in Brazil. If it conflicts with any other part of these terms, this section prevails as regards personal data." },
      ],
    },
    {
      title: "7. Limitation of liability",
      blocks: [
        { p: "The optimization engine processes the data the Customer enters. The Company does not guarantee that a generated timetable will meet every criterion of the institution in all cases, and is not liable for losses caused by misconfigured constraints. The Customer must review and approve timetables before using them. Nothing in this section limits the obligations in section 6 or any rights that cannot be waived by law." },
      ],
    },
    {
      title: "8. Termination",
      blocks: [
        { p: "The Customer may cancel its subscription or delete its account at any time from the platform. BE Academic may suspend or terminate access if the Customer seriously breaches these terms, giving notice where possible so the Customer can export its data." },
      ],
    },
    {
      title: "9. Changes to these terms",
      blocks: [
        { p: "We will publish any changes on this page with their date and version. If a change is significant, we will announce it in the platform or by email. If the data processing agreement changes, the Customer will need to accept it again." },
      ],
    },
    {
      title: "10. Governing law and jurisdiction",
      blocks: [
        { p: "These terms are governed by the laws of the Republic of Chile, and disputes are subject to the courts of Santiago, Chile, without prejudice to any non-waivable data protection or consumer rights granted to the Customer by the law of its country." },
        { p: `Contact: ${EMAIL}` },
      ],
    },
  ],
};

const refundsEn: LegalDoc = {
  title: "Refund Policy",
  updated: "Last updated: November 18, 2026 · version 2.0",
  intro: [],
  sections: [
    {
      title: "1. Free trial",
      blocks: [
        { p: "We offer a full seven (7) day trial, free of charge and with no payment method required, so the institution can check that the generated timetables work for it before paying." },
      ],
    },
    {
      title: "2. Cancelling your subscription",
      blocks: [
        { p: `You can cancel your subscription at any time from **Subscription** in the platform, or by writing to ${EMAIL}.` },
        { p: "After cancelling, you keep access until the end of the paid cycle (monthly or annual). We do not give prorated refunds for unused time after a voluntary cancellation." },
      ],
    },
    {
      title: "3. When we give refunds",
      blocks: [
        { p: "Because this is a digital service delivered immediately, payments processed by our authorized reseller (Paddle) are generally **final**. Even so, we will review promptly and in good faith requests made within fourteen (14) calendar days of payment in these cases:" },
        {
          ul: [
            "**Duplicate or mistaken charges:** a repeated charge caused by a technical error in payment processing.",
            "**Serious service failures:** a continuous outage of more than 48 hours that prevents generating or exporting the timetable and that our support team cannot resolve.",
          ],
        },
        { p: "This policy does not limit any non-waivable rights granted by the law of your country, such as the consumer right of withdrawal in some countries. Paddle, as the seller, handles those rights." },
      ],
    },
    {
      title: "4. How to request a refund",
      blocks: [
        { p: `Write to ${EMAIL} with the account email, the Paddle transaction number and a description of the problem. If we approve the request, the refund is made to the payment method used for the purchase.` },
      ],
    },
  ],
};

// ─── PORTUGUÊS ──────────────────────────────────────────────────────────────

const termsPt: LegalDoc = {
  title: "Termos de Serviço",
  updated: "Última atualização: 18 de novembro de 2026 · versão 2.0",
  intro: [
    "Estes termos regulam o uso do **SyncroTime**, serviço da **Sociedad de Formación BE Academic Limitada**, RUT (registro fiscal chileno) 77.650.439-4, com sede em El Pinar Lt. E-1 C-A, Los Ángeles, Região do Biobío, Chile («BE Academic» ou «a Empresa»).",
  ],
  sections: [
    {
      title: "1. Aceitação",
      blocks: [
        { p: "Ao se cadastrar, acessar ou usar o SyncroTime («o Serviço»), você aceita estes termos. Se os aceitar em nome de uma instituição de ensino, declara ter poderes para obrigá-la; nesse caso, «o Cliente» é a instituição. Se não concordar, não use o Serviço." },
      ],
    },
    {
      title: "2. O Serviço e sua conta",
      blocks: [
        { p: "O SyncroTime é uma plataforma em nuvem (SaaS) que gera e otimiza horários para escolas, faculdades e universidades a partir dos dados e das regras que o Cliente insere." },
        { p: "O Cliente é responsável por manter suas credenciais em sigilo e por toda atividade realizada com sua conta, e deve nos avisar sem demora se suspeitar de acesso não autorizado." },
      ],
    },
    {
      title: "3. Período de teste",
      blocks: [
        { p: "O Serviço oferece um teste gratuito de sete (7) dias, sem exigir meio de pagamento. Durante o teste:" },
        {
          ul: [
            "O Cliente pode usar as ferramentas de configuração acadêmica e de geração.",
            "Os relatórios e horários exportados em PDF levam uma marca d'água indicando que vêm de um teste.",
            "A marca d'água é removida automaticamente ao contratar um plano pago.",
          ],
        },
      ],
    },
    {
      title: "4. Pagamentos, preços e faturamento",
      blocks: [
        { p: "Os pagamentos são processados pela **Paddle.com**, nossa revendedora autorizada (*Merchant of Record*). Ao pagar, o Cliente realiza a compra com a Paddle, segundo os termos dela, e a Paddle emite o comprovante e trata dos impostos aplicáveis." },
        { p: "Os planos são mensal (USD 42) e anual (USD 400). Renovam-se automaticamente com o mesmo meio de pagamento, salvo se o Cliente cancelar antes do fim do ciclo em curso. Cancelamentos e reembolsos seguem a Política de Reembolso." },
      ],
    },
    {
      title: "5. Dados do Cliente",
      blocks: [
        { p: "Os dados que o Cliente insere (professores, disciplinas, turmas, salas, restrições e horários) pertencem ao Cliente. A BE Academic não os usa para fins próprios nem os vende." },
        { p: "Em **Dados e privacidade**, dentro da plataforma, a instituição pode baixar a qualquer momento uma cópia completa dos seus dados em formato estruturado (JSON) e excluir a conta com todos os seus dados." },
      ],
    },
    {
      id: DPA_ANCHOR,
      title: "6. Acordo de Tratamento de Dados",
      blocks: [
        { p: "Esta seção é o contrato de tratamento de dados entre o Cliente, como **controlador** dos dados pessoais que insere no SyncroTime, e a BE Academic, como **operadora** (no RGPD, «subcontratante»; na lei chilena, «encargado»). Faz parte destes termos e o Cliente a aceita expressamente na plataforma." },
        {
          ul: [
            "**6.1 Objeto e duração.** A BE Academic trata os dados apenas para prestar o Serviço, enquanto o contrato estiver vigente e até a exclusão prevista no item 6.11.",
            "**6.2 Natureza e finalidade.** Armazenar, organizar e processar os dados para gerar, editar, exibir e exportar horários, e para dar suporte técnico quando o Cliente solicitar.",
            "**6.3 Tipos de dados e titulares.** Dados de professores e funcionários (nome, código interno, horas de contrato, disponibilidade e atribuições) e dos usuários da instituição (nome e e-mail). O Serviço não foi projetado para dados sensíveis nem para dados de alunos, e o Cliente não deve inseri-los.",
            "**6.4 Instruções.** A BE Academic trata os dados apenas conforme as instruções documentadas do Cliente, que são estes termos e o que o Cliente configurar na plataforma. Se uma instrução parecer contrária à lei, a BE Academic informará o Cliente.",
            "**6.5 Confidencialidade.** Só acessam os dados as pessoas que precisam deles para prestar o Serviço, obrigadas ao sigilo.",
            "**6.6 Segurança.** A BE Academic aplica medidas técnicas e administrativas adequadas: criptografia em trânsito (HTTPS/TLS), senhas com hash robusto, isolamento dos dados entre instituições, controle de acesso por função, segundo fator para a administração interna, limite de tentativas de acesso, registro das ações administrativas e cópias de segurança.",
            "**6.7 Suboperadores.** O Cliente autoriza estes suboperadores: **Google Cloud (Google LLC)**, hospedagem, banco de dados e processamento, na região us-central1 (Estados Unidos); e **Resend**, envio de e-mails do serviço. A **Paddle** trata os dados de pagamento como controladora independente. A BE Academic avisará com pelo menos 30 dias de antecedência sobre qualquer novo suboperador; o Cliente poderá se opor e, se não houver acordo, encerrar o contrato. A BE Academic impõe a cada suboperador obrigações de proteção equivalentes e responde por eles.",
            "**6.8 Direitos dos titulares.** Se um titular (por exemplo, um professor) procurar a BE Academic para exercer seus direitos, ela encaminhará o pedido ao Cliente sem demora e o ajudará a responder. As ferramentas da plataforma permitem consultar, corrigir, exportar e excluir os dados.",
            "**6.9 Incidentes de segurança.** A BE Academic notificará o Cliente sem demora injustificada, e no máximo em 48 horas depois de tomar conhecimento, sobre qualquer incidente que afete seus dados, com as informações disponíveis para que o Cliente cumpra seus deveres perante a autoridade e os titulares.",
            "**6.10 Transferências internacionais.** Os dados ficam hospedados nos Estados Unidos. As transferências se amparam nos acordos de tratamento de dados de cada fornecedor e, quando aplicável, nas cláusulas-padrão contratuais aprovadas pela ANPD (LGPD) ou pela Comissão Europeia (RGPD), além das garantias exigidas pela lei chilena.",
            "**6.11 Devolução e exclusão.** O Cliente pode exportar seus dados a qualquer momento. Ao excluir a conta, os dados são apagados imediatamente do banco de dados ativo e desaparecem das cópias de segurança em seu ciclo de rotação, em até 30 dias. Mantêm-se apenas os registros que a lei obriga a guardar (por exemplo, de faturamento).",
            "**6.12 Informação e auditoria.** A BE Academic disponibilizará ao Cliente as informações necessárias para demonstrar o cumprimento desta seção e colaborará com auditorias razoáveis do Cliente ou de um auditor indicado por ele, com aviso prévio e protegendo o sigilo de outros clientes.",
            "**6.13 Assistência.** A BE Academic ajudará o Cliente, no que razoavelmente lhe couber, com relatórios de impacto à proteção de dados e consultas à autoridade.",
          ],
        },
        { p: "Esta seção se aplica conforme a Lei nº 13.709/2018 (LGPD) quando o Cliente está no Brasil; o Regulamento (UE) 2016/679 (RGPD) quando o Cliente está no Espaço Econômico Europeu; e a Lei nº 19.628 e, desde sua entrada em vigor, a Lei nº 21.719 do Chile. Em caso de conflito com outra parte destes termos, prevalece esta seção no que se refere a dados pessoais." },
      ],
    },
    {
      title: "7. Limitação de responsabilidade",
      blocks: [
        { p: "O motor de otimização processa os dados que o Cliente insere. A Empresa não garante que o horário gerado atenda em todos os casos a todos os critérios da instituição e não responde por prejuízos causados por restrições mal configuradas. O Cliente deve revisar e aprovar os horários antes de usá-los. Nada disso limita as obrigações da seção 6 nem os direitos que a lei não permite renunciar." },
      ],
    },
    {
      title: "8. Encerramento",
      blocks: [
        { p: "O Cliente pode cancelar a assinatura ou excluir a conta a qualquer momento pela plataforma. A BE Academic pode suspender ou encerrar o acesso se o Cliente violar gravemente estes termos, avisando quando possível para que ele possa exportar seus dados." },
      ],
    },
    {
      title: "9. Alterações nestes termos",
      blocks: [
        { p: "Publicaremos qualquer alteração nesta página com data e versão. Se a mudança for importante, avisaremos na plataforma ou por e-mail. Se o acordo de tratamento de dados mudar, o Cliente precisará aceitá-lo novamente." },
      ],
    },
    {
      title: "10. Lei aplicável e foro",
      blocks: [
        { p: "Estes termos são regidos pelas leis da República do Chile, e as controvérsias ficam sujeitas aos tribunais de Santiago, Chile, sem prejuízo dos direitos irrenunciáveis de proteção de dados ou de consumidor que a lei do país do Cliente lhe garanta." },
        { p: `Contato: ${EMAIL}` },
      ],
    },
  ],
};

const refundsPt: LegalDoc = {
  title: "Política de Reembolso",
  updated: "Última atualização: 18 de novembro de 2026 · versão 2.0",
  intro: [],
  sections: [
    {
      title: "1. Período de teste gratuito",
      blocks: [
        { p: "Oferecemos um teste completo de sete (7) dias, gratuito e sem exigir meio de pagamento, para que a instituição confirme que os horários gerados lhe servem antes de pagar." },
      ],
    },
    {
      title: "2. Cancelamento da assinatura",
      blocks: [
        { p: `Você pode cancelar a assinatura a qualquer momento em **Assinatura**, na plataforma, ou escrevendo para ${EMAIL}.` },
        { p: "Após o cancelamento, você mantém o acesso até o fim do ciclo pago (mensal ou anual). Não fazemos reembolsos proporcionais pelo tempo não usado após um cancelamento voluntário." },
      ],
    },
    {
      title: "3. Quando fazemos reembolsos",
      blocks: [
        { p: "Por se tratar de um serviço digital entregue de imediato, os pagamentos processados por nossa revendedora autorizada (Paddle) são, em regra, **definitivos**. Ainda assim, analisaremos com rapidez e boa-fé os pedidos feitos em até quatorze (14) dias corridos após o pagamento nestes casos:" },
        {
          ul: [
            "**Cobranças duplicadas ou por engano:** uma cobrança repetida causada por falha técnica no processamento do pagamento.",
            "**Falhas graves do serviço:** uma interrupção contínua de mais de 48 horas que impeça gerar ou exportar o horário, sem que nosso suporte consiga resolver.",
          ],
        },
        { p: "Esta política não limita os direitos irrenunciáveis que a lei do seu país lhe garanta, como o direito de arrependimento do consumidor (no Brasil, art. 49 do Código de Defesa do Consumidor, quando aplicável). A Paddle, como vendedora, trata desses direitos." },
      ],
    },
    {
      title: "4. Como pedir um reembolso",
      blocks: [
        { p: `Escreva para ${EMAIL} com o e-mail da conta, o número da transação da Paddle e uma descrição do problema. Se aprovarmos o pedido, o reembolso será feito no mesmo meio de pagamento usado na compra.` },
      ],
    },
  ],
};

export const TERMS: Record<LegalLocale, LegalDoc> = { es: termsEs, en: termsEn, pt: termsPt };
export const REFUNDS: Record<LegalLocale, LegalDoc> = { es: refundsEs, en: refundsEn, pt: refundsPt };

const pick = <T,>(docs: Record<LegalLocale, T>, locale: string): T =>
  docs[(["es", "en", "pt"].includes(locale) ? locale : "es") as LegalLocale];

export const termsFor = (locale: string) => pick(TERMS, locale);
export const refundsFor = (locale: string) => pick(REFUNDS, locale);

/** Textos comunes de las páginas legales. */
export const LEGAL_UI: Record<LegalLocale, { back: string; backToPricing: string; terms: string; privacy: string; refunds: string; rights: string }> = {
  es: { back: "Volver al inicio", backToPricing: "Volver a precios", terms: "Términos", privacy: "Privacidad", refunds: "Reembolsos", rights: "Todos los derechos reservados" },
  en: { back: "Back to home", backToPricing: "Back to pricing", terms: "Terms", privacy: "Privacy", refunds: "Refunds", rights: "All rights reserved" },
  pt: { back: "Voltar ao início", backToPricing: "Voltar aos preços", terms: "Termos", privacy: "Privacidade", refunds: "Reembolsos", rights: "Todos os direitos reservados" },
};
export const legalUiFor = (locale: string) => pick(LEGAL_UI, locale);
