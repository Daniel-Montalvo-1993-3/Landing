import landing1 from '../Images/home.webp';
import landing2 from '../Images/registro.png';
import landing3 from '../Images/bases.jpg';
import landing4 from '../Images/premio.png';

export const firstLanding = {
  id: 'home',
  variantStyle: {
    height: '110vh',
    width: '100%',
    backgroundImage: `url(${landing1})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}

export const secondLanding = {
  id: 'registro',
  variantStyle: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${landing2})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-25px' 
  }
}

export const thirdLanding = {
  id: 'bases',
  variantStyle: {
    height: '120vh',
    width: '100%',
    backgroundImage: `url(${landing3})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-130px'
  }
}


export const fourthLanding = {
  id: 'premio',
  variantStyle: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${landing4})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'revert',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-130px'
  }
}
