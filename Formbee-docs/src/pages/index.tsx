import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    history.push('/docs'); // Replace '/docs/intro' with your actual docs entry path
  }, [history]);

  return (
    <Layout
      title="Redirecting to Docs..."
      description="You are being redirected to the documentation"
    >
      <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Redirecting to Documentation...</h1>
        <p>If you are not redirected automatically, <a href="/docs/intro">click here</a>.</p>
      </div>
    </Layout>
  );
}