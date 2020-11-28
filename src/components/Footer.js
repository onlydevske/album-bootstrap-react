import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='text-muted'>
      <Container>
        <p className='float-right'>
          <a href='#'>Back to top</a>
        </p>
        <p>
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </p>
        <p>
          New to Bootstrap?{' '}
          <a href='https://getbootstrap.com/'>Visit the homepage</a> or read our{' '}
          <a href='../getting-started/introduction/'>getting started guide</a>.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
