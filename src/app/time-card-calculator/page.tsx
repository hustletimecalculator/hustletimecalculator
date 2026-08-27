import CalculatorPage from '../calculator-page';
import {calculatorMetadata,calculatorPages} from '../calculator-pages';

export const metadata=calculatorMetadata('time-card-calculator');

export default function Page(){
 return <CalculatorPage data={calculatorPages['time-card-calculator']}/>;
}
