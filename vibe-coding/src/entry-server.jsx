import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './website/pages/homePage/homePage'
import Footer from './website/components/footer/footer'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <div className="app">
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </StaticRouter>
    </HelmetProvider>
  )
  return { html }
}
