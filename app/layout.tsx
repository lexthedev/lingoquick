import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Lingo Quick - лингвистическая онлайн-школа.',
  description: 'Онлайн консультации по иностранным языкам. Изучение языков для школьников и родителей.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: `школа, онлайн, online, иностранные, языки, английский, турецкий, испанский, дети, забота, простота, легко, быстро,
  недорого, дёшево, качественно, изучение, егэ, огэ, путешествия, английского, языка, язык, языков, выучить, выучит, для детей,
  для школы, для путешествий, для взрослых, класс, с нуля, репетитор`
}

const yandexMetrika = `
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(${process.env.YANDEX_METRIKA_ID}, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });`

const isWinterNow = () => {
  const today = new Date();
  const winterMonths = [0, 1, 11];
  const thisMonth = today.getMonth();
  return winterMonths.some(wm => wm === thisMonth);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <noscript><div><img src="https://mc.yandex.ru/watch/94967511" alt="noscript" /></div></noscript>
        <script dangerouslySetInnerHTML={{
          __html: yandexMetrika,
        }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#21201e" />
        <meta name="msapplication-TileColor" content="#21201e" />
        <meta name="theme-color" content="#21201e" />
        <link href="https://fonts.cdnfonts.com/css/montserrat-alternates" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        {/* new year snow falling */}
        {/* <script async src="https://thecode.media/wp-content/uploads/2019/12/snowfall2020.js" /> */}
        {isWinterNow() && <script async src="/scripts/snow.js" />}
        <script async src="https://yookassa.ru/checkout-widget/v1/checkout-widget.js"></script>
      </body>
    </html>
  )
}
