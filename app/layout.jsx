import '@styles/globals.css';

import Nav from '@components/Nav'; 
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main' >
                <div className='gradient' ></div>
            </div>
        </body>

        <main className='app' >
            <Nav />
            {children}
        </main>
    </html>
  )
}

export default RootLayout