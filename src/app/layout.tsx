import './globals.css';
import type {Metadata} from 'next';

const siteUrl='https://hustletimecalculator.com/';

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:'Hustle Time Calculator - Free Work & Time Calculators',
  description:'Free time calculators for work hours, time cards, overtime pay, time duration, business days and percent change. Fast, private and easy to use.',
  keywords:['time calculator','work hours calculator','time card calculator','overtime calculator','overtime pay calculator','business days calculator','percent change calculator','time duration calculator'],
  alternates:{canonical:siteUrl},
  robots:{index:true,follow:true},
  icons:{icon:'/icon.svg'},
  openGraph:{
    title:'Hustle Time Calculator - Free Work & Time Calculators',
    description:'Free time calculators for work hours, time cards, overtime pay, time duration, business days and percent change. Fast, private and easy to use.',
    url:siteUrl,
    siteName:'Hustle Time Calculator',
    type:'website',
    images:[{url:'/logo.svg',alt:'Hustle Time Calculator logo'}],
  },
  twitter:{
    card:'summary_large_image',
    title:'Hustle Time Calculator - Free Work & Time Calculators',
    description:'Free time calculators for work hours, time cards, overtime pay, time duration, business days and percent change.',
    images:['/logo.svg'],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>
}
