import { FormDiv, FormHead, FormBody, FormFooter, Form, Input, Button, TextArea, Label } from '../../src/components/Form';
import { Container } from '../../src/components/Container/index';
import SideBar from '../../src/components/SideBar';
import { Layout } from '../../src/components/Layout';
export default function AddPost() {
    return (

        <Layout>
            <SideBar />

            <Container>
                <FormDiv>
                    <Form method='POST'>
                        <FormHead>
                            Cadastro de novas postagens
                        </FormHead>
                        <FormBody>
                            <Label for='title-input'>Insira o título</Label>
                            <Input id='title-input' placeholder="Ex: ReactJS" />
                            <Label for='content'>Insira o conteúdo</Label>
                            <TextArea id='content' placeholder="Ex: ReactJS">
                            </TextArea>
                        </FormBody>
                        <FormFooter>
                            <Button type='submit'>Criar postagem</Button>
                        </FormFooter>
                    </Form>
                </FormDiv>
            </Container>
        </Layout>

    )
}