import './globals.css';
import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'Hustle Time Calculator — Free Time & Work Calculators',
  description:'Free online calculators for work hours, time cards, overtime, time duration, business days and percentage change. Fast, private and mobile friendly.',
  alternates:{canonical:'https://hustletimecalculator.com/'},
  robots:{index:true,follow:true},
  icons:{icon:'/icon.svg'},
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>
}
