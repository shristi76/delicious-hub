import { Link } from 'react-router-dom';

function Button({ children, to, variant = 'primary', type = 'button' }) {
  const className = `button button--${variant}`;

  return to ? <Link to={to} className={className}>{children}</Link> : <button type={type} className={className}>{children}</button>;
}

export default Button;