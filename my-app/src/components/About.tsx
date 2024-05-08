export default function About() {
  return (
    <section id="About">
      <div className="container m-auto flex flex-col md:flex-row md:gap-x-4 max-md:gap-y-28 max-md:py-20 md:py-28 px-4">
        <div className="flex-1 flex flex-col justify-center items-center">
          <p className="flex flex-col max-md:items-center max-md:text-center max-md:text-xl text-3xl">
            <span className="text-gray-600 font-bold">DESCRUBA A</span>
            <span className="text-blue-700 font-bold">
              EXCÊLENCIA EM INTERNET
            </span>
            <span className="text-gray-600 font-bold">SUA MELHOR ESCOLHA</span>
            <span className="text-blue-700 font-bold">
              PARA CONEXÃO CONFIÁVEL
            </span>
            <span className="text-gray-600 font-bold">RÁPIDA E ESTÁVEL.</span>
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center max-md:items-center max-md:text-center">
          <h2 className="max-md:text-2xl text-3xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-sm text-gray-600 max-w-md">
            A <strong>DabliuNet</strong> é um provedor de internet com mais de
            17 anos de experiência no mercado, oferecendo serviços de alta
            qualidade aos nossos clientes.
            <br />
            <br />
            <strong>Somos</strong> uma empresa certificada pela ANATEL, com contrato com a COELBA
            para utilização de postes e uma equipe de engenharia dedicada à
            segurança e capacitação dos nossos colaboradores.
            <br />
            <br />
            <strong>Nossa</strong> rede de internet abrange mais de 250 km de fibra óptica,
            atendendo às regiões de Salvador, Camaçari e Lauro de Freitas.
            <br />
            <br />
            <strong>Nosso</strong> compromisso é proporcionar a melhor experiência de conexão de
            internet com ultravelocidade, garantindo a diversão da sua família e
            a sua produtividade no trabalho.
          </p>
        </div>
      </div>
    </section>
  );
}
