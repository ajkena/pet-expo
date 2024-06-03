import { Button, TextField } from '@mui/material';

export default function ContactUs() {
  return (
    <section className='contact'>
      <h1 style={{color: '#5e4949'}}>Contact Us</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          const formData = new FormData(event.target);
          console.log(Object.fromEntries(formData.entries()));
        }}
      >
        <TextField name='firstName' placeholder='First Name' />
        <TextField name='lastName' placeholder='Last Name' />
        <TextField name='email' placeholder='Email' />
        <TextField name='message' placeholder='Message'  />
        <Button type='submit' variant='outlined' style={{backgroundColor: '#5e4949', color: 'white', padding: '0.5rem 2rem', borderRadius: '5px', border: 'none', cursor: 'pointer'}}>
          Send
        </Button>
      </form>
    </section>
  );
}
