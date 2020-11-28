import { Container, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <section className='jumbotron text-center'>
      <Container>
        <h1>Album example</h1>
        <p className='lead text-muted'>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <Button type="button" variant='primary'>main call to action</Button>{' '}
        <Button type="button" variant='secondary'>secondary call to action</Button>{' '}
      </Container>
    </section>
  )
}

export default Header
