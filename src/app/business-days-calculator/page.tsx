import CalculatorPage from '../calculator-page';
import {calculatorMetadata,calculatorPages} from '../calculator-pages';

export const metadata=calculatorMetadata('business-days-calculator');

export default function Page(){
 return <CalculatorPage data={calculatorPages['business-days-calculator']}/>;
}
