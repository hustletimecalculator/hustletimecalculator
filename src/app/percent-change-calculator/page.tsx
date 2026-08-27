import CalculatorPage from '../calculator-page';
import {calculatorMetadata,calculatorPages} from '../calculator-pages';

export const metadata=calculatorMetadata('percent-change-calculator');

export default function Page(){
 return <CalculatorPage data={calculatorPages['percent-change-calculator']}/>;
}
