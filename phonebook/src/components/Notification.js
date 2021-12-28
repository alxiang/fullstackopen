const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    const style = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }
  
    return (
      <div style={style} className='error'>
        {message}
      </div>
    )
  }

export default Notification