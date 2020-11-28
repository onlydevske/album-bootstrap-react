import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='text-muted'>
      <Container>
        <p className='float-right'>
          <a href='#'>Back to top</a>
        </p>
        <p>
          Album Bootstrap React example is &copy; Bootstrap - Examples, it is an open source project
        </p>
        <p>
          Modified by {' '}
          <a href='http://chrisachinga.me/'>Chris Achinga</a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
