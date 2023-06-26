import { Container, Form } from "./styles";
import { Input } from '../../components/Input';
import { Button, ButtonDark } from '../../components/Button';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';
import { Section } from '../../components/Section';
import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom';

export function New(){
return(

  <Container>
    <Header></Header>

    <main>
      <Form>
        <header><Link to="/"> <FiArrowLeft /> voltar</Link>
          <h1>Novo filme</h1>

          
        </header>

        <div  className = "title" >
        <Input placeholder = "Titulo" /> <Input placeholder = "Sua nota (de 0 a 5)" />
        </div>

        <Textarea placeholder = "Observações" />

       

        <Section title = "Marcadores">

        <div className = "tags">
        <MovieItem value = "Aventura" />
        <MovieItem isNew placeholder = "Novo marcador"/>
        </div>

          <div className="buttons">
          <ButtonDark title = "Excluir filme" isInverse />
          <Button title = "Salvar alterações" />
          </div>
        </Section>


        


      </Form>
    </main>

  </Container>

)};

