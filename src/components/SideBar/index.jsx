import {useState} from 'react';

import {SideBarLayout, List, ListItem} from './styles';
import {Button, LineButton} from './styles';;
import Link from 'next/link';

export default function SideBar(){
  const [state, setState] = useState(false);

    function showHideList(){
        setState(!state);
    }
    
    return(
        <SideBarLayout state={state}>
          <Button onClick={showHideList}>
            <LineButton />
            <LineButton />
            <LineButton />
        </Button>
        <List state={state}>
          <Link href='/view'>
            <ListItem>
              Visualizar posts
          </ListItem>
          </Link>
          <Link href='/add'>
            <ListItem>
              Cadastrar posts
          </ListItem>
          </Link>
          <Link href='/edit'>
            <ListItem>
              Editar posts
          </ListItem>
          </Link>
          <Link href='/delete'>
            <ListItem>
              Deletar posts
          </ListItem>
          </Link>
          <Link href='/logout'>
            <ListItem>
              Sair
          </ListItem>
          </Link>
        </List>
      </SideBarLayout>
    )
}