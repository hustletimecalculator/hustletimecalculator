'use client';
import {useMemo,useState} from 'react';

export type CalculatorTool='time-card'|'work-hours'|'overtime'|'duration'|'business-days'|'percent';

const tools=[
 ['time-card','Time Card','Weekly hours, breaks, overtime & pay'],
 ['work-hours','Work Hours','Hours between start and end times'],
 ['overtime','Overtime Pay','Regular and overtime earnings'],
 ['duration','Time Duration','Add, subtract and compare times'],
 ['business-days','Business Days','Working days between two dates'],
 ['percent','Percent Change','Increase, decrease and difference']
] as const;

function mins(t:string){if(!t)return null;const [h,m]=t.split(':').map(Number);return h*60+m}
function fmt(m:number){m=((m%1440)+1440)%1440;return `${Math.floor(m/60)}h ${String(m%60).padStart(2,'0')}m`}
function duration(a:string,b:string){const x=mins(a),y=mins(b);if(x===null||y===null)return 0;return y>=x?y-x:y+1440-x}
function daysBetween(a:string,b:string){if(!a||!b)return 0;const A=new Date(a+'T00:00:00'),B=new Date(b+'T00:00:00');return Math.round(Math.abs(B.getTime()-A.getTime())/86400000)}
function businessDays(a:string,b:string){if(!a||!b)return 0;let A=new Date(a+'T00:00:00'),B=new Date(b+'T00:00:00');if(A>B)[A,B]=[B,A];let n=0;for(let d=new Date(A);d<=B;d.setDate(d.getDate()+1)){const w=d.getDay();if(w!==0&&w!==6)n++}return n}

export default function CalculatorHub({initialTool='time-card'}:{initialTool?:CalculatorTool}){
 const [tool,setTool]=useState<CalculatorTool>(initialTool);
 const [start,setStart]=useState('08:00'),[end,setEnd]=useState('17:00'),[br,setBr]=useState('60'),[rate,setRate]=useState('25');
 const [threshold,setThreshold]=useState('40'),[mult,setMult]=useState('1.5');
 const [aDate,setADate]=useState(''),[bDate,setBDate]=useState('');
 const [v1,setV1]=useState('100'),[v2,setV2]=useState('125');
 const [aTime,setATime]=useState('01:30'),[bTime,setBTime]=useState('02:45');

 const work=useMemo(()=>Math.max(0,duration(start,end)-Math.max(0,Number(br)||0)),[start,end,br]);
 const weekly=work*5, ot=Math.max(0,weekly-(Number(threshold)||40)*60), reg=weekly-ot;
 const pay=reg/60*(Number(rate)||0)+ot/60*(Number(rate)||0)*(Number(mult)||1);
 const percent=Number(v1)?((Number(v2)-Number(v1))/Math.abs(Number(v1)))*100:0;
 const pctDiff=(Number(v1)||0)+(Number(v2)||0)?Math.abs(Number(v1)-Number(v2))/((Math.abs(Number(v1))+Math.abs(Number(v2)))/2)*100:0;
 const durationResult=duration(aTime,bTime);

 return <div className="hub">
    <div className="tool-tabs" role="tablist" aria-label="Calculator tools">{tools.map(([id,name,desc])=><button key={id} id={`${id}-tab`} type="button" role="tab" aria-selected={tool===id} aria-controls={`${id}-panel`} className={tool===id?'active':''} onClick={()=>setTool(id)}><b>{name}</b><small>{desc}</small></button>)}</div>
  <div className="tool-card" id={`${tool}-panel`} role="tabpanel" aria-labelledby={`${tool}-tab`}>
   {tool==='time-card'&&<><h2>Time Card Calculator</h2><p className="tool-intro">Estimate a five-day workweek with breaks, overtime and pay.</p><div className="form-grid">
    <label>Start<input type="time" value={start} onChange={e=>setStart(e.target.value)}/></label>
    <label>End<input type="time" value={end} onChange={e=>setEnd(e.target.value)}/></label>
    <label>Unpaid break (min)<input type="number" min="0" value={br} onChange={e=>setBr(e.target.value)}/></label>
    <label>Hourly rate<input type="number" min="0" value={rate} onChange={e=>setRate(e.target.value)}/></label>
    <label>OT after (hours)<input type="number" min="0" value={threshold} onChange={e=>setThreshold(e.target.value)}/></label>
    <label>OT multiplier<input type="number" min="1" step=".05" value={mult} onChange={e=>setMult(e.target.value)}/></label>
   </div><div className="result-grid"><div><span>Daily</span><strong>{fmt(work)}</strong></div><div><span>Weekly</span><strong>{fmt(weekly)}</strong></div><div><span>Overtime</span><strong>{fmt(ot)}</strong></div><div><span>Decimal</span><strong>{(weekly/60).toFixed(2)} h</strong></div><div><span>Estimated pay</span><strong>${pay.toFixed(2)}</strong></div></div></>}
   {tool==='work-hours'&&<><h2>Work Hours Calculator</h2><p className="tool-intro">Find the hours worked between a start and end time.</p><div className="form-grid three"><label>Start<input type="time" value={start} onChange={e=>setStart(e.target.value)}/></label><label>End<input type="time" value={end} onChange={e=>setEnd(e.target.value)}/></label><label>Break (min)<input type="number" min="0" value={br} onChange={e=>setBr(e.target.value)}/></label></div><div className="big-result">{fmt(work)}<small>{(work/60).toFixed(2)} decimal hours</small></div></>}
   {tool==='overtime'&&<><h2>Overtime Pay Calculator</h2><p className="tool-intro">Estimate regular and overtime earnings from weekly hours.</p><div className="form-grid"><label>Total hours<input type="number" min="0" step=".25" value={(weekly/60).toFixed(2)} onChange={e=>{const h=Number(e.target.value)||0;setStart('00:00');setEnd(`${String(Math.min(23,Math.floor(h))).padStart(2,'0')}:${String(Math.round((h%1)*60)).padStart(2,'0')}`)}}/></label><label>Hourly rate<input type="number" min="0" value={rate} onChange={e=>setRate(e.target.value)}/></label><label>OT threshold<input type="number" min="0" value={threshold} onChange={e=>setThreshold(e.target.value)}/></label><label>OT multiplier<input type="number" min="1" step=".05" value={mult} onChange={e=>setMult(e.target.value)}/></label></div><div className="result-grid"><div><span>Regular pay</span><strong>${(reg/60*(Number(rate)||0)).toFixed(2)}</strong></div><div><span>OT pay</span><strong>${(ot/60*(Number(rate)||0)*(Number(mult)||1)).toFixed(2)}</strong></div><div><span>Total pay</span><strong>${pay.toFixed(2)}</strong></div></div></>}
   {tool==='duration'&&<><h2>Time Duration Calculator</h2><p className="tool-intro">Calculate the duration between two times, including overnight periods.</p><div className="form-grid two"><label>Start<input type="time" value={aTime} onChange={e=>setATime(e.target.value)}/></label><label>End<input type="time" value={bTime} onChange={e=>setBTime(e.target.value)}/></label></div><div className="big-result">{fmt(durationResult)}<small>{(durationResult/60).toFixed(2)} decimal hours</small></div></>}
   {tool==='business-days'&&<><h2>Business Days Calculator</h2><p className="tool-intro">Count Monday–Friday days between two dates. Public holidays are not removed in this basic version.</p><div className="form-grid two"><label>Start date<input type="date" value={aDate} onChange={e=>setADate(e.target.value)}/></label><label>End date<input type="date" value={bDate} onChange={e=>setBDate(e.target.value)}/></label></div><div className="big-result">{businessDays(aDate,bDate)}<small>business days, inclusive</small></div></>}
   {tool==='percent'&&<><h2>Percent Change Calculator</h2><p className="tool-intro">Calculate percentage increase, decrease and percentage difference.</p><div className="form-grid two"><label>Original value<input type="number" value={v1} onChange={e=>setV1(e.target.value)}/></label><label>New value<input type="number" value={v2} onChange={e=>setV2(e.target.value)}/></label></div><div className="result-grid"><div><span>Percent change</span><strong>{percent.toFixed(2)}%</strong></div><div><span>Absolute change</span><strong>{(Number(v2)-Number(v1)).toFixed(2)}</strong></div><div><span>Percentage difference</span><strong>{pctDiff.toFixed(2)}%</strong></div></div></>}
  </div>
  <div className="ad">ADVERTISEMENT</div>
 </div>
}