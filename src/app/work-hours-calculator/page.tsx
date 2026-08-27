import CalculatorPage from '../calculator-page';
import {calculatorMetadata,calculatorPages} from '../calculator-pages';

export const metadata=calculatorMetadata('work-hours-calculator');

export default function Page(){
 return <CalculatorPage data={calculatorPages['work-hours-calculator']}/>;
}
