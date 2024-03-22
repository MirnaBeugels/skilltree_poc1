import "./globals.css";
import styles from './styles.module.css'
import { Istok_Web } from "next/font/google";

// Configure Google Fonts
const istok_web = Istok_Web({ 
  weight: ['400', '700'], 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-istokweb'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={istok_web.className}>
      <body className={styles.className}>{children}</body>
    </html>
  );
}
