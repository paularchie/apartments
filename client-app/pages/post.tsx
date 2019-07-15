import Layout from "../components/Layout/Layout";
import { withRouter  } from "next/router";

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p>post content</p>
    </Layout>
);

export default withRouter(Post);