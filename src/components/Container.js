export const Container = ({children, ...props}) => {
  const paddings = new Array(6).fill(e => `p-${e + 1}`)
  return ( 
    <div className='container'>
      {children}
    </div>
  )
}
