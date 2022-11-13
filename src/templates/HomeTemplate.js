import Head from 'next/head' 
import {Container} from 'uicomponents/Container'

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
