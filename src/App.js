
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Home } from './pages/Home';
import { Card } from './pages/Card';
import { Wallet } from './pages/Wallet';
import { ContactUs } from './pages/ContactUs';
import { Privacy } from './pages/Privacy';
import { Calculator } from './pages/Calculator';
import { Legal } from './pages/Legal';
import { About } from './pages/About';
import { Career } from './pages/Career';
import { Transfers } from './pages/Transfers';
import { Wires } from './pages/Wires';
import { Price } from './pages/Price';
import { DashboardView } from './pages/DashboardView';
import { DashboardPage } from './components/DashboardPage';
import { ApplyNow } from './components/ApplyNow'
import { CardTransactionView } from './components/card-transactions/CardTransactionsView';
import { NewDepositsView } from './components/deposit/new/NewDepositsView';

function App() {

	const isLoggedIn = true;
	const isVerified = true;
	const isAdmin = true;

	return (
		<Router>
			<Switch>
				<Route exact component={Home} path="/" />
				<Route exact component={Card} path="/card" />
				<Route exact component={Wallet} path="/wallet" />
				<Route exact component={ContactUs} path="/contact" />
				<Route component={Privacy} path="/privacy" />
				<Route exact component={Calculator} path="/calculator" />
				<Route component={Legal} path="/legal" />
				<Route component={About} path="/about" />
				<Route component={Career} path="/careers" />
				<Route component={Transfers} path="/transfers" />
				<Route component={Price} path="/price" />
				<Route component={ApplyNow} path="/apply" />
				<Redirect exact from="/home" to={{ pathname: '/home/dashboard' }} />
				<DashboardView exact path="/home/dashboard" component={DashboardPage} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<DashboardView exact path="/home/wallet" component={DashboardPage} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<DashboardView exact path="/home/wires" component={Wires} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<DashboardView exact path="/home/transactions" component={CardTransactionView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<DashboardView exact path="/home/deposit" component={NewDepositsView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
			</Switch>
		</Router>
	);
}

export default App;
