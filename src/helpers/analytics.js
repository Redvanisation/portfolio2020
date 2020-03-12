import ReactGA from 'react-ga';

const analyze = () => {
  ReactGA.initialize('UA-160394542-1');
  ReactGA.pageview('Main');
};

export default analyze;
