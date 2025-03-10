import { useRouter } from 'next/router';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Button from '../components/Button';
import Link from '../components/Link';
import VolunteersCard from '../components/VolunteersCard';
import ContactForm from '../components/ContactForm';
import HowContribute from '../components/HowContribute';
import SocialContactButtons from '../components/SocialContactButtons';

import volunteersList from '../utils/volunteers';
import styles from './index.module.scss';
import BodyText from '../components/BodyText';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <SEO
        title="Dados Abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        shouldExcludeTitleSuffix
      />
      <Header />

      <section className="bg-no-repeat bg-bottom bg-cover bg-city-pattern flex flex-col tablet:flex-row">
        <div className="flex-grow flex justify-end tablet:items-start tablet:order-last">
          <img
            className="w-1/2 min-w-5xl tablet:w-auto"
            src="/assets/peoples-right.svg"
            alt="Pessoas a Direita"
          />
        </div>
        <div className="text-center page-margin-align desktop:w-1/2 tablet:pr-5 tablet:py-48 desktop:pt-64 desktop:text-left">
          <h1>Mais transparência em Feira de Santana</h1>
          <BodyText className="py-5">
            Nós, cidadãos, temos o direito a informação de forma clara e
            transparente. Precisamos saber o que acontece em nossa cidade.
            <br />
            <strong>Junte-se a nós e faça a diferença!</strong>
          </BodyText>
          <div className="flex place-content-center large-desktop:place-content-start py-5">
            <Button
              className={styles.mainButton}
              onClick={() =>
                router.push('https://www.dadosabertosdefeira.com.br/painel/')
              }
            >
              Consultar a base de dados
            </Button>
          </div>
        </div>
      </section>

      <section id="sobre" className={styles.history}>
        <div className={styles.icon}>
          <img src="/assets/icons/book.svg" alt="Livro" />
          <h2>Nossa História</h2>
        </div>
        <div className={styles.historyTexts}>
          <BodyText>
            A ideia de criar um espaço onde as pessoas possam buscar informações
            de maneira fácil sobre o município nasceu em 2019, quando a
            programadora Ana Paula Gomes tentou encontrar informações sobre
            quanto o município gastava com a merenda escolar. O interesse surgiu
            após ouvir uma denúncia feita por Rafael Velame no rádio sobre a
            falta de merenda em algumas escolas da cidade. Ao acessar o{' '}
            <Link
              href="http://www.transparencia.feiradesantana.ba.gov.br/"
              target="_blank"
              rel="noreferrer"
            >
              portal da transparência de Feira de Santana
            </Link>{' '}
            deparou-se com a dificuldade de fazer buscas na{' '}
            <Link
              href="http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=licitacoes"
              target="_blank"
              rel="noreferrer"
            >
              página de licitações
            </Link>
            . Fez alguns pedidos de informação à Prefeitura mas não foi
            respondida.
          </BodyText>
          <BodyText>
            Após a tentativa frustrada de conseguir informações da Prefeitura,
            Ana Paula foi até o site da Câmara Municipal de Feira de Santana e
            descobriu que a situação também não era boa. Informações simples,
            como a assiduidade dos vereadores, não estavam disponíveis. Você
            consegue se imaginar pagando um salário alto a um funcionário e não
            sabendo se ele compareceu ao trabalho ou se executou sua função como
            deveria?
          </BodyText>

          <BodyText>
            Diante da situação foram feitos novos pedidos de informação à Câmara
            - também sem respostas. Após meses de espera foi necessário acionar
            o Ministério Público da Bahia para intermediar o processo e, a
            partir daí, o projeto ganhou projeção nas mídias locais, como BATV
            da TV Subaé,{' '}
            <Link
              href="https://www.acordacidade.com.br/noticias/222557/programadora-encontra-dificuldades-para-obter-informacoes-sobre-a-atuacao-dos-vereadores-de-feira.html"
              target="_blank"
              rel="noreferrer"
            >
              Acorda Cidade
            </Link>
            ,{' '}
            <Link
              href="https://www.blogdovelame.com/presidente-reconhece-falta-de-transparencia-e-promete-divulgar-dados/"
              target="_blank"
              rel="noreferrer"
            >
              Blog do Velame
            </Link>
            , além de diversas participações nos programas da{' '}
            <Link
              href="https://www.facebook.com/blogdovelame/videos/750921745431854/"
              target="_blank"
              rel="noreferrer"
            >
              Rádio Globo Feira e Jovem Pan
            </Link>
            . Com a repercussão, o presidente da Câmara Municipal, José
            Carneiro, nos convidou para uma visita, marcando o início de uma
            colaboração com a Casa da Cidadania. A partir dessa data, a Câmara
            passou a divulgar a assiduidade dos vereadores e as atas das sessões
            da casa.
          </BodyText>
          <BodyText>
            Ainda estamos lutando para conseguir vários dados diferentes e fazer
            com que os pedidos de informação sejam propriamente respondidos pela
            Prefeitura. Entendemos que a transparência tem grande impacto em
            coibir atos de corrupção e tornar o uso do dinheiro público mais
            eficiente. Lutar pela transparência é um trabalho de todos.
          </BodyText>
        </div>
      </section>

      <section id="voluntarios" className={styles.volunteers}>
        <div className={styles.icon}>
          <img src="/assets/icons/hand-with-hearth.svg" alt="Livro" />
          <h2>Voluntários</h2>
        </div>
        <div className={styles.volunteersList}>
          {volunteersList.map((volunteer) => (
            <VolunteersCard
              key={`${volunteer.name}-${volunteer.role}`}
              name={volunteer.name}
              role={volunteer.role}
              picture={volunteer.picture}
              linkedin={volunteer.linkedin}
              instagram={volunteer.instagram}
              github={volunteer.github}
              twitter={volunteer.twitter}
            />
          ))}
        </div>
      </section>

      <div className={styles.contributeWrapper}>
        <HowContribute />
      </div>

      <section id="contato" className="border-t-2 pt-2xl tablet:space-x-md">
        <div className="flex flex-col justify-center tablet:flex-row">
          <div className="text-center tablet:max-w-1/2 tablet:m-md tablet:text-left">
            <h2>Contato</h2>
            <div className="flex flex-col desktop:flex-row my-lg w-full space-y-md desktop:space-y-0">
              <iframe
                title="Feira de Santana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124770.06894749572!2d-39.00227599729459!3d-12.243901565793168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd0766da9%3A0xed4d58d8df9d5ffe!2sFeira%20de%20Santana%20-%20Maria%20Quit%C3%A9ria%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1624460355068!5m2!1spt-BR!2sbr"
                width="100%"
                height="212px"
                allowFullScreen=""
                loading="lazy"
              />
              <div className="flex flex-col mx-xl">
                <h3>Feira de Santana</h3>
                <a href="mailto:dadosabertosdefeira+site@gmail.com">
                  contato@dadosabertosdefeira.com.br
                </a>
                <SocialContactButtons />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center tablet:m-md tablet:w-80 tablet:items-start">
            <ContactForm />
          </div>
        </div>
        <div className="text-center m-xl">
          <span>© 2021 Todos os Direitos Reservados</span>
        </div>
      </section>
    </>
  );
}
