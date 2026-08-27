import CalculatorHub from './calculator-hub';

const structuredData={
 '@context':'https://schema.org',
 '@graph':[
    {
     '@type':'WebSite',
     '@id':'https://hustletimecalculator.com/#website',
     name:'Hustle Time Calculator',
     url:'https://hustletimecalculator.com/',
     description:'Free time calculators for work hours, time cards, overtime pay, time duration, business days and percent change.',
    },
    {
     '@type':'WebApplication',
     '@id':'https://hustletimecalculator.com/#application',
     name:'Hustle Time Calculator',
     url:'https://hustletimecalculator.com/',
     description:'Free, private calculators for work hours, time cards, overtime pay, time duration, business days and percent change.',
     applicationCategory:'BusinessApplication',
     operatingSystem:'Web browser',
     image:'https://hustletimecalculator.com/logo.svg',
     featureList:[
        'Time Card Calculator',
        'Work Hours Calculator',
        'Overtime Pay Calculator',
        'Time Duration Calculator',
        'Business Days Calculator',
        'Percent Change Calculator',
     ],
    },
    {
     '@type':'ItemList',
     '@id':'https://hustletimecalculator.com/#calculators',
     name:'Hustle Time Calculator tools',
     itemListElement:['Time Card Calculator','Work Hours Calculator','Overtime Pay Calculator','Time Duration Calculator','Business Days Calculator','Percent Change Calculator'].map((name,position)=>({
        '@type':'ListItem',
        position:position+1,
        name,
        url:`https://hustletimecalculator.com/#${['time-card','work-hours','overtime','duration','business-days','percent'][position]}`,
     })),
    },
 ],
};

export default function Page(){
 return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  <header className="site-header"><div className="wrap nav">
   <a className="brand" href="/" aria-label="Hustle Time Calculator home"><img src="/logo.svg" alt="Hustle Time Calculator" /></a>
   <nav><a href="#tools">Tools</a><a href="#how">How It Works</a><a href="#faq">FAQ</a></nav>
  </div></header>
  <section className="hero"><div className="wrap">
   <div className="eyebrow">FREE WORK & TIME TOOLS</div>
   <h1>Track your time.<br/><em>Know your worth.</em></h1>
   <p className="lead">Simple calculators for work hours, time cards, overtime, dates and percentages. Fast, private and free.</p>
   <div className="trust"><span>✓ No sign up</span><span>✓ Runs in your browser</span><span>✓ Mobile friendly</span></div>
  </div></section>
  <section id="tools" className="wrap"><CalculatorHub/></section>
  <section id="how" className="wrap content">
   <div className="ad">ADVERTISEMENT</div>
   <h2>Free calculators for work and everyday tasks</h2>
   <p>Hustle Time Calculator is designed for employees, freelancers, contractors, small businesses and anyone who needs a quick answer. Calculations happen in your browser, so there is no file upload or account required.</p>
   <div className="feature-grid"><div><b>Work & pay</b><p>Total weekly hours, estimate overtime and calculate hourly pay.</p></div><div><b>Time & dates</b><p>Find durations, add or subtract time, and count business days.</p></div><div><b>Percentages</b><p>Calculate percentage change, increase and decrease instantly.</p></div></div>
   <h2 id="faq">Frequently Asked Questions</h2>
   <details><summary>Are these calculators free?</summary><p>Yes. The tools are designed to be free to use without an account.</p></details>
   <details><summary>Are my calculations sent to a server?</summary><p>No. The calculation logic runs in your browser. Saved time cards use local browser storage.</p></details>
   <details><summary>Can I use the tools on my phone?</summary><p>Yes. The interface is responsive and works on modern mobile browsers.</p></details>
   <details><summary>Can I use the overtime calculator for payroll?</summary><p>It is an estimate. Payroll rules vary by employer and jurisdiction, so verify results before relying on them for official payroll.</p></details>
  </section>
  <footer><div className="wrap footer"><div><b>◷ Hustle Time Calculator</b><p>Free time and pay tools for people who work.</p></div><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div></footer>
 </main>
}