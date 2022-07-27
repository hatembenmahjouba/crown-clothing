import { useParams /* other hooks */ } from 'react-router-dom';

const withRouter = (Component) => (props) => {
  const params = useParams();
  // other hooks, useLocation, useNavigate, etc..
  return <Component {...props} {...{ params /* other injected props */ }} />;
};
export default withRouter;
