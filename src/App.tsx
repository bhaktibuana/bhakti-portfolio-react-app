import MultiProvider from '@/stores/providers/MultiProvider';
import AppRouters from '@/routers';

const App = () => {
	return (
		<>
		<MultiProvider>
			<AppRouters />
		</MultiProvider>
		</>
	);
};

export default App;
