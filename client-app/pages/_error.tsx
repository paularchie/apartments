import Layout from '../components/Layout/Layout';
import { ErrorPageProps } from 'pages/interfaces';

export default ({ statusCode }: ErrorPageProps) => (
    <Layout title="Error">
        {statusCode
            ? `Couldn't load your user data: Status code ${statusCode}`
            : `Couldn't get that page, sorry!!!`}
    </Layout>
);