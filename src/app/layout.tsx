import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Time Card Calculator — Free Time Card & Work Hours Calculator',description:'Free online time card calculator for employees, freelancers and side hustlers. Calculate work hours, breaks, overtime, decimal hours and estimated pay instantly.',alternates:{canonical:'https://hustletimecalculator.com/time-card-calculator'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}