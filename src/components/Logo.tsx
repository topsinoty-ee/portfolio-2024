/** @format */

interface LogoProps {
  logoSrc?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ logoSrc, className }) => {
  return logoSrc ? (
    <img
      alt="logo"
      className={`h-5 ${className}`}
      src={logoSrc}
    />
  ) : (
    <p className="btn btn-ghost text-xl">LOGO HERE</p>
  );
};
