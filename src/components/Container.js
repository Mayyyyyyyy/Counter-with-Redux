import { Layout } from 'antd';
import Counter from './Counter';

const { Header, Footer,  Content } = Layout;

const Container = () => {
    return ( 
        <div>
            <Layout>
                <Header className="header">Counter with Redux+React-Redux</Header>
                <Content className="content">
                    <Counter />
                </Content>
                <Footer className="footer">@May 2021</Footer>
            </Layout>
        </div>
     );
}
 
export default Container;