import Link from 'next/link';
import CalculatorHub,{type CalculatorTool} from './calculator-hub';

export type CalculatorPageData={
  tool:CalculatorTool;
  title:string;
  description:string;
  explanation:string;
  faqs:[string,string][];
  related:{href:string,title:string}[];
};

export default function CalculatorPage({data}:{data:CalculatorPageData}){
 return <main>
  <header className="site-header"><div className="wrap nav">
   <Link className="brand" href="/" aria-label="Hustle Time Calculator home"><img src="/logo.svg" alt="Hustle Time Calculator" /></Link>
   <nav><Link href="/">Home</Link><a href="#calculator">Calculator</a><a href="#faq">FAQ</a></nav>
  </div></header>
  <section className="hero"><div className="wrap">
   <div className="eyebrow">FREE WORK & TIME TOOL</div>
   <h1>{data.title}</h1>
   <p className="lead">{data.description}</p>
  </div></section>
  <section id="calculator" className="wrap"><CalculatorHub initialTool={data.tool}/></section>
  <section className="wrap content">
   <h2>About the {data.title}</h2>
   <p>{data.explanation}</p>
   <h2 id="faq">Frequently Asked Questions</h2>
   {data.faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
   <h2>Related calculators</h2>
   <p>{data.related.map((related,index)=><span key={related.href}>{index>0?' · ':''}<Link href={related.href}>{related.title}</Link></span>)}</p>
   <p><Link href="/">View all six calculators on the homepage</Link></p>
  </section>
  <footer><div className="wrap footer"><div><b>◷ Hustle Time Calculator</b><p>Free time and pay tools for people who work.</p></div><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>
 </main>
}
