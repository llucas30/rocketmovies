import { Container } from "./styles";
import { Tag } from "../Tag"
import { PositiveRatings, NegativeRatings } from '../Ratings'

export function Movie({ data, ...rest }) {
  return(
      <Container {...rest}>
      <h1>{data.title}</h1>

      {   
      <header>
        <PositiveRatings title={data.rating}/>
        <NegativeRatings title={data.rating}/>
      </header>
      }

      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error est placeat sit iste possimus quos, quisquam aliquam perspiciatis sed unde, odio ratione quam reiciendis soluta optio quasi. Dolorem, hic aliquid!
      </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}