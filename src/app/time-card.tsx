'use client';
import {useEffect,useMemo,useState} from 'react';
type Day={name:string,start:string,end:string,breakMin:number};
const names=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const initial=names.map(name=>({name,start:'',end:'',breakMin:60}));
function minutes(start:string,end:string,br:number){if(!start||!end)return 0;const [sh,sm]=start.split(':').map(Number),[eh,em]=end.split(':').map(Number);let a=sh*60+sm,b=eh*60+em;if(b<a)b+=1440;return Math.max(0,b-a-Math.max(0,br||0))}
function fmt(m:number){return `${Math.floor(m/60)}h ${String(m%60).padStart(2,'0')}m`}
export default function TimeCard(){
 const [days,setDays]=useState<Day[]>(initial),[rate,setRate]=useState('25'),[threshold,setThreshold]=useState('40'),[mult,setMult]=useState('1.5'),[saved,setSaved]=useState(false);
 useEffect(()=>{try{const s=localStorage.getItem('wtc');if(s)setDays(JSON.parse(s))}catch{}},[]);
 const totals=useMemo(()=>{const vals=days.map(d=>minutes(d.start,d.end,d.breakMin));const total=vals.reduce((a,b)=>a+b,0);const th=Math.max(0,Number(threshold)||40)*60;const ot=Math.max(0,total-th),reg=total-ot;const r=Math.max(0,Number(rate)||0),m=Math.max(1,Number(mult)||1);return {vals,total,ot,reg,pay:reg/60*r+ot/60*r*m}},[days,rate,threshold,mult]);
 function update(i:number,k:keyof Day,v:string|number){setDays(x=>x.map((d,j)=>j===i?{...d,[k]:v}:d))}
 function save(){localStorage.setItem('wtc',JSON.stringify(days));setSaved(true);setTimeout(()=>setSaved(false),1400)}
 return <div className="card"><div className="toolbar"><div><b>Weekly time card</b><div className="muted">Your entries stay on this device.</div></div><div className="settings"><label>Hourly rate <input value={rate} onChange={e=>setRate(e.target.value)} inputMode="decimal"/></label><label>OT after <input value={threshold} onChange={e=>setThreshold(e.target.value)} inputMode="decimal"/> h</label><label>OT multiplier <input value={mult} onChange={e=>setMult(e.target.value)} inputMode="decimal"/>×</label></div></div>
<div className="table"><div className="tr th"><div>Day</div><div>Start</div><div>End</div><div>Break</div><div>Worked</div></div>{days.map((d,i)=><div className="tr" key={d.name}><div className="day">{d.name}</div><input aria-label={`${d.name} start`} type="time" value={d.start} onChange={e=>update(i,'start',e.target.value)}/><input aria-label={`${d.name} end`} type="time" value={d.end} onChange={e=>update(i,'end',e.target.value)}/><div className="break"><input type="number" min="0" max="720" value={d.breakMin} onChange={e=>update(i,'breakMin',Number(e.target.value))}/><span>min</span></div><div className="worked">{fmt(totals.vals[i])}</div></div>)}</div>
<div className="results">{[['Regular',fmt(totals.reg)],['Overtime',fmt(totals.ot)],['Total',fmt(totals.total)],['Decimal',(totals.total/60).toFixed(2)+' h'],['Estimated pay','$'+totals.pay.toFixed(2)]].map(([a,b])=><div key={a}><span>{a}</span><strong>{b}</strong></div>)}</div>
<div className="actions"><button onClick={save}>Save on this device</button><button className="secondary" onClick={()=>setDays(initial.map(x=>({...x})))}>Reset</button><span className="saved">{saved?'Saved ✓':''}</span></div></div>}