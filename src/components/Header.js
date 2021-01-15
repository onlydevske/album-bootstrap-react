import { Container, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <section className='jumbotron text-center'>
      <Container>
        <h1 className='text-capitalize'>photo album</h1>
        <p className='lead text-muted text-capitalize'>
          a photo and video boom zone
        </p>
        <Button
          type='button'
          variant='primary'
          className='mt-5 p-3 text-capitalize'
        >
          collections
        </Button>{' '}
      </Container>
    </section>
  )
}

export default Header
