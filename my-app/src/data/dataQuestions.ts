import { nanoid } from "nanoid";

export const dataQuestions = [
  {
    id: nanoid(5),
    title: "Qual é a velocidade de conexão oferecida?",
    description: "A velocidade pode variar dependendo do plano escolhido.",
    open: false,
  },
  {
    id: nanoid(5),
    title: "Quais métodos de pagamento são aceitos?",
    description:
      "Aceitamos os seguintes métodos de pagamento: cartão de crédito, PIX e boleto bancário.",
    open: false,
  },
  {
    id: nanoid(5),
    title: "Há limite de dados nos planos?",
    description:
      "Em nossos planos de internet, não há limites de dados. Oferecemos uma experiência de internet sem restrições, permitindo que você navegue, faça streaming, jogue online e realize outras atividades online sem se preocupar com limites de dados. Acreditamos em proporcionar liberdade e flexibilidade aos nossos clientes para que possam aproveitar ao máximo sua conexão à internet. Se tiver mais alguma dúvida ou precisar de mais informações, estou à disposição para ajudar!",
    open: false,
  },
  {
    id: nanoid(5),
    title: "Como contatar o suporte técnico?",
    description:
      "Você pode entrar em contato através do nosso número de telefone '(71) 90000-0000' ou através do nosso email 'exemplo@exem.com'.",
    open: false,
  },
];
