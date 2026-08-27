import CalculatorPage from '../calculator-page';
import {calculatorMetadata,calculatorPages} from '../calculator-pages';

export const metadata=calculatorMetadata('time-duration-calculator');

export default function Page(){
 return <CalculatorPage data={calculatorPages['time-duration-calculator']}/>;
}
