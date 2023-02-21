import Provider from './Context/globalContext/Provider';
import Rotas from './Routes/Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
        <div className="App">
            <Provider>
                <ThemeProvider theme={theme}>
                    <Rotas />
                </ThemeProvider>
            </Provider>
        </div>
        </>
    );
}

export default App;
