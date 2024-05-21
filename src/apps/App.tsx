import Admin from '@/pages/Admin/Admin';
import { ModalProvider } from './providers';

function App() {
    return (
        <ModalProvider>
            <Admin />
        </ModalProvider>
    );
}

export default App;
