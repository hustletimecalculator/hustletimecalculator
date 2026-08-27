import type {Metadata} from 'next';
import type {CalculatorPageData} from './calculator-page';

const siteUrl='https://hustletimecalculator.com';

export const calculatorPages={
 'time-card-calculator':{
  tool:'time-card',title:'Time Card Calculator',
  description:'Calculate weekly work hours, unpaid breaks, overtime and estimated pay from your daily schedule.',
  explanation:'Use this time card calculator to estimate a five-day workweek from your start time, end time and unpaid break. Add an hourly rate and overtime settings for a quick estimate of regular hours, overtime and pay.',
  faqs:[['How does the time card calculator work?','Enter your daily start and end times, unpaid break, hourly rate and overtime settings. The calculator estimates a five-day workweek.'],['Does it calculate overtime pay?','Yes. Set the overtime threshold and multiplier to estimate regular pay, overtime pay and total estimated pay.']],
  related:[{href:'/work-hours-calculator',title:'Work Hours Calculator'},{href:'/overtime-pay-calculator',title:'Overtime Pay Calculator'}],
 },
 'work-hours-calculator':{
  tool:'work-hours',title:'Work Hours Calculator',
  description:'Find the time worked between a start and end time, with an option to subtract an unpaid break.',
  explanation:'This work hours calculator helps you find the length of a shift. Enter when work starts and ends, then subtract a break to see the result in hours and decimal hours. Overnight shifts are supported.',
  faqs:[['Can I calculate an overnight shift?','Yes. When the end time is earlier than the start time, the calculator treats the shift as continuing into the next day.'],['Can I subtract an unpaid break?','Yes. Enter the break length in minutes and it will be subtracted from the time between the two times.']],
  related:[{href:'/time-card-calculator',title:'Time Card Calculator'},{href:'/time-duration-calculator',title:'Time Duration Calculator'}],
 },
 'overtime-pay-calculator':{
  tool:'overtime',title:'Overtime Pay Calculator',
  description:'Estimate regular earnings, overtime pay and total weekly pay from hours, rate and overtime settings.',
  explanation:'Use this overtime pay calculator to split weekly hours into regular and overtime hours. Enter your hourly rate, overtime threshold and multiplier to estimate regular pay, overtime pay and total pay.',
  faqs:[['What overtime rate should I enter?','Enter the multiplier used for your situation, such as 1.5 for time-and-a-half. Rules vary by employer and location.'],['Is this an official payroll calculation?','No. This is a quick estimate. Confirm applicable payroll rules before using the result for official purposes.']],
  related:[{href:'/time-card-calculator',title:'Time Card Calculator'},{href:'/work-hours-calculator',title:'Work Hours Calculator'}],
 },
 'time-duration-calculator':{
  tool:'duration',title:'Time Duration Calculator',
  description:'Calculate the duration between two times, including periods that pass midnight.',
  explanation:'Enter a start time and an end time to calculate the elapsed duration. This tool handles an end time on the following day and shows the result in hours and decimal hours.',
  faqs:[['Does it support times after midnight?','Yes. If the end time is earlier than the start time, the result is treated as an overnight duration.'],['What format is the result shown in?','The result is shown as hours and minutes, with a decimal-hours value underneath.']],
  related:[{href:'/work-hours-calculator',title:'Work Hours Calculator'},{href:'/business-days-calculator',title:'Business Days Calculator'}],
 },
 'business-days-calculator':{
  tool:'business-days',title:'Business Days Calculator',
  description:'Count the weekdays between two dates, inclusive, while excluding Saturdays and Sundays.',
  explanation:'Use this business days calculator to count Monday through Friday between a start date and end date. The result includes both dates when they are weekdays and does not remove public holidays.',
  faqs:[['Are public holidays excluded?','No. This basic calculator excludes Saturdays and Sundays but does not account for public holidays.'],['Are the start and end dates included?','Yes. Weekdays on both the start and end dates are included in the count.']],
  related:[{href:'/time-duration-calculator',title:'Time Duration Calculator'},{href:'/percent-change-calculator',title:'Percent Change Calculator'}],
 },
 'percent-change-calculator':{
  tool:'percent',title:'Percent Change Calculator',
  description:'Calculate percentage increase, decrease, absolute change and percentage difference between two values.',
  explanation:'Enter an original value and a new value to calculate the percent change. The calculator also shows the absolute change and percentage difference so you can compare values clearly.',
  faqs:[['How is percent change calculated?','Percent change compares the difference between the new and original values with the absolute original value.'],['What is percentage difference?','Percentage difference compares the absolute difference with the average of the two absolute values.']],
  related:[{href:'/overtime-pay-calculator',title:'Overtime Pay Calculator'},{href:'/business-days-calculator',title:'Business Days Calculator'}],
 },
} satisfies Record<string,CalculatorPageData>;

export function calculatorMetadata(slug:keyof typeof calculatorPages):Metadata{
 const page=calculatorPages[slug];
 return {
  title:`${page.title} | Hustle Time Calculator`,
  description:page.description,
  alternates:{canonical:`${siteUrl}/${slug}/`},
  openGraph:{title:`${page.title} | Hustle Time Calculator`,description:page.description,url:`${siteUrl}/${slug}/`,type:'website'},
  twitter:{card:'summary',title:`${page.title} | Hustle Time Calculator`,description:page.description},
 };
}
