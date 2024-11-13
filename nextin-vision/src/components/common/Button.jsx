// Button.jsx
import React from 'react';
import { Loader2 } from 'lucide-react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  ripple = true,
  elevation = false,
  rounded = 'md',
  ...props
}) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 500);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const handleRipple = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseStyles = [
    'btn-base',
    `btn-${variant}`,
    `btn-${size}`,
    `rounded-${rounded}`,
    disabled && 'btn-disabled',
    loading && 'btn-loading',
    fullWidth && 'btn-full',
    elevation && 'btn-elevation',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={baseStyles}
      disabled={disabled || loading}
      onClick={(e) => {
        if (ripple) handleRipple(e);
        props.onClick?.(e);
      }}
      {...props}
    >
      <span className="btn-content">
        {loading && (
          <Loader2 className="btn-spinner" />
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="btn-icon btn-icon-left">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && !loading && (
          <span className="btn-icon btn-icon-right">{icon}</span>
        )}
      </span>
      {ripple && isRippling && (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      )}
    </button>
  );
};

export { Button };
export default Button;