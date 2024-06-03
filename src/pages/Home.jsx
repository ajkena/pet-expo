import ContactUs from './ContactUs';

export default function Home() {
  return (
    <main>
      <section className='about'>
        <h1 style={{color: '#5e4949', fontSize: '2rem'}}>About Us</h1>
        <p style={{color: '#5e4949', fontSize: '1.5rem'}}>
          Welcome to Pet Expo, the ultimate destination for pet enthusiasts! Our
          website showcases a delightful array of cats, dogs, and birds,
          complete with stunning photos and comprehensive information about each
          breed. Whether you're a seasoned pet owner or a curious newcomer,
          you'll find everything you need to know about your favorite furry and
          feathered friends. Join us to explore the wonderful world of pets and
          discover the perfect companion for your home!
        </p>
      </section>

      <ContactUs />
    </main>
  );
}
