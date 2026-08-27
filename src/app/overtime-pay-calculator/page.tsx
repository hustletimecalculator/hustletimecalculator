import CalculatorPage from '../calculator-page';
import {calculatorMetadata,calculatorPages} from '../calculator-pages';

export const metadata=calculatorMetadata('overtime-pay-calculator');

export default function Page(){
 return <CalculatorPage data={calculatorPages['overtime-pay-calculator']}/>;
}
