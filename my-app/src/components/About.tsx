export default function About() {
  return (
    <section id="About">
      <div className="h-[600px] container m-auto flex gap-x-4">
        <div className="flex-1 flex flex-col justify-center items-center">
          <p className="flex flex-col text-3xl">
            <span className="text-gray-600 font-bold">DESCRUBA A</span>
            <span className="text-blue-700 font-bold">
              EXCÊLENCIA EM INTERNET
            </span>
            <span className="text-gray-600 font-bold">
              SUA MELHOR ESCOLHA
            </span>
            <span className="text-blue-700 font-bold">
              PARA CONEXÃO CONFIÁVEL
            </span>
            <span className="text-gray-600 font-bold">
              RÁPIDA E ESTÁVEL.
            </span>
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6">Sobre Nós</h2>
          <p className="text-sm text-gray-600 max-w-md">
            A VirtualLink é um provedor de internet com mais de 17 anos de
            experiência no mercado, oferecendo serviços de alta qualidade aos
            nossos clientes.
            <br />
            <br />
            Somos uma empresa certificada pela ANATEL, com contrato com a COELBA
            para utilização de postes e uma equipe de engenharia dedicada à
            segurança e capacitação dos nossos colaboradores.
            <br />
            <br />
            Nossa rede de internet abrange mais de 250 km de fibra óptica,
            atendendo às regiões de Salvador, Camaçari e Lauro de Freitas.
            <br />
            <br />
            Nosso compromisso é proporcionar a melhor experiência de conexão de
            internet com ultravelocidade, garantindo a diversão da sua família e
            a sua produtividade no trabalho.
          </p>
        </div>
      </div>
    </section>
  );
}
