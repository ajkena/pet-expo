
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Card,
  TextField,
} from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

export default function Gallery() {
  const [animals, setAnimals] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); //for search bar

  const handleClickOpen = useCallback((data) => {
    setOpen(true);
    setCurrentAnimal(data);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split('/');
    const animalType = parts.pop();

    if (animalType) {
      fetch(`https://freetestapi.com/api/v1/${animalType}`).then(
        async (response) => {
          const animals = await response.json();
          setAnimals(animals);
        }
      );
    }
  }, []);

  return (
    <main>
      <h1 style={{textAlign: 'center', color: '#5e4949', fontSize: '2.5rem', fontFamily: 'serif', fontWeight: 'lighter', padding: '1.2rem'}}>Animals Gallery</h1>
      <TextField
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder='Search'
         style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem'}}
      />
      <Grid container columnSpacing={2}>
        {animals
          .filter((animal) => {
            return searchQuery
              ? animal.name.toLowerCase().includes(searchQuery.toLowerCase())
              : true;
          })
          .map((animal) => (
            <Grid key={animal.id} item xs={3}>
              <Card key={animal.image} onClick={() => handleClickOpen(animal)} className='cards'>
                <img src={animal.image} />
                <p style={{fontWeight: 'bold', fontSize: '1.3rem'}}>{animal.name} </p>
                <p style={{fontWeight: 'medium'}}>{animal.origin}</p>
              </Card>
            </Grid>
          ))}
        <Dialog onClose={handleClose} open={open} >
          <DialogTitle style={{textAlign: 'center', fontSize: '1.5rem', color:'#5e4949', backgroundColor: '#c96868'}}>{currentAnimal.name}</DialogTitle>
          <DialogContent className='dialog'>
            <>
              {Object.entries(currentAnimal).map(([key, value]) => {
                if (key === 'id') {
                  return;
                }

                if (key === 'image') {
                  return <img src={value} key={key + value}></img>;
                }
                return (
                  <p key={key + value}>
                    {key}: {value}
                  </p>
                );
              })}
            </>
          </DialogContent>
        </Dialog>
      </Grid>
    </main>
  );
}
