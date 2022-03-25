import { HeaderResponsive } from '../components/Navbar.jsx';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const links = {
    links: [
      {
        link: '/',
        label: 'Form',
      },
      {
        link: '/requirements',
        label: 'Submissions',
      },
    ],
  };
  return (
    <div className="h-screen max-h-screen flex flex-col">
      <HeaderResponsive links={links.links} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
