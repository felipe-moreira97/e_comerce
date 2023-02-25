import Provider from './Context/globalContext/Provider';
import Rotas from './Routes/Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import * as S from './style'

function App() {
    return (
        <>
            <GlobalStyle />
            <S.App>
                <Provider>
                    <ThemeProvider theme={theme}>
                        <Rotas />
                    </ThemeProvider>
                </Provider>
            </S.App>
        </>
    );
}

export default App;
