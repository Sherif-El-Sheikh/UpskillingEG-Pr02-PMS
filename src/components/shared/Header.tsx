interface HeaderProps {
  icon: React.ReactNode;
  title: string;
  mainTitle: string;
}
const Header = ({ icon, title, mainTitle }: HeaderProps) => {
  return (
    <>
      <div className="header px-5 py-3 mt-2 bg-white">
        <p className="d-flex align-items-center gap-1">
          <span>{icon}</span>
          <span className="mt-1">{title}</span>
        </p>
        <h4 className="fs-5">{mainTitle}</h4>
      </div>
    </>
  );
};

export default Header;
