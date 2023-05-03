export const Button = ({color, children, ...props}) => {
  return (
    <button className={`btn btn-${color}`} {...props}>{children}</button>
  )
}
