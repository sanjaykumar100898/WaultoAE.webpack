import Layout from '../components/Layout';
import Link from 'next/link';
import myImg from '../public/static/images/logo.svg' 

const Index = () => {
    return (
        <Layout>
            <h2 className="index">Index page</h2>
            <div>
  <img src={myImg} />
</div>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
        </Layout>
    );
};

export default Index;