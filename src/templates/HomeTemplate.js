import Head from 'next/head' 
import {Container} from 'components/Container'

export const HomeTemplate = ({title, children}) => {

  return (

    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        {children}
      
      </Container>
    </>
  )
}
