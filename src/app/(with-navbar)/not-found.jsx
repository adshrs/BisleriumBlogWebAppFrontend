import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{marginBottom: 10}}>404-Not Found</h1>
      <p style={{marginBottom: 10}}>Sorry, the page you are looking for does not exist.</p>
      <Link href={"/"} style={{ textDecoration: 'underline' }}>
          Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
