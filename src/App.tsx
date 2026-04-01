import { 
  CheckCircle2, 
  BarChart3, 
  Mail, 
  Zap, 
  AlertTriangle, 
  Clock, 
  ChevronDown, 
  ArrowRight,
  PlayCircle,
  Star,
  Quote
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A2540] selection:bg-[#00FF9F] selection:text-[#0A2540]">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(0,255,159,0.4)]">
              <path d="M25 45C25 30 35 20 50 20C65 20 75 30 75 45V80C75 80 65 75 50 75C35 75 25 80 25 80V45Z" fill="#0A2540" stroke="white" strokeWidth="2"/>
              <circle cx="40" cy="40" r="3" fill="white"/>
              <circle cx="60" cy="40" r="3" fill="white"/>
              <path d="M30 70L45 55L60 65L85 35" stroke="#00FF9F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M75 35H85V45" stroke="#00FF9F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="30" y="65" width="8" height="10" fill="#00FF9F" opacity="0.8"/>
              <rect x="45" y="55" width="8" height="20" fill="#00FF9F" opacity="0.8"/>
              <rect x="60" y="45" width="8" height="30" fill="#00FF9F" opacity="0.8"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#0A2540]">Insight<span className="text-[#00FF9F]">Ghost</span></span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#como-funciona" className="text-sm font-medium hover:text-[#00FF9F] transition-colors">Como funciona</a>
            <a href="#beneficios" className="text-sm font-medium hover:text-[#00FF9F] transition-colors">Benefícios</a>
            <a href="#precos" className="text-sm font-medium hover:text-[#00FF9F] transition-colors">Preços</a>
            <a href="#precos" className="rounded-full bg-[#0A2540] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#153a5f] transition-all shadow-lg shadow-blue-900/10">
              Começar Grátis
            </a>
          </div>
          <button className="md:hidden text-[#0A2540]">
            <BarChart3 className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#00FF9F] ring-1 ring-inset ring-[#00FF9F]/20 mb-6">
                <Zap className="mr-1.5 h-4 w-4 fill-current" />
                IA treinada para ROI de E-commerce
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0A2540] sm:text-6xl">
                Você gasta milhares em anúncios todo mês e <span className="text-[#00FF9F] bg-[#0A2540] px-2 rounded-md text-nowrap">não sabe onde</span> está perdendo dinheiro?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
                Relatórios executivos automáticos toda segunda-feira com insights claros em português brasileiro. A IA analisa seu Google Analytics, Meta Ads e TikTok Ads e te diz exatamente o que fazer para aumentar vendas e cortar desperdício.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <a href="#precos" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2540] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-[#153a5f] sm:w-auto shadow-xl shadow-blue-900/20">
                  Começar grátis por 14 dias (sem cartão)
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <button className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-lg font-semibold text-[#0A2540] transition-all hover:bg-gray-50 sm:w-auto">
                  <PlayCircle className="h-5 w-5" />
                  Ver demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <span>+500 agências e e-commerces já usam</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                {/* Mockup do Relatório */}
                <div className="bg-[#0A2540] p-4 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-mono opacity-60">insightghost_report_v2.pdf</span>
                </div>
                <div className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Resumo Executivo Semanal</h3>
                    <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700">ROI: 4.2x (+15%)</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4 border-l-4 border-[#00FF9F]">
                      <p className="text-sm font-bold text-[#0A2540]">💡 Insight Acionável:</p>
                      <p className="mt-1 text-sm text-gray-600">"Seu ROAS no Meta Ads subiu 22%. Recomendamos aumentar o orçamento nos Reels de 'Prova Social' em 30% para escalar as vendas."</p>
                    </div>
                    <div className="rounded-lg bg-red-50 p-4 border-l-4 border-red-400">
                      <p className="text-sm font-bold text-red-800">⚠️ Alerta de Desperdício:</p>
                      <p className="mt-1 text-sm text-red-700">"A campanha de TikTok 'Topo de Funil' está com CTR abaixo de 0.5%. Pause imediatamente para economizar R$ 450/dia."</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-lg bg-gray-100 animate-pulse"></div>
                      <div className="h-24 rounded-lg bg-gray-100 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 -z-10 h-64 w-64 rounded-full bg-[#00FF9F]/10 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Você está jogando dinheiro fora com <br className="hidden lg:block" />
            <span className="text-[#00FF9F]">anúncios e nem percebe?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A maioria dos donos de negócio se perde em dashboards complexos ou planilhas infinitas. O resultado? Decisões lentas e dinheiro jogado no lixo.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { title: "Dados Fragmentados", desc: "Meta, Google e TikTok não se conversam. Você nunca tem a visão real." },
              { title: "Falta de Tempo", desc: "Gastar 10 horas por semana montando relatórios não é o seu trabalho." },
              { title: "Incerteza no Investimento", desc: "O medo de escalar campanhas por não entender os números trava seu crescimento." }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-8 text-left border border-white/10">
                <AlertTriangle className="h-8 w-8 text-[#00FF9F] mb-4" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0A2540]">Simples como deve ser</h2>
            <p className="mt-4 text-gray-600">Em 5 minutos você configura tudo e nunca mais se preocupa.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-4">
            {[
              { step: "01", title: "Conecte suas contas", desc: "Integre Meta, Google e TikTok com dois cliques.", icon: Zap },
              { step: "02", title: "IA analisa tudo", desc: "Nossa IA cruza os dados e identifica padrões de lucro.", icon: BarChart3 },
              { step: "03", title: "Relatório na Inbox", desc: "Toda segunda você recebe um PDF executivo pronto.", icon: Mail },
              { step: "04", title: "Escala Garantida", desc: "Siga as recomendações e veja seu ROI subir.", icon: CheckCircle2 }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-[#0A2540] shadow-sm ring-1 ring-gray-200">
                  <item.icon className="h-8 w-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00FF9F]">{item.step}</span>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                {i < 3 && <div className="absolute right-[-25%] top-8 hidden w-1/2 border-t-2 border-dashed border-gray-200 md:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">O que você ganha com o <br /> InsightGhost?</h2>
              <p className="mt-4 text-lg text-gray-600">Mais do que dados, entregamos clareza para você focar no que importa: crescer seu negócio.</p>
              
              <div className="mt-10 space-y-8">
                {[
                  { icon: Mail, title: "Relatórios de Lucro Semanais", desc: "Receba o balanço real do seu investimento direto no e-mail, focado em ROI e não em métricas de vaidade." },
                  { icon: Zap, title: "Insights que Viram Vendas", desc: "Nossa IA traduz dados complexos em ações simples que aumentam seu faturamento imediatamente." },
                  { icon: BarChart3, title: "Otimização de Orçamento", desc: "Saiba exatamente onde injetar mais dinheiro para escalar e onde cortar para parar de perder." },
                  { icon: AlertTriangle, title: "Radar de Prejuízo 24/7", desc: "Detectamos anomalias e campanhas que pararam de converter, salvando seu caixa em tempo real." },
                  { icon: Clock, title: "Recupere seu Tempo e Lucro", desc: "Economize 15h por mês de trabalho braçal e foque na estratégia que traz dinheiro para o bolso." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
                      <benefit.icon className="h-6 w-6 text-[#00FF9F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2540]">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-[#0A2540] p-8 shadow-2xl">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-4">
                      <div className="h-8 w-32 rounded bg-white/10"></div>
                      <div className="h-4 w-full rounded bg-white/5"></div>
                      <div className="h-4 w-2/3 rounded bg-white/5"></div>
                    </div>
                    <div className="rounded-2xl bg-[#00FF9F] p-6 text-[#0A2540]">
                      <p className="text-xs font-bold uppercase tracking-wider opacity-60">Status da Conta</p>
                      <p className="mt-1 text-2xl font-bold">Lucro Líquido: +24%</p>
                      <div className="mt-4 h-2 w-full rounded-full bg-[#0A2540]/10">
                        <div className="h-full w-3/4 rounded-full bg-[#0A2540]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Float elements */}
                <div className="absolute -right-8 top-1/4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400">Meta Alcançada</p>
                      <p className="text-sm font-bold text-[#0A2540]">Vendas: R$ 45.200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Quem usa, aprova</h2>
            <p className="mt-4 text-gray-600">Junte-se a centenas de profissionais que recuperaram o controle dos seus dados.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Carolina Mendes", role: "Dona da Bella Modas", text: "Meu ROAS subiu 47% em 45 dias seguindo as recomendações do InsightGhost. Finalmente entendi onde meu dinheiro estava indo." },
              { name: "Rafael Torres", role: "Agência RT Marketing", text: "Economizo 12 horas por semana e meus clientes estão muito mais felizes com os relatórios. O nível de retenção da agência subiu drasticamente." },
              { name: "Lucas Almeida", role: "Gestor de Tráfego", text: "A IA realmente entende de ROI. As recomendações de orçamento são muito precisas. É como ter um analista sênior 24h por dia focado em lucro." }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all hover:-translate-y-1">
                <div className="mb-4 flex text-[#00FF9F]">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <Quote className="mb-4 h-8 w-8 text-gray-100" />
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-bold text-[#0A2540]">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="bg-[#0A2540] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Planos para todos os tamanhos</h2>
            <p className="mt-4 text-gray-400">Comece grátis e escale conforme seu faturamento aumenta.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Free */}
            <div className="rounded-3xl bg-white/5 p-8 border border-white/10 flex flex-col">
              <h3 className="text-xl font-bold">Free</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="ml-1 text-gray-400">/mês</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">Ideal para quem está começando agora.</p>
              <ul className="mt-8 space-y-4 flex-grow">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> 1 Relatório por mês
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Conexão Meta Ads
                </li>
                <li className="flex items-center gap-2 text-sm opacity-50">
                  <CheckCircle2 className="h-4 w-4" /> Insights de IA avançados
                </li>
              </ul>
              <button className="mt-8 w-full rounded-full border border-white/20 py-3 font-bold hover:bg-white/10 transition-colors">
                Começar Agora
              </button>
            </div>

            {/* Pro */}
            <div className="relative rounded-3xl bg-white p-8 text-[#0A2540] shadow-2xl ring-4 ring-[#00FF9F] flex flex-col scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#00FF9F] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#0A2540]">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">R$ 79</span>
                <span className="ml-1 text-gray-500">/mês</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">Para e-commerces que querem crescer rápido.</p>
              <ul className="mt-8 space-y-4 flex-grow">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Relatórios Semanais (4x/mês)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Meta, Google e TikTok Ads
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Insights de IA e Alertas
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Dashboard em Tempo Real
                </li>
              </ul>
              <button className="mt-8 w-full rounded-full bg-[#0A2540] py-4 font-bold text-white hover:bg-[#153a5f] transition-all shadow-lg">
                Começar Teste Grátis
              </button>
            </div>

            {/* Agency */}
            <div className="rounded-3xl bg-white/5 p-8 border border-white/10 flex flex-col">
              <h3 className="text-xl font-bold">Agency</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">R$ 249</span>
                <span className="ml-1 text-gray-400">/mês</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">Para agências com múltiplos clientes.</p>
              <ul className="mt-8 space-y-4 flex-grow">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Até 10 clientes inclusos
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> White Label (Sua Logo)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Suporte Prioritário
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#00FF9F]" /> Exportação em PDF e Excel
                </li>
              </ul>
              <button className="mt-8 w-full rounded-full border border-white/20 py-3 font-bold hover:bg-white/10 transition-colors">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0A2540]">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quais plataformas o InsightGhost suporta?", a: "Atualmente suportamos Google Analytics 4, Meta Ads (Facebook/Instagram), TikTok Ads e planilhas de vendas via Google Sheets." },
              { q: "Meus dados estão seguros?", a: "Sim. Utilizamos criptografia de nível bancário e conexões oficiais via API. Nunca armazenamos suas senhas, apenas lemos os dados necessários para o relatório." },
              { q: "Como os relatórios são enviados?", a: "Você recebe um e-mail toda segunda-feira de manhã com um link para o dashboard dinâmico e um anexo em PDF pronto para leitura ou apresentação." },
              { q: "Posso cancelar a qualquer momento?", a: "Com certeza. Não temos fidelidade. Se não estiver satisfeito, cancele com um clique no painel de configurações." },
              { q: "Preciso saber de análise de dados?", a: "Nenhum conhecimento técnico é necessário. Nossa IA traduz os números complexos em recomendações práticas que qualquer pessoa entende." }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-[#0A2540]">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-gray-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 45C25 30 35 20 50 20C65 20 75 30 75 45V80C75 80 65 75 50 75C35 75 25 80 25 80V45Z" fill="#0A2540" stroke="white" strokeWidth="2"/>
                  <path d="M30 70L45 55L60 65L85 35" stroke="#00FF9F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M75 35H85V45" stroke="#00FF9F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-bold text-[#0A2540]">Insight<span className="text-[#00FF9F]">Ghost</span></span>
              </div>
              <p className="max-w-xs text-gray-500">
                Transformando dados confusos em decisões de lucro para a nova geração de e-commerces brasileiros.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#00FF9F]">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-[#00FF9F]">Preços</a></li>
                <li><a href="#" className="hover:text-[#00FF9F]">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#00FF9F]">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#00FF9F]">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#00FF9F]">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 rounded-3xl bg-[#0A2540] p-8 text-center text-white lg:p-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto para parar de perder dinheiro?</h2>
            <p className="mt-4 text-gray-400">Comece seu teste gratuito de 14 dias hoje mesmo. Sem cartão de crédito.</p>
            <button className="mt-8 rounded-full bg-[#00FF9F] px-10 py-4 text-lg font-bold text-[#0A2540] hover:scale-105 transition-all shadow-xl shadow-green-500/20">
              Criar minha conta grátis
            </button>
          </div>
          
          <div className="mt-20 border-t border-gray-200 pt-10 text-center text-xs text-gray-400">
            © 2026 InsightGhost. Todos os direitos reservados. Feito com ❤️ para o mercado brasileiro.
          </div>
        </div>
      </footer>
    </div>
  );
}
