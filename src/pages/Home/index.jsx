import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';


export function Home() {
  return (
    <Container>
      <Header />

      <Content>

        <header>
          <Section title="Meus Filmes"/> <Link to="/new"><Button title="+ Adicionar Filme"/></Link>
        </header>

        <Movie data={{
        title: 'InterEstelar',
         tags:[
           {id:'1', name:'Ficição Cientifica'},
           {id:'2', name:'Drama'},
           {id:'2', name:'Familia'}
           ],
           rating:'3',
           }} 
        />
        

        <Movie data={{
        title: 'Guardians of the Galaxy',
         tags:[
           {id:'1', name:'Ficição Cientifica'},
           {id:'2', name:'Comédia'},
           {id:'2', name:'Familia'}
           ],
           rating:'5',
           }} 
        />

      </Content>

    </Container>
  );
}