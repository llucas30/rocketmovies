import { Container, Profile, Brand, Search } from "./styles";

import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

export function Header(){
  return(
    <Container to="/profile">
       <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      
      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>
      
      
      

      <Profile to="/profile">

        <div>
          <strong>Lucas Curvello</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/llucas30.png" alt="Foto do usuário"/>
      </Profile>

    </Container>
  );
}